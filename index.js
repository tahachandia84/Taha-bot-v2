/**
 * Robust launcher for Priyansh.js + minimal dashboard (index.html)
 * - Keeps your original routes and behaviour intact (serves index.html).
 * - Makes the bot child process (Priyansh.js) highly resilient:
 *   • Automatic unlimited restarts with exponential backoff
 *   • Logs restarts, errors, and child stdout/stderr
 *   • Graceful shutdown handling (SIGINT/SIGTERM)
 *   • Health-check watchdog that restarts the child if it dies
 *
 * NOTE:
 * - This replaces your previous launcher script but keeps the same endpoints/behavior.
 * - For true 24/7 production use, consider running this under PM2 or a systemd service.
 */

const { spawn } = require("child_process");
const axios = require("axios");
const path = require("path");
const express = require('express');
const fs = require('fs');

// Simple logger fallback if ./utils/log missing
let logger;
try {
  logger = require("./utils/log");
} catch (e) {
  logger = (msg, tag = "[LOG]") => {
    // ensure newline and timestamp
    console.log(`${new Date().toISOString()} ${tag} ${msg}`);
  };
}

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 8080;

// Serve index.html if present
app.get('/', function (req, res) {
    const idx = path.join(__dirname, '/index.html');
    if (fs.existsSync(idx)) return res.sendFile(idx);
    res.type('txt').send('Index not found');
});

// Start the server and add error handling
const server = app.listen(port, () => {
    logger(`Server is running on port ${port}...`, "[ Starting ]");
});
server.on('error', (err) => {
    if (err.code === 'EACCES') {
        logger(`Permission denied. Cannot bind to port ${port}.`, "[ Error ]");
    } else {
        logger(`Server error: ${err.message}`, "[ Error ]");
    }
});

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

// Initialize global restart counter
global.countRestart = global.countRestart || 0;

let child = null;
let restarting = false;

// Backoff config
const BACKOFF = {
  initial: 2000,      // 2s
  max: 60000,         // 1min
  factor: 1.5
};

let currentDelay = BACKOFF.initial;

/**
 * spawnChild - starts the child process and wires stdout/stderr
 */
function spawnChild() {
  const scriptPath = path.join(__dirname, "Priyansh.js");

  if (!fs.existsSync(scriptPath)) {
    logger(`Target script not found: ${scriptPath}`, "[ Error ]");
    return null;
  }

  // Use absolute path to script and don't pass extra node flags unless required
  // Keep shell: true for compatibility with Windows if needed
  const proc = spawn(process.execPath, [scriptPath], {
    cwd: __dirname,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: false
  });

  // Pipe child's stdout/stderr to our logger
  proc.stdout.on('data', (d) => {
    logger(d.toString().trim(), "[ Child stdout ]");
  });
  proc.stderr.on('data', (d) => {
    logger(d.toString().trim(), "[ Child stderr ]");
  });

  proc.on('error', (err) => {
    logger(`Child process error: ${err.message}`, "[ Child Error ]");
  });

  proc.on('spawn', () => {
    logger(`Child spawned (pid=${proc.pid})`, "[ Child ]");
  });

  return proc;
}

/**
 * startBot - manage the lifecycle and restart loop
 */
function startBot(message) {
  if (message) logger(message, "[ Starting ]");

  if (child && !child.killed && child.exitCode === null) {
    logger("Child already running, skipping spawn.", "[ Info ]");
    return;
  }

  child = spawnChild();

  if (!child) {
    // If spawn failed, schedule retry with backoff
    scheduleRestartWithBackoff("Spawn failed - scheduling retry");
    return;
  }

  // Reset backoff on successful start
  currentDelay = BACKOFF.initial;
  global.countRestart = 0;

  child.on("close", (code, signal) => {
    logger(`Child closed. code=${code} signal=${signal}`, "[ Child ]");

    // If we intentionally shut down (SIGTERM) then don't restart
    if (restarting) {
      logger("Restart in progress by launcher - not scheduling additional restart.", "[ Info ]");
      return;
    }

    // Always restart to keep it 24/7
    scheduleRestartWithBackoff(`Child exited (code=${code})`);
  });

  child.on("exit", (code, signal) => {
    logger(`Child exited. code=${code} signal=${signal}`, "[ Child ]");
    // handled by 'close' handler above
  });
}

/**
 * scheduleRestartWithBackoff - schedules a restart using exponential backoff
 */
let restartTimer = null;
function scheduleRestartWithBackoff(reason) {
  // Capless restarts for "nonstop" requirement, but we increase delay up to BACKOFF.max
  logger(`${reason}. Scheduling restart in ${Math.round(currentDelay / 1000)}s`, "[ Restart ]");
  if (restartTimer) clearTimeout(restartTimer);

  restartTimer = setTimeout(() => {
    restartTimer = null;
    global.countRest
