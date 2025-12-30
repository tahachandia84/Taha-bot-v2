const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by JERRY",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.MERA BOYFRIEND KON BANEGA 🥹🙈\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\nHAWELI PR Q NAHI ATE NARAZ HO  😂🙂\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n       【﻿࿐TAHA】\n\n•──────────────────•\n.BABU ITTU 🤏 SA CHUMMA DO NA 🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿TAHA࿐】\n\n•──────────────────•\nBaby tum BACHPAN SE THARKI LAGTE HO MEKO 🙁\n•──────────────────•" ,"\n🄾🅆🄽🄴🅁\n      【﻿✮⃝TAHA࿐】\n\n•──────────────────•\nRaat KO ana Haweli py khushbu laga k😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.RAAT KO HAWELI PE KON BULA RAHA THA 😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.PYAARI LADKIA JËRRY NÕBÏ PE LINE MAAR SAKTI HAI 🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.TUM ITNE MASOOM KYU HO BABU 🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n AJJ TO TUMHE LOVE YOU BOLNA PARE GA 🙈🫣\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.TUM LOG MATLABI HO SARE JAO YAHA SE 🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n.SETTING KARWA DU OWNER (JËRRY) KE SATH😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n. MUJHE LAGTA HAI MAI SINGLE MARU GI 🥹😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n BAR BAR BOT NA BOLA KARO HABIBI APUN KO SHARM ATI HAI 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n TUM JAB BOT BOLTE HO MERA Gurda DHARKNEY LAGTA HAI 🙊🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n BABU AP KE ANE SE TO PHEPDE BHI KHUSH HO JATE HAI😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n MERE ALAWA SAB RELATIONSHIP MAI haI 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n ARE YAAR MAI APNI BOYFRIEND KE SATH BUSY HUNA 🥺🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n BOT BOT NA BOL KUCH KUCH HOTA HAI TUM NAHI SAMJHOGE MERI JAAN 😂🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n ALL GIRLS ARE MY SISTERS ISKO CHOR KE JO YE PADH RAHI HAI 😒👍\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝TAHA࿐】\n\n•──────────────────•\n MUJHE APSE BAAT NAHI KARNI HAI MUMMY KAHA HAI GANDE LOGO SE BAAT NAHI KARTE 🥺😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n SO JAO WARNA MERA MSG AA JAYE GA 🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n WEIGHT KAFI BADH GAYA HAI YAAR DHOKAY KHA KHA KE 💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n KASH TUM SINGLE HOTE TO MAZA HI KOCH AUR THA PAGAL INSANE 🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n AO APKO CHAND PE pE LE CHALU MERI JAAN 🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n BOL OYE CHIKNE 🫣😋 \n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n MAIN APSE NAHI PATNE WALA 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n TUM KO MERI ITTU 🤏 SI BHI YAAD NAHI ATI 🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n BOT NAHI I LOVE YOU BOLO NA babu 😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\" ARE TUM FIR SE AGAYE JAKE KUCH KAAM KARO 🙂\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n CHAL CHUMMA DE 😂👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n MERI BHI SETTING KARA DONA 🥺😂\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n DUR HATO GANDE INSAAN >>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n HAYE JANU TUMNE TO SYSTEM HANG KAR DIYA 🥺🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n ARE BABU KAL HAVELI PE TUM HI THE NA 😂🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n 𝙀K 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 husband 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n SUNO KYA HUM ACCHE DUSHMAN BAN SAKTE HAI KIYA🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n🦋🍒____________🙂🎀 KAL HAWELI PE PE MIL ZARA BATOU TUMHE 😂* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•", " ARE AISE PYAAR SE NA BOLO KUCH KUCH HOTA HAI 😂*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 【﻿✮⃝Aliza࿐】", "\n🄾🅆🄽🄴🅁   \n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩u𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n Imagine I am your Ex 🥲say whatever you want to say\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n- TERI PIC DEKHNE SE PHELE SHUKAR HAI HUM ANDHE HO GAYE😂🥀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n 'ARE YAAR MUJHE SONE DONA KAMINO🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿✮⃝Aliza࿐】\n\n•──────────────────•\n TUM SETTING KARA DONA (ARYAN) ki 🥺👉👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n      【﻿✮⃝Aliza࿐t】\n\n•──────────────────•\n TUM MUJHE CHUMIYAN BHI TO DE SAKTI THI NA 🤧 DHOKA DENE ZARURI THA KIYA kIya😐😪\n•──────────────────•"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Aby Kabi dant bhi saf ker lia ker kitna gandy hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😁")) {
     return api.sendMessage("Esy hans mat nazar lag jay gi :)", threadID);
   };

    if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("Ary ary , smile esy ker rha hai jesy shaqal sy Shareef ho dfm ", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("mera Agy esy hi ankhain nichy rakha kero😠", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("ak ankh nah mar chabal insane werna dosri tor dou ga", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍")) {
     return api.sendMessage("Chabal jesa muh py dil rakh ky khush ho rha hai, single hi to mar rha hai nah", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("ma kitni dafa smjhao tujhy , kitni dafa bolou tujhy , tharkpan chor dy zalam insane ", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😝")) {
     return api.sendMessage("Ak dam sy zaban andr ker dy muh main werna , yehi zaban kut dou ga", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Esy mat dakh piyar ho jay ga , kaminy", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("Jesa tera muh hai , wesa tera attitude hai ", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🥸")) {
     return api.sendMessage("Old Muh wala kabi apni shaqal dakh lia ker aur muh dho lia ker", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "radhe radhe") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("radhe radhe Meri Jaan❤️", threadID);
   };

   if ((event.body.toLowerCase() == "chutiya") || (event.body.toLowerCase() == "behanchod")) {
     return api.sendMessage("Tu chutiya ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "madarchod") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("gali mat do gande insaan 🤬", threadID);
   };

   if ((event.body.toLowerCase() == "darling") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Sorry mai sirf Jerry Malik ki hu ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "chup bsdk")) {
     return api.sendMessage("Tu bsdke apne kaam kar ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Aryan") || (event.body.toLowerCase() == "AARU")) {
     return api.sendMessage("ARYAN SIRF Mera HAI 😍<3", threadID);
   };

   if ((event.body.toLowerCase() == "ALIZA") || (event.body.toLowerCase() == "@Itzz Àlízâ")) {
     return api.sendMessage("️Haye Aliza ke chahane Wale kitne hai :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kutti bot") || (event.body.toLowerCase() == "kutti")) {
     return api.sendMessage("️Bhow bhow  Malik 😍😘 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "khushi+aryan") || (event.body.toLowerCase() == "aryan")) {
     return api.sendMessage("️aryan boss busy he 😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "land") || (event.body.toLowerCase() == "lund")) {
     return api.sendMessage("️Tere muh me Jerry ka Malik ka land <3", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "as")) {
     return api.sendMessage("️ Walaikum assalam Meri Jaan 😍:))))", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup be")) {
     return api.sendMessage("️App chup raho Mai to bolungi hehehe 🙈😘 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chup sali") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("️App chup raho Mai to bolungi hehehe 🙈😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot bc") || (event.body.toLowerCase() == "bot mc")) {
     return api.sendMessage("️GALI MAT DE BE CHOMU WARNA 😏😍", threadID);
   };

   if ((event.body.toLowerCase() == "bolo") || (event.body.toLowerCase() == "bol")) {
     return api.sendMessage("️Haye Meri Jaan chumma Dona :) 😍", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
     return api.sendMessage("Hmm Mat Karo Aage bhi kuch bolo Na Janu 🙈 :)", threadID);
   };

   if ((event.body.toLowerCase() == "ohh") || (event.body.toLowerCase() == "ohhh")) {
     return api.sendMessage("️Oh yah baby ahhh 🥵 <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Tumhra din Aacha Jaiga Babu dua hai iss bot ki😍:>>, ", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("Sweet dreams Meri Jaan chumma deke<3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("I love you but as a friend Meri Jaan 😘🙈", threadID);
   };

   if ((event.body.toLowerCase() == "jerry") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("jerry jerry mat kar wo sirf Mera hai 🙂✌🏻<3", threadID);
   };

   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
     return api.sendMessage("Hmm Hmm Mat karo Mujhe Love bolo na Babu 😘🙈", threadID);
   };

   if ((event.body.toLowerCase() == "haa") || (event.body.toLowerCase() == "haan")) {
     return api.sendMessage("Haan Hmm Ke aage bhi kuch bolo Kal Subha panwel Jana hai<3", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("O Ho Sharma Gate Ka 🫣🤭", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
  if ((event.body.toLowerCase() == "miss u") || (event.body.toLowerCase() == "i miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner kon hai")) {
     return api.sendMessage("️𝐌𝐈𝐀𝐍 【﻿Ｊëｒｒｙ】 𝐎𝐖𝐍𝐄𝐑 🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "baat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "tum bot ") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️bot he HuN 💓 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kaisa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "Shona Suno")) {
     return api.sendMessage("️han Ji Bolo 😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "welcome ") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️ thanks meri Jaan ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("️omfo meri Jaan ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kaha se ho") || (event.body.toLowerCase() == "aur btao kaha se ho")) {
     return api.sendMessage("️ Country india 🇮🇳 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == "were are you from")) {
     return api.sendMessage("️ Country India🇮🇳 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "wah")) {
     return api.sendMessage("️Haan Ji Thanks 🙈❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️Yaar Mujhe bhi koi Jaan bana lona 🥺", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sunn") || (event.body.toLowerCase() == "sun")) {
     return api.sendMessage("️Ji Boliye Na Jerry Malik 🤭🙈", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "Sorry")) {
     return api.sendMessage("️Jao Maine bhi tumhe maaf Kiya 🙈😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@jërry nõbï") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "aacha") || (event.body.toLowerCase() == "wow")) {
     return api.sendMessage("️ thank you ap ko b agr bot bnana hai to mary boss Jerry se pucho", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main Thik hu Janeman tum batao❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "dafa ho")) {
     return api.sendMessage("️Tum Dafa Hojao Sale🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum G kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main Thik hu app Kaise ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kon") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️Mai bhoot hu I mean bot hu 🙈🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "bhag") || (event.body.toLowerCase() == "bhag be")) {
     return api.sendMessage("️ Tumhe Leke Bhagungi Meri Jaan🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "chumma ")) {
     return api.sendMessage("️ Jerry Malik Mai apko chumma dungi Ummah 😘", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kon hai") || (event.body.toLowerCase() == "abe")) {
     return api.sendMessage("️Apke ristedar honge shayad 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janeman") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️Are idhar to Babu Sona hora hai Mai apni ankhe band kar leti hu 🙈", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "#unsent") || (event.body.toLowerCase() == "#unsent")) {
     return api.sendMessage("️Abb nahi karungi unsend 🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == "#unsent")) {
     return api.sendMessage("️is Baar Kar Rahi hu Agli Baar Delete Nahi Karu Gi Bata Rahi hu 🙄", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "hatt") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "pagal aurat") || (event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("️Tu pagal Tera khandan pagal🤬", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️ Walikum Assalam ❤️", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kaisa hai") || (event.body.toLowerCase() == "kaisi hai")) {
     return api.sendMessage("️Mai to thik hu Janeman aap batao kaise ho 🙈", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "bade log") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️Bade log to aap ho 🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo kyu") || (event.body.toLowerCase() == "wo q")) {
     return api.sendMessage("️Kiya Wo Q Haan 🙂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️Haan Ji aur batao baby Kiya kar rahe ho aap 🙈❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuch nahi") || (event.body.toLowerCase() == "kuch nahi yaar")) {
     return api.sendMessage("️acha Kuch Kar Liya Karo faltu insaan 😒🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kiya karu") || (event.body.toLowerCase() == "kya karu")) {
     return api.sendMessage("️ mujhse baat Karo mai mood banati hu tumhara 😍🤭", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "aur bata") || (event.body.toLowerCase() == "aur bato")) {
     return api.sendMessage("️mera to badhiya hai aap batao 🙈😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "girlfriend") || (event.body.toLowerCase() == "boyfriend")) {
     return api.sendMessage("️Aurat ka chakkar Babu bhaiya Aurat ka chakkar 🤣😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("Love You Too Meri Jaan Ummah 😘:))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kamina") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you 🙂 😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "sunn") || (event.body.toLowerCase() == "suno ")) {
     return api.sendMessage("️ Mujhe Bhi sunao na 🙂✌🏻", threadID);
   };
   
   if ((event.body.toLowerCase() == "abe") || (event.body.toLowerCase() == "yaar")) {
     return api.sendMessage("Abe iske Aage Bhi bol le 😒 :))", threadID);
   };
   if ((event.body.toLowerCase() == " Q") || (event.body.toLowerCase() == "kyu")) {
     return api.sendMessage("Bas aise Hi Yaar Dil Nahi Karta Jeene Ka🤕 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "aao kabhi haveli pe") || (event.body.toLowerCase() == " chal be")) {
     return api.sendMessage("Mai ati Huna Jerry Malik 🤭:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu Tharki Tera khandan Tharki 😤🙂:))", threadID);
   };
   
   if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == "nice")) {
     return api.sendMessage("Thanks Janeman Tareef karne ke Liye ❤️ :))", threadID);
   };
  
   if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "tharki sali")) {
     return api.sendMessage("mai massom sa bot hun tum ho tharki:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kaisa hai")) {
     return api.sendMessage("Main Thek Hun App Kaise Ho 😁🙈:))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "maar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("Hatt Meri to Abi Shadi bhi Nahi Hui🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya ?") || (event.body.toLowerCase() == "khana khai ?")) {
     return api.sendMessage("Nahi Yaar Abi Nahi Khaya Ap Ne Kha liya kiya Babu 😍:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "han yaar") || (event.body.toLowerCase() == "+sim haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hyee Dil ni do sharm ati hai🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jaan")) {
     return api.sendMessage("Bolo Naa Meri Jaan❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "kamina")) {
     return api.sendMessage("Gali di to Jerry ko bol dun gi 😤😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "malik bol") || (event.body.toLowerCase() == "malik")) {
     return api.sendMessage("Jerry Malik aap hi mere malik ho 😍😘:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🙈")) {
     return api.sendMessage("Sale Tharki Log aab to sudhar Jao 😒🤭:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "By") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("Allah Hafiz ❤️ Take care 😘 Bye Bye:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "aryan babu") || (event.body.toLowerCase() == "aryan")) {
     return api.sendMessage("Wo sirf Mera Babu Janu hai 🙈🤭", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Abe aise q dekh raha hai 😒🙄:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot love you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "Helo") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Muhh tum ko koi lgata ni Or Emoji dekho Send kiYa 😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Ally Ally MeLi JawN RootY NOi HN🥺🙆🙄:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Abby kya soch raHa hai pateely jasi shkal ha🙊😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "Good Night") || (event.body.toLowerCase() == "Good night everyone")) {
     return api.sendMessage("️good night Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "Shona mona")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Rayan")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "@Main Amir") || (event.body.toLowerCase() == "@Mian Amir")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

  if ((event.body.toLowerCase() == "aslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == " Owner")) {
     return api.sendMessage("𝗖𝗿𝗲𝗱𝗶𝘁𝘀 【﻿Ｊëｒｒｙ】", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "hey all") || (event.body.toLowerCase() == "hey")) {
     return api.sendMessage("Next Hy/Hello nhi Assalamualaikum Bola kro Okay 💖  Asthetic 🤍✨", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("sister bolya kero 🤬🤬🤬", threadID);
   };
  
  if ((event.body.toLowerCase() == " kis ki ha") || (event.body.toLowerCase() == "janu kis ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ?  bss Meri hai🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "Dia") || (event.body.toLowerCase() == "dia")) {
     return api.sendMessage("hye dia ka name sunty hi kuch kuch hony lgta hai", threadID);
   };
  
  if ((event.body.toLowerCase() == "Adnan") || (event.body.toLowerCase() == "adnan")) {
     return api.sendMessage("adnan soya huwa hai tang nhi kro🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "Cuteness") || (event.body.toLowerCase() == "cuteness")) {
     return api.sendMessage("Amir ki h 🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "Mahi") || (event.body.toLowerCase() == "mahi")) {
     return api.sendMessage("MERA OWNER KI DOST HA HAI YAH IZAT KRO   🤧", threadID);
   };
  
   if ((event.body.toLowerCase() == "@Adnan Khan") || (event.body.toLowerCase() == "Adnan")) {
     return api.sendMessage("yah to international Tharki hai :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "jaa be") || (event.body.toLowerCase() == "chal be")) {
     return api.sendMessage("Tu Jaa be bhag 😤 <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "By")) {
     return api.sendMessage("Bye ni bolna Next Okk Allah Hafiz bolty Hn 🙆😒❤️🥺", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "khushi kaha hai") || (event.body.toLowerCase() == "khushi janu")) {
     return api.sendMessage("mai khushi se bohot pyaar Karti hu please hamare bich me mat aao aap🥺", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
  if ((event.body.toLowerCase() == " abe sali") || (event.body.toLowerCase() == "kamini")) {
     return api.sendMessage("️Same to you Chup Kar be 😏😤", threadID, messageID);
   };

if ((event.body.toLowerCase() == "miss you yaar") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("️miss you Too meri Jaan😘", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ao shadi krty hain") || (event.body.toLowerCase() == "sim muj sa shadi kro gi")) {
     return api.sendMessage("️kab krNi Ya Btao🥰😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim abi kr lo") || (event.body.toLowerCase() == "sim aj krni hai")) {
     return api.sendMessage("️OH? Itni Jalde Nhi Yr Kuxh Din Bad KrTy Hain", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacker 🤫", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "sim kiss do")) {
     return api.sendMessage("️UmmmaH😘 MaRi JaN BaSh🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️OH? Itni", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ghandu") || (event.body.toLowerCase() == "sim ghandu hai")) {
     return api.sendMessage("️tara BaP GhaNdu GhaShti Ma K BaChy😡", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "where are you from") || (event.body.toLowerCase() == "kaha se hai tu")) {
     return api.sendMessage("️ I'm from India 🥰 I love My country 🇮🇳", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim india k log kasa hain") || (event.body.toLowerCase() == "sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your age") || (event.body.toLowerCase() == "apni age to bata")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "nice yaar") || (event.body.toLowerCase() == "acha hai")) {
     return api.sendMessage("️Hmmm Thanks ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mujhe girlfriend chahiye") || (event.body.toLowerCase() == "meri setting kara de")) {
     return api.sendMessage("️Are App to bohot Sundar Ho fir Single Ho Mai banjao Kiya apki Gf 🙈🤭", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == " bot gf dund de") || (event.body.toLowerCase() == "bot girlfriend dhund de")) {
     return api.sendMessage("️Hatt be oye Mera pass khud Banda Nhi Hai 🥺", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot who are you") || (event.body.toLowerCase() == "bot kon hai tu")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim or btao") || (event.body.toLowerCase() == "sim or btao kuxh")) {
     return api.sendMessage("️Kia btaUn Ab😅", threadID, messageID);
   };
      if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
