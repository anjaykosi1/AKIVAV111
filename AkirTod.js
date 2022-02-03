/*
THANKS TO
ALLAH SWT
KEDUA ORANG TUA
KIRBOTZ
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Base Ori HENTONGERS-BOT
*/
var 
      {
            WAConnection,
            MessageType,
            Presence,
            MessageOptions,
            Mimetype,
            WALocationMessage,
            WA_MESSAGE_STUB_TYPES,
            WA_DEFAULT_EPHEMERAL,
            ReconnectMode,
            ProxyAgent,
            GroupSettingChange,
            waChatKey,
            mentionedJid,
            processTime,
      } = 
require('@adiwajshing/baileys')
var hx = require('hxz-api')
var moment = require('moment-timezone')
var speed = require('performance-now')
var { spawn, exec, execSync } = require('child_process')
var ffmpeg = require('fluent-ffmpeg')
var twitterGetUrl = require('twitter-url-direct')
var googleImage = require('g-i-s')
var brainly = require('brainly-scraper')
var fetch = require('node-fetch')
var ggs = require('google-it')
var request = require('request')
var crypto = require('crypto')
var yts = require( 'yt-search')
var ms = require('parse-ms')
var toMs = require('ms')
var axios = require('axios')
var fs = require('fs-extra')
var FormData = require('form-data')
var util = require('util')
var got = require('got')
var qrcodes = require('qrcode')
var imgbb = require('imgbb-uploader')
var os = require('os')
var fromBuffer = require('file-type')
var chalk = require('chalk')
var { color, bgcolor } = require('./lib/color')
var { getBuffer, getGroupAdmins } = require('./lib/functions')
var { fetchJson, fetchText } = require('./lib/fetcher')
var { y2mateA, y2mateV } = require('./lib/y2mate.js')
var { ythd } = require('./lib/ythde')
var { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')

//
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━\\
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
tamnel = fs.readFileSync('./image/kirtod.jpeg')
banChats = true
ownerName = '❤️ Wily Kun ❤️'
ownerNumber = ["6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net","6289667923162@s.whatsapp.net"]
fkeOwner = '6289667923162'
botName = "©Hentongers-Bot"
pulsa = '6289667923162'
gopay = '6289667923162'
ovo = '6289667923162'
harga1bulan = 'HARGA : 1 BULAN 15K'
harga2bulan = 'HARGA : 2 BULAN 20K'
harga6bulan = 'HARGA : 6 BULAN 30K'
hargaperpanjang = 'PERPANJANG 15K / 1 BULAN'
///////// soundanime

akirasound = fs.readFileSync('./vnanime/soundmu.mp3')
niionichan = fs.readFileSync('./vnanime/niionichan.mp3')
salamkenal = fs.readFileSync('./vnanime/salamkenal.mp3')
oniidaisuki = fs.readFileSync('./vnanime/oniidaisuki.mp3')
ara1 = fs.readFileSync('./vnanime/ara1.mp3')
hem = fs.readFileSync('./vnanime/hem.mp3')
dasarkaka = fs.readFileSync('./vnanime/dasarkaka.mp3')

////////
audio1 = fs.readFileSync('./media/audio3/nyz1.m4a')
audio2 = fs.readFileSync('./media/audio3/nyz2.m4a')
audio3 = fs.readFileSync('./media/audio3/nyz3.m4a')
audio4 = fs.readFileSync('./media/audio3/nyz4.m4a')
audio5 = fs.readFileSync('./media/audio3/nyz5.m4a')
audio6 = fs.readFileSync('./media/audio3/nyz6.m4a')
audio7 = fs.readFileSync('./media/audio3/nyz7.m4a')
audio8 = fs.readFileSync('./media/audio3/nyz8.m4a')
audio9 = fs.readFileSync('./media/audio3/nyz9.m4a')
audio10 = fs.readFileSync('./media/audio3/nyz10.m4a')
audio11 = fs.readFileSync('./media/audio3/nyz11.m4a')
audio12 = fs.readFileSync('./media/audio3/nyz12.m4a')
audio13 = fs.readFileSync('./media/audio3/nyz13.m4a')
audio14 = fs.readFileSync('./media/audio3/nyz14.m4a')
audio15 = fs.readFileSync('./media/audio3/nyz15.m4a')
audio16 = fs.readFileSync('./media/audio3/nyz16.m4a')
audio17 = fs.readFileSync('./media/audio3/nyz17.m4a')
audio18 = fs.readFileSync('./media/audio3/nyz18.m4a')
audio19 = fs.readFileSync('./media/audio3/nyz19.m4a')
audio20 = fs.readFileSync('./media/audio3/nyz20.m4a')
audio22 = fs.readFileSync('./media/audio3/nyz22.m4a')
audio23 = fs.readFileSync('./media/audio3/nyz23.m4a')
audio24 = fs.readFileSync('./media/audio3/nyz24.m4a')
audio25 = fs.readFileSync('./media/audio3/nyz25.m4a')
audio26 = fs.readFileSync('./media/audio3/nyz26.m4a')
audio27 = fs.readFileSync('./media/audio3/nyz27.m4a')
audio28 = fs.readFileSync('./media/audio3/nyz28.m4a')
audio29 = fs.readFileSync('./media/audio3/nyz29.m4a')
audio30 = fs.readFileSync('./media/audio3/nyz30.m4a')
audio31 = fs.readFileSync('./media/audio3/nyz31.m4a')
audio32 = fs.readFileSync('./media/audio3/nyz32.m4a')
audio33 = fs.readFileSync('./media/audio3/nyz33.m4a')
audio34 = fs.readFileSync('./media/audio3/nyz34.m4a')
audio35 = fs.readFileSync('./media/audio3/nyz35.m4a')
sound1 = fs.readFileSync('./media/sound2/sound1.mp3')
sound2 = fs.readFileSync('./media/sound2/sound2.mp3')
sound3 = fs.readFileSync('./media/sound2/sound3.mp3')
sound4 = fs.readFileSync('./media/sound2/sound4.mp3')
sound5 = fs.readFileSync('./media/sound2/sound5.mp3')
sound6 = fs.readFileSync('./media/sound2/sound6.mp3')
sound7 = fs.readFileSync('./media/sound2/sound7.mp3')
sound8 = fs.readFileSync('./media/sound2/sound8.mp3')
sound9 = fs.readFileSync('./media/sound2/sound9.mp3')
sound10 = fs.readFileSync('./media/sound2/sound10.mp3')
sound11 = fs.readFileSync('./media/sound2/sound11.mp3')
sound12 = fs.readFileSync('./media/sound2/sound12.mp3')
sound13 = fs.readFileSync('./media/sound2/sound13.mp3')
sound14 = fs.readFileSync('./media/sound2/sound14.mp3')
sound15 = fs.readFileSync('./media/sound2/sound15.mp3')
sound16 = fs.readFileSync('./media/sound2/sound16.mp3')
sound17 = fs.readFileSync('./media/sound2/sound17.mp3')
sound18 = fs.readFileSync('./media/sound2/sound18.mp3')
sound19 = fs.readFileSync('./media/sound2/sound19.mp3')
sound20 = fs.readFileSync('./media/sound2/sound20.mp3')
sound22 = fs.readFileSync('./media/sound2/sound22.mp3')
sound23 = fs.readFileSync('./media/sound2/sound23.mp3')
sound24 = fs.readFileSync('./media/sound2/sound24.mp3')
sound25 = fs.readFileSync('./media/sound2/sound25.mp3')
sound26 = fs.readFileSync('./media/sound2/sound1.mp3')
sound27 = fs.readFileSync('./media/sound2/sound2.mp3')
sound28 = fs.readFileSync('./media/sound2/sound3.mp3')
sound29 = fs.readFileSync('./media/sound2/sound4.mp3')
sound30 = fs.readFileSync('./media/sound2/sound5.mp3')
sound31 = fs.readFileSync('./media/sound2/sound6.mp3')
sound32 = fs.readFileSync('./media/sound2/sound7.mp3')
sound33 = fs.readFileSync('./media/sound2/sound8.mp3')
sound34 = fs.readFileSync('./media/sound2/sound9.mp3')
sound35 = fs.readFileSync('./media/sound2/sound10.mp3')
sound36 = fs.readFileSync('./media/sound2/sound11.mp3')
//━━━━━━━━━━━━━━━//━━━━━━━━━━━━━━━//━━━━━━\\
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '🌌 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '🌆 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠 🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '🌇 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '🏞 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '🌅 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '🏙 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🏙'
}
var getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
    module.exports = KirBotz = async (KirBotz, kir) => {
	try {
if (!kir.hasNewMessage) return
kir = kir.messages.all()[0]
if (!kir.message) return
if (kir.key && kir.key.remoteJid == 'status@broadcast') return
global.blocked
kir.message = (Object.keys(kir.message)[0] === 'ephemeralMessage') ? kir.message.ephemeralMessage.message : kir.message
var content = JSON.stringify(kir.message)
var from = kir.key.remoteJid
var { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
var wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
var wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
var wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var type = Object.keys(kir.message)[0]
var cmd = (type === 'conversation' && kir.message.conversation) ? kir.message.conversation : (type == 'imageMessage') && kir.message.imageMessage.caption ? kir.message.imageMessage.caption : (type == 'videoMessage') && kir.message.videoMessage.caption ? kir.message.videoMessage.caption : (type == 'extendedTextMessage') && kir.message.extendedTextMessage.text ? kir.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'  	
body = (type === 'conversation' && kir.message.conversation.startsWith(prefix)) ? kir.message.conversation : (type == 'imageMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'videoMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'extendedTextMessage') && kir.message[type].text.startsWith(prefix) ? kir.message[type].text : (type == 'listResponseMessage') && kir.message[type].singleSelectReply.selectedRowId ? kir.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kir.message[type].selectedButtonId ? kir.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kir.message[type].fileSha256.toString('base64')) !== null && getCmd(kir.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kir.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? kir.message.conversation : (type === 'extendedTextMessage') ? kir.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''
button = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedDisplayText : ''
isImage = (type === 'imageMessage')
var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
var arg = body.substring(body.indexOf(' ') + 1)
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var q = args.join(' ')
var Verived = "0@s.whatsapp.net"
var txt = kir.message.conversation
var botNumber = KirBotz.user.jid
var botNumberss = KirBotz.user.jid + '@c.us'
var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
var isGroup = from.endsWith('@g.us')
let sender = isGroup ? kir.participant : kir.key.remoteJid
var totalchat = await KirBotz.chats.all()
var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isGroupAdmins = groupAdmins.includes(sender) || false
var conts = kir.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = kir.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
var isOwner = ownerNumber.includes(sender)
var isWelkom = isGroup ? welkom.includes(from) : false
var isAntiLink = isGroup ? antilink.includes(from) : false
var filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
var nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`

//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//
selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''

responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''

mess = {
			wait: '```[ ⏳ ] SABAR KAK SEDANG DI PROSES 😆...```',
			success: '```[ ☑️ ]``` BERHASIL KAK 🤣',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
	
	var isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
    
    var listmsg = (from, title, desc, list) => { 
            let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "👤 SELECT 👤","footerText": "_*©HentongersBot*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return KirBotz.relayWAMessage(po, {waitForAck: true})
        }

    var reply = (teks) => {
            KirBotz.sendMessage(from, teks, text, {quoted:fakevo})
        }
     
    var replly = (teks) => {
			KirBotz.sendMessage(from, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fakeTroli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `❤️ HENTONGERS-BOT ❤️`,body:"Klik Ini Untuk Masuk Ke Group Bot",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://chat.whatsapp.com/J2NDUUUgVniBtzNGCGHqAN`}}})
		}
		
	var katalog = (teks) => {
             res = KirBotz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©HentongersBot", "jpegThumbnail": fs.readFileSync('./image/kirtod.jpeg'), "surface": 'CATALOG' }}, {quoted:kir})
             KirBotz.relayWAMessage(res)
        }
        
    var replywa = (teks) => {
KirBotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hentongers-Bot`,
"body": `𝑩𝒚 Hentongers`,
"mediaType": "10",
"mediaUrl": `https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw`,
"thumbnailUrl": "https://k.top4top.io/p_20779elwn0.jpg",
"thumbnail": tamnel,
"sourceUrl": `https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw`,
},mentionedJid:[sender]}, quoted : fakeTroli})
};

    var sendMess = (hehe, teks) => {
            KirBotz.sendMessage(hehe, teks, text)
        }

    var mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: kir, contextInfo: { "mentionedJid": memberr } })
        }            
        
    var getRandom = (ext) => {
	         return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        
    var costum = (pesan, tipe, target, target2) => {
			KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
     
    var runtime = function(seconds) {
               seconds = Number(seconds);
                var d = Math.floor(seconds / (3600 * 24));
                 var h = Math.floor(seconds % (3600 * 24) / 3600);
                  var m = Math.floor(seconds % 3600 / 60);
                   var s = Math.floor(seconds % 60);
                    var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
                     var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
                      var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
                       var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
                  return dDisplay + hDisplay + mDisplay + sDisplay;
                  }
     function monospace(string) {
            return '```' + string + '```'
        }   
                  
var getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
var addRegisteredUser = (userid, sender, age, time, serials) => {
var obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
var checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

var isRegistered = checkRegisteredUser(sender)
var sendButRegis = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
KirBotz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

var daftar1 = `Hai kak *${pushname}*
${ucapanWaktu}
Sebelum Mengakses 🤖 Bot 🤖
😎 DAFTAR Terlebih Dahulu Ya
Sebelum DAFTAR 😎 🤖 Bot 🤖 Minta
Bantu Subrek Channel ❤️ Owner ❤️
*https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw*`
var daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
var daftar3 = [{buttonId: `.verify`,buttonText: {displayText: `😸 DAFTAR DULU KAK 😸`,},type: 1,}]

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

var sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await KirBotz.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kir, contextInfo: {"mentionedJid": men ? men : []}})
}
var sendVn = (teks) => {KirBotz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:fakeTroli,contextInfo: {forwardingScore: 508, isForwarded: true}})}

//========================================================================================================================//
var add = function(from, orangnya){
	       KirBotz.groupAdd(from, orangnya)
}
var fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: '❤️ HENTONGERS-BOT ❤️',
      jpegThumbnail: fs.readFileSync('./image/kirtod.jpeg'),
      viewOnce: true
    }
  }
}
let fakeLink = {
             "title": `Hai Kak ${pushname}`,
             "body": `🤖 Hentongers-Bot 🤖`,
             "previewType": "VIDIO",
             "thumbnail": fs.readFileSync('./image/kirtod.jpeg'),
             "mediaUrl": "https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw"
        }        
var sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					KirBotz.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
var sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        KirBotz.sendMessage(to, media, MessageType.sticker,{quoted:kir})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
var uploadImages = (buffData, type) => {      
      return new Promise(async (resolve, reject) => {        
      var { ext } = await fromBuffer(buffData)       
      var cmd = text.toLowerCase()      
      var filePath = 'utils/tmp.' + ext       
      var _buffData = type ? await resizeImage(buffData, false) : buffData        
      fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
      if (err) return reject(err)
      console.log('Uploading image to telegra.ph server...')			
      var fileData = fs.readFileSync(filePath)			
      var form = new FormData()			
      form.append('file', fileData, 'tmp.' + ext)          
      fetch('https://telegra.ph/upload', {			   
      method: 'POST',           	
      body: form			
      })           	
      .then(res => res.json())           	
      .then(res => {			
      if (res.error) return reject(res.error)			
      resolve('https://telegra.ph' + res[0].src)           	
      })           	
      .then(() => fs.unlinkSync(filePath))			   
      .catch(err => reject(err))			   
      })			 
      })			
      }
function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
      var json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      var littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      var bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      var buf2 = Buffer.from(last, "hex")
      var buf3 = Buffer.from(bytes)
      var buf4 = Buffer.from(JSON.stringify(json))
      var buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
var sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                }
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
KirBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
var sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
var sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
var sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
var sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
var sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
var sticToxic = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fakeTroli})
		}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		var isMedia = (type === 'imageMessage' || type === 'videoMessage')
		var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
                         if (isCmd && isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)(groupMetadata.subject), chalk.bold('[' + args.length + ']')); }
                         if (isCmd && !isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
      	
let mengt =`${runtime(process.uptime())}\n${totalchat.length} Chat`  
var jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
var fakeTroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 272789176292938372, status: 200, surface: 200, message: mengt, orderTitle: mengt, thumbnail: fs.readFileSync('./image/kirtod.jpeg'), sellerJid: '0@s.whatsapp.net'}}}   
var isBtMsg = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
var isStMsg = (type == 'listResponseMessage') ? kir.message.listResponseMessage.singleSelectReply.selectedRowId : ''
if (!kir.key.fromMe && banChats === true) return

if (isGroup && !kir.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}

switch(is) {
case 'bot':
reply('iya ada apa Kak? ☺️')
break
case 'p':
case 'pe':
case 'bang':
case 'bng':
case 'bg':
case 'kir':
case 'akira':
reply(`Gak Sopan Lu Salam Dulu Kek`)
break
case 'assalamualaikum':
reply(`Waalaikumsalam Kak ☺️ Ada Yang Bisa 🤖 Bot 🤖 Bantu`)
break
case 'kontol': 
case 'bacot':
case 'anjing': 
case 'anj':
case 'babi': 
case 'cot':
case 'ngentod': 
case 'bct':
case 'ajg': 
case 'kntl':
case 'asw': 
case 'jancok':
case 'taek': 
case 'pantek':
case 'asu': 
case 'anjg':
case 'memek': 
case 'ajc':
case 'anjng':
case 'ajng':
case 'puqi':
case 'kimak':
case 'puqimak':
case 'kanjut':
case 'knjt':
case 'knjut':
case 'kanjt':
case 'kntl':
case 'kntol':
case 'kontl':
case 'memek':
case 'mmek':
case 'memk':
case 'mmk':
case 'momok':
case 'mmok':
case 'momk':
case 'memeg':
case 'mmeg':
case 'memg':
case 'mmg':
case 'xontol':
case 'xntol':
case 'xontl':
case 'xntl':
case 'xianjing':
case 'anjay':
case 'anjy':
case 'celek':
case 'clek':
case 'celk':
case 'clk':
sticToxic(from)
break
}

// Auto Ketik
KirBotz.updatePresence(from, Presence.composing)
// Auto Read
KirBotz.chatRead(from, "read")
switch (command) {
case 'rules':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

😎 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 🤖
_*https://wa.me/6289667923162*_`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 🔰 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 🔰 "──────*
 👤 OWNER 👤 : ⤵️⤵️⤵️
 *https://wa.me/6289667923162*
 💌 EMAIL 💌 : ⤵️⤵️⤵️
 *kontolodon@gmail.com*
 🔎 YT 🔎 : ⤵️⤵️⤵️
 *https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw*
 🪀 GROUP 🪀 : ⤵️⤵️⤵️
 *https://chat.whatsapp.com/JagDgvTQoVRClho3xsPwZb*
Nama Bot : *${botName}*
Runtime : *${runtime(process.uptime())}*
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '🤖 MENU-BOT 🤖' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: '🤖 SEWA-BOT 🤖' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '☺️ Mau Donasi? ☺️' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
sendVn(dasarkaka)
break
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
KirBotz.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 🔰 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 🔰 "──────*
 👤 OWNER 👤 : ⤵️⤵️⤵️
 *https://wa.me/6289667923162*
 💌 EMAIL 💌 : ⤵️⤵️⤵️
  *kontolodon@gmail.com*
 🔎 YT 🔎 : ⤵️⤵️⤵️
 *https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw*
 🪀 GROUP 🪀 : ⤵️⤵️⤵️
 *https://chat.whatsapp.com/JagDgvTQoVRClho3xsPwZb*
`,"footerText": `
*ꪶ ཻུ۪۪ꦽꦼ̷⸙HENTONGERS-BOT ཻུ۪۪ꦽꦼ̷⸙ || ${time}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🤖 MENU-BOT 🤖'}, type: 1}
,
{buttonId: `.owner`, buttonText: {displayText: '💓 OWNER-BOT 💓'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "title": "©HentongersBot.xlsx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "🤖 HENTONGERS-BOT 🤖",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./image/kirtod.jpeg')
}}, MessageType.buttonsMessage,{ quoted: fakeTroli,thumbnail: fs.readFileSync('./image/kirtod.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./image/kirtod.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
sendVn(akirasound)
break
////
case 'linkgc':
replly (' https://chat.whatsapp.com/J2NDUUUgVniBtzNGCGHqAN ')
sendVn(oniidaisuki)
break
////
case 'script':
case 'sc':
replly(`AYO MAU NGAPAIN KAMU KE FITUR INI KWOKWOKWOK :V SUBS LAH CHANNEL YT GUE DI BAWAH :V
https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw
`)
sendVn(hem)
break
case 'allmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
 wibu = `
 ${ucapanWaktu} 𝐊𝐚𝐤 *${pushname}*
  🔰KLIK ITU BACA SELENGKAPNYA🔰
         🔰 SEMUA FITUR 🔰
       ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
      🤖🤖🤖 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 🤖🤖🤖
✗⃝🔖 ${prefix}owner
✗⃝🔖 ${prefix}statusminecraft
✗⃝🔖 ${prefix}mode *button*
✗⃝🔖 ${prefix}group *button*
✗⃝🔖 ${prefix}welcome *button*
✗⃝🔖 ${prefix}antilink *button*
✗⃝🔖 ${prefix}add *6218317882889*
✗⃝🔖 ${prefix}kick *@tag*
✗⃝🔖 ${prefix}linkgc
✗⃝🔖 ${prefix}runtime
✗⃝🔖 ${prefix}sticker *reply foto*
✗⃝🔖 ${prefix}toimg *reply sticker*
✗⃝🔖 ${prefix}rules
✗⃝🔖 ${prefix}ttp *teks*
✗⃝🔖 ${prefix}tourl *reply foto*
✗⃝🔖 ${prefix}ssweb *link*
      🛡️🛡️🛡 DOWNLOAD ️🛡️🛡️🛡️
✗⃝🔖 ${prefix}play *query*
✗⃝🔖 ${prefix}ytmp3 *linkvideoyt*
✗⃝🔖 ${prefix}ytmp4 *linkvideoyt*
✗⃝🔖 ${prefix}tiktokmp3 *linkvideott*
✗⃝🔖 ${prefix}tiktokmp4 *linkvideott*
      🛡️🛡️🛡 HALAL BROTHER :V ️🛡️🛡️🛡️🛡️
✗⃝🔖 ${prefix}elaina
✗⃝🔖 ${prefix}megumin
✗⃝🔖 ${prefix}blush
✗⃝🔖 ${prefix}elf
✗⃝🔖 ${prefix}shinobu
✗⃝🔖 ${prefix}patrick
✗⃝🔖 ${prefix}shota
✗⃝🔖 ${prefix}husbu
✗⃝🔖 ${prefix}kanna
✗⃝🔖 ${prefix}art
✗⃝🔖 ${prefix}wallnime
✗⃝🔖 ${prefix}bully
✗⃝🔖 ${prefix}cuddle
✗⃝🔖 ${prefix}cry
✗⃝🔖 ${prefix}hug
✗⃝🔖 ${prefix}awoo
✗⃝🔖 ${prefix}lick
✗⃝🔖 ${prefix}pat
      🛡️🛡️🛡️🛡️ NSFW / RANDOM / IMG / SESAT 🛡️🛡️🛡️
✗⃝🔖 ${prefix}neko
✗⃝🔖 ${prefix}loli
✗⃝🔖 ${prefix}milf
✗⃝🔖 ${prefix}hentai
✗⃝🔖 ${prefix}chiisaihentai
✗⃝🔖 ${prefix}trap
✗⃝🔖 ${prefix}blowjob
✗⃝🔖 ${prefix}yaoi
✗⃝🔖 ${prefix}ecchi
✗⃝🔖 ${prefix}sagiri
✗⃝🔖 ${prefix}ahegao
✗⃝🔖 ${prefix}hololewd
✗⃝🔖 ${prefix}sideoppai
✗⃝🔖 ${prefix}animefeets
✗⃝🔖 ${prefix}animebooty
✗⃝🔖 ${prefix}animethighss
✗⃝🔖 ${prefix}hentaiparadise
✗⃝🔖 ${prefix}animearmpits
✗⃝🔖 ${prefix}hentaifemdom
✗⃝🔖 ${prefix}lewdanimegirls
✗⃝🔖 ${prefix}biganimetiddies
✗⃝🔖 ${prefix}animebellybutton
✗⃝🔖 ${prefix}hentai4everyone
✗⃝🔖 ${prefix}bj
✗⃝🔖 ${prefix}ero
✗⃝🔖 ${prefix}cum
✗⃝🔖 ${prefix}feet
✗⃝🔖 ${prefix}yuri
✗⃝🔖 ${prefix}trap
✗⃝🔖 ${prefix}lewd
✗⃝🔖 ${prefix}feed
✗⃝🔖 ${prefix}eron
✗⃝🔖 ${prefix}solo
✗⃝🔖 ${prefix}gasm
✗⃝🔖 ${prefix}poke
✗⃝🔖 ${prefix}anal
✗⃝🔖 ${prefix}keta
✗⃝🔖 ${prefix}holo
✗⃝🔖 ${prefix}tits
✗⃝🔖 ${prefix}kuni
✗⃝🔖 ${prefix}kiss
✗⃝🔖 ${prefix}erok
✗⃝🔖 ${prefix}smug
✗⃝🔖 ${prefix}baka
✗⃝🔖 ${prefix}solog
✗⃝🔖 ${prefix}feetg
✗⃝🔖 ${prefix}lewdk
✗⃝🔖 ${prefix}waifu
✗⃝🔖 ${prefix}pussy
✗⃝🔖 ${prefix}femdom
✗⃝🔖 ${prefix}hentai
✗⃝🔖 ${prefix}eroyuri
✗⃝🔖 ${prefix}cum_jpg
✗⃝🔖 ${prefix}erofeet
✗⃝🔖 ${prefix}holoero
✗⃝🔖 ${prefix}classic
✗⃝🔖 ${prefix}erokemo
✗⃝🔖 ${prefix}fox_girl
✗⃝🔖 ${prefix}futanari
✗⃝🔖 ${prefix}lewdkemo
✗⃝🔖 ${prefix}wallpaper
✗⃝🔖 ${prefix}pussy_jpg
✗⃝🔖 ${prefix}kemonomimi
✗⃝🔖 ${prefix}nsfw_avatar
✗⃝🔖 ${prefix}nsfw_neko_gif
✗⃝🔖 ${prefix}random_hentai_gif

      🛡️🛡️🛡️ MENU KOREA Baru 1 :v 🛡️🛡️🛡️
✗⃝🔖 ${prefix}bts
      🛡️🛡️🛡️MENU RANDOM ORANG🛡️🛡️🛡️
✗⃝🔖 ${prefix}cecan
✗⃝🔖 ${prefix}cogan
✗⃝🔖 ${prefix}estetic
      🛡️🛡️🛡️ MAKER / TEXT / IMG 🛡️🛡️🛡️
✗⃝🔖 ${prefix}blackpink
✗⃝🔖 ${prefix}neon
✗⃝🔖 ${prefix}greenneon
✗⃝🔖 ${prefix}advanceglow
✗⃝🔖 ${prefix}futureneon
✗⃝🔖 ${prefix}sandwriting
✗⃝🔖 ${prefix}sandsummer
✗⃝🔖 ${prefix}sandengraved
✗⃝🔖 ${prefix}metaldark
✗⃝🔖 ${prefix}neonlight
✗⃝🔖 ${prefix}holographic
✗⃝🔖 ${prefix}text1917
✗⃝🔖 ${prefix}minion
✗⃝🔖 ${prefix}deluxesilver
✗⃝🔖 ${prefix}newyearcard
✗⃝🔖 ${prefix}bloodfrosted
✗⃝🔖 ${prefix}halloween
✗⃝🔖 ${prefix}jokerlogo
✗⃝🔖 ${prefix}fireworksparkle
✗⃝🔖 ${prefix}natureleaves
✗⃝🔖 ${prefix}bokeh
✗⃝🔖 ${prefix}toxic
✗⃝🔖 ${prefix}strawberry
✗⃝🔖 ${prefix}box3d
✗⃝🔖 ${prefix}roadwarning
✗⃝🔖 ${prefix}breakwall
✗⃝🔖 ${prefix}icecold
✗⃝🔖 ${prefix}luxury
✗⃝🔖 ${prefix}cloud
✗⃝🔖 ${prefix}summersand
✗⃝🔖 ${prefix}horrorblood
✗⃝🔖 ${prefix}thunder
✗⃝🔖 ${prefix}wetglass
✗⃝🔖 ${prefix}multicolor3d
✗⃝🔖 ${prefix}watercolor
✗⃝🔖 ${prefix}luxurygold
✗⃝🔖 ${prefix}galaxywallpaper
✗⃝🔖 ${prefix}lighttext
✗⃝🔖 ${prefix}beautifulflower
✗⃝🔖 ${prefix}puppycute
✗⃝🔖 ${prefix}royaltext
✗⃝🔖 ${prefix}heartshaped
✗⃝🔖 ${prefix}birthdaycake
✗⃝🔖 ${prefix}galaxystyle
✗⃝🔖 ${prefix}hologram3d
✗⃝🔖 ${prefix}glossychrome
✗⃝🔖 ${prefix}greenbush
✗⃝🔖 ${prefix}metallogo
✗⃝🔖 ${prefix}noeltext
✗⃝🔖 ${prefix}glittergold
✗⃝🔖 ${prefix}textcake
✗⃝🔖 ${prefix}starsnight
✗⃝🔖 ${prefix}wooden3d
✗⃝🔖 ${prefix}textbyname
✗⃝🔖 ${prefix}writegalacy
✗⃝🔖 ${prefix}galaxybat
✗⃝🔖 ${prefix}snow3d
✗⃝🔖 ${prefix}birthdayday
✗⃝🔖 ${prefix}goldplaybutton
✗⃝🔖 ${prefix}silverplaybutton
✗⃝🔖 ${prefix}freefire
✗⃝🔖 ${prefix}tiktok
✗⃝🔖 ${prefix}arcade8bit
✗⃝🔖 ${prefix}battlefield4
✗⃝🔖 ${prefix}pubg
✗⃝🔖 ${prefix}pornhub
✗⃝🔖 ${prefix}glitch
✗⃝🔖 ${prefix}avenger
✗⃝🔖 ${prefix}space
✗⃝🔖 ${prefix}ninjalogo
✗⃝🔖 ${prefix}marvelstudio
✗⃝🔖 ${prefix}lionlogo
✗⃝🔖 ${prefix}wolflogo
✗⃝🔖 ${prefix}steel3d
✗⃝🔖 ${prefix}wallgravity
✗⃝🔖 ${prefix}shadow
✗⃝🔖 ${prefix}cup
✗⃝🔖 ${prefix}cup1
✗⃝🔖 ${prefix}romance
✗⃝🔖 ${prefix}smoke
✗⃝🔖 ${prefix}burnpaper
✗⃝🔖 ${prefix}lovemessage
✗⃝🔖 ${prefix}undergrass
✗⃝🔖 ${prefix}love
✗⃝🔖 ${prefix}coffe
✗⃝🔖 ${prefix}woodheart
✗⃝🔖 ${prefix}woodenboard
✗⃝🔖 ${prefix}summer3d
✗⃝🔖 ${prefix}wolfmetal
✗⃝🔖 ${prefix}nature3d
✗⃝🔖 ${prefix}underwater
✗⃝🔖 ${prefix}golderrose
✗⃝🔖 ${prefix}summernature
✗⃝🔖 ${prefix}letterleaves
✗⃝🔖 ${prefix}glowingneon
✗⃝🔖 ${prefix}fallleaves
✗⃝🔖 ${prefix}flamming
✗⃝🔖 ${prefix}harrypotter
✗⃝🔖 ${prefix}carvedwood
✗⃝🔖 ${prefix}tahta
✗⃝🔖 ${prefix}breakweall
✗⃝🔖 ${prefix}text3dbox
✗⃝🔖 ${prefix}splaybutton
✗⃝🔖 ${prefix}gplaybutton
✗⃝🔖 ${prefix}sndw
✗⃝🔖 ${prefix}coolgravity
✗⃝🔖 ${prefix}bannerlol
✗⃝🔖 ${prefix}logo
✗⃝🔖 ${prefix}tlight
✗⃝🔖 ${prefix}christmas
✗⃝🔖 ${prefix}cemeterygates
✗⃝🔖 ${prefix}lovelock
✗⃝🔖 ${prefix}airballoon
✗⃝🔖 ${prefix}neonsign
✗⃝🔖 ${prefix}neondevil
✗⃝🔖 ${prefix}artpapercut
✗⃝🔖 ${prefix}neonwriting
      🛡️️🛡🛡 SOUND ️🛡️🛡️🛡️
✗⃝🔖 ${prefix}sound1
✗⃝🔖 ${prefix}sound2
✗⃝🔖 ${prefix}sound3
✗⃝🔖 ${prefix}sound4
✗⃝🔖 ${prefix}sound5
✗⃝🔖 ${prefix}sound6
✗⃝🔖 ${prefix}sound7
✗⃝🔖 ${prefix}sound8
✗⃝🔖 ${prefix}sound9
✗⃝🔖 ${prefix}sound10
✗⃝🔖 ${prefix}sound11
✗⃝🔖 ${prefix}sound12
✗⃝🔖 ${prefix}sound13
✗⃝🔖 ${prefix}sound14
✗⃝🔖 ${prefix}sound15
✗⃝🔖 ${prefix}sound16
✗⃝🔖 ${prefix}sound17
✗⃝🔖 ${prefix}sound18
✗⃝🔖 ${prefix}sound19
✗⃝🔖 ${prefix}sound20
✗⃝🔖 ${prefix}sound22
✗⃝🔖 ${prefix}sound23
✗⃝🔖 ${prefix}sound24
✗⃝🔖 ${prefix}sound25
✗⃝🔖 ${prefix}sound26
✗⃝🔖 ${prefix}sound27
✗⃝🔖 ${prefix}sound28
✗⃝🔖 ${prefix}sound29
✗⃝🔖 ${prefix}sound30
✗⃝🔖 ${prefix}sound31
✗⃝🔖 ${prefix}sound32
✗⃝🔖 ${prefix}sound33
✗⃝🔖 ${prefix}sound34
✗⃝🔖 ${prefix}sound35
✗⃝🔖 ${prefix}sound36
      🛡️🛡️🛡️ AUDIO 🛡️🛡️🛡️
✗⃝🔖 ${prefix}audio1
✗⃝🔖 ${prefix}audio2
✗⃝🔖 ${prefix}audio3
✗⃝🔖 ${prefix}audio4
✗⃝🔖 ${prefix}audio5
✗⃝🔖 ${prefix}audio6
✗⃝🔖 ${prefix}audio7
✗⃝🔖 ${prefix}audio8
✗⃝🔖 ${prefix}audio9
✗⃝🔖 ${prefix}audio10
✗⃝🔖 ${prefix}audio11
✗⃝🔖 ${prefix}audio12
✗⃝🔖 ${prefix}audio13
✗⃝🔖 ${prefix}audio14
✗⃝🔖 ${prefix}audio15
✗⃝🔖 ${prefix}audio16
✗⃝🔖 ${prefix}audio17
✗⃝🔖 ${prefix}audio18
✗⃝🔖 ${prefix}audio19
✗⃝🔖 ${prefix}audio20
✗⃝🔖 ${prefix}audio22
✗⃝🔖 ${prefix}audio23
✗⃝🔖 ${prefix}audio24
✗⃝🔖 ${prefix}audio25
✗⃝🔖 ${prefix}audio26
✗⃝🔖 ${prefix}audio27
✗⃝🔖 ${prefix}audio28
✗⃝🔖 ${prefix}audio29
✗⃝🔖 ${prefix}audio30
✗⃝🔖 ${prefix}audio31
✗⃝🔖 ${prefix}audio32
✗⃝🔖 ${prefix}audio33
✗⃝🔖 ${prefix}audio34
✗⃝🔖 ${prefix}audio35
      🛡️🛡️🛡️ DOSA 🛡️🛡️🛡️
✗⃝🔖 ${prefix}dosa1
✗⃝🔖 ${prefix}dosa2
✗⃝🔖 ${prefix}dosa3
✗⃝🔖 ${prefix}dosa4
✗⃝🔖 ${prefix}dosa5
✗⃝🔖 ${prefix}dosa6
✗⃝🔖 ${prefix}dosa7
✗⃝🔖 ${prefix}dosa8
✗⃝🔖 ${prefix}dosa9
✗⃝🔖 ${prefix}dosa10
✗⃝🔖 ${prefix}dosa11
✗⃝🔖 ${prefix}dosa12
✗⃝🔖 ${prefix}dosa13
✗⃝🔖 ${prefix}dosa14
✗⃝🔖 ${prefix}dosa15
✗⃝🔖 ${prefix}dosa16
✗⃝🔖 ${prefix}dosa17
✗⃝🔖 ${prefix}dosa18
✗⃝🔖 ${prefix}dosa19
✗⃝🔖 ${prefix}dosa20
✗⃝🔖 ${prefix}dosa21
✗⃝🔖 ${prefix}dosa23
✗⃝🔖 ${prefix}dosa24
✗⃝🔖 ${prefix}dosa24`
 sendButMessage(from, wibu, `*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤 OWNER👤 : ⤵️⤵️⤵️
 *https://wa.me/6289667923162*
 💌 EMAIL 💌 : ⤵️⤵️⤵️
 *kontolodon@gmail.com*
 🔎  YT 🔎 : ⤵️⤵️⤵️
  *https://www.youtube.com/channel/UCn-kMZEYRnNNCkMzQBzMYKw*
 🪀 GROUP 🪀 : ⤵️⤵️⤵️
  *https://chat.whatsapp.com/JagDgvTQoVRClho3xsPwZb*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*`, [
                { buttonId: `${prefix}rules`, buttonText: { displayText: '💮 RULES 💮' }, type: 1 }
                ,
                { buttonId: `${prefix}owner`, buttonText: { displayText: '🐶 OWNER 🐶' }, type: 1 }
                ,
                { buttonId: `${prefix}sc`, buttonText: { displayText: '🐰 SCRIPT-BOT 🐰' }, type: 1 }
                       ], { quoted: fakeTroli});
                       sendVn(niionichan)
 break;
//audio
case 'audio1':
            sendVn(audio1)
            break   
case 'audio2':
            sendVn(audio2)
            break       
case 'audio3':
            sendVn(audio3)
            break       
case 'audio4':
            sendVn(audio4)
            break       
case 'audio5':
            sendVn(audio5)
            break       
case 'audio6':
            sendVn(audio6)
            break       
case 'audio7':
            sendVn(audio7)
            break       
case 'audio8':
            sendVn(audio8)
            break       
case 'audio9':
            sendVn(audio9)
            break       
case 'audio10':
            sendVn(audio10)
            break       
case 'audio11':
            sendVn(audio11)
            break       
case 'audio12':
            sendVn(audio12)
            break       
case 'audio13':
            sendVn(audio13)
            break       
case 'audio14':
            sendVn(audio14)
            break       
case 'audio15':
            sendVn(audio15)
            break       
case 'audio16':
            sendVn(audio16)
            break       
case 'audio17':
            sendVn(audio17)
            break       
case 'audio18':
            sendVn(audio18)
            break       
case 'audio19':
            sendVn(audio19)
            break  
case 'audio20':
            sendVn(audio20)
            break 
case 'audio22':
            sendVn(audio22)
            break   
case 'audio23':
            sendVn(audio23)
            break   
case 'audio24':
            sendVn(audio24)
            break   
case 'audio25':
            sendVn(audio25)
            break   
case 'audio26':
            sendVn(audio26)
            break   
case 'audio27':
            sendVn(audio27)
            break   
case 'audio28':
            sendVn(audio28)
            break   
case 'audio29':
            sendVn(audio29)
            break   
case 'audio30':
            sendVn(audio30)
            break   
case 'audio31':
            sendVn(audio31)
            break   
case 'audio32':
            sendVn(audio32)
            break   
case 'audio33':
            sendVn(audio33)
            break   
case 'audio34':
            sendVn(audio34)
            break   
case 'audio35':
            sendVn(audio35)
            break
case 'sound1':
            sendVn(sound1)
            break   
case 'sound2':
            sendVn(sound2)
            break       
case 'sound3':
            sendVn(sound3)
            break       
case 'sound4':
            sendVn(sound4)
            break       
case 'sound5':
            sendVn(sound5)
            break       
case 'sound6':
            sendVn(sound6)
            break       
case 'sound7':
            sendVn(sound7)
            break       
case 'sound8':
            sendVn(sound8)
            break       
case 'sound9':
            sendVn(sound9)
            break       
case 'sound10':
            sendVn(sound10)
            break       
case 'sound11':
            sendVn(sound11)
            break       
case 'sound12':
            sendVn(sound12)
            break       
case 'sound13':
            sendVn(sound13)
            break       
case 'sound14':
            sendVn(sound14)
            break       
case 'sound15':
            sendVn(sound15)
            break       
case 'sound16':
            sendVn(sound16)
            break       
case 'sound17':
            sendVn(sound17)
            break       
case 'sound18':
            sendVn(sound18)
            break       
case 'sound19':
            sendVn(sound19)
            break  
case 'sound20':
            sendVn(sound20)
            break 
case 'sound22':
            sendVn(sound22)
            break   
case 'sound23':
            sendVn(sound23)
            break   
case 'sound24':
            sendVn(sound24)
            break   
case 'sound25':
            sendVn(sound25)
            break                	  	
case 'sound26':
            sendVn(sound26)
            break   
case 'sound27':
            sendVn(sound27)
            break       
case 'sound28':
            sendVn(sound28)
            break       
case 'sound29':
            sendVn(sound29)
            break       
case 'sound30':
            sendVn(sound30)
            break       
case 'sound32':
            sendVn(sound31)
            break       
case 'sound32':
            sendVn(sound32)
            break       
case 'sound33':
            sendVn(sound33)
            break       
case 'sound34':
            sendVn(sound34)
            break       
case 'sound35':
            sendVn(sound35)
            break       
case 'sound36':
            sendVn(sound36)
            break 
//dosa
case 'dosa1':				 
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
case 'dosa2':
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
case 'dosa3':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
case 'dosa4':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
case 'dosa5':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
case 'dosa6':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
case 'dosa7':
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
case 'dosa8':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
case 'dosa10':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
case 'dosa11':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
case 'dosa12':			    
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
case 'dosa13':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
case 'dosa14':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
case 'dosa15':
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
case 'dosa16':
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
case 'dosa17':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
case 'dosa18':
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
case 'dosa19':				 			
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
case 'dosa20':			
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
case 'dosa21':				 			
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
case 'dosa22':		
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
case 'dosa23':	
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
case 'dosa24':				 			
				qute = fs.readFileSync('./image/bkep.jpeg') 
				   KirBotz.sendMessage(from, qute, image, { quoted: fakeTroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break             
//sewabot
 case 'sewabot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
${wib} *𝑾𝒊𝒃*
${wita} *𝑾𝒊𝒕𝒂*
${wit} *𝑾𝒊𝒕*
Jam : *${time}*
Runtime : *${runtime(process.uptime())}*
🤖 HENTONGERS-BOT 🤖`, buttons: [{ buttonId: `${prefix}sewa1`, buttonText: { displayText: '🌸 IYA 🌸' }, type: 1 },{ buttonId: `${prefix}gk`, buttonText: { displayText: '🏵️ TIDAK 🏵️' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'sewa1':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
 listMsg = {
 buttonText: '🤖 LIST SEWA-Bot 🤖',
 footerText: 'Lord HentongersBot',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Sewabot`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${time}`,
 rows: [
                          {
                              "title": "1 BULAN",
                              "rowId": `${prefix}waktu 1bulan`
                           },
                           {
                              "title": "2 BULAN",
                              "rowId": `${prefix}waktu 2bulan`
                           },
                           {
                              "title": "6 BULAN",
                              "rowId": `${prefix}waktu 6bulan`
                           },
                           {
                              "title": "PERPANJANG",
                              "rowId": `${prefix}waktu panjang`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fakeTroli})
break
case 'waktu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            var buttonpulsa = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: '☁️ PULSA ☁️'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: '❄️ GOPAY ❄️'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            var buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            var buttongopay = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: '☁️ PULSA ☁️'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: '❄️ GOPAY ❄️'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            var buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            var buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: '☁️ PULSA ☁️'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: '❄️ GOPAY ❄️'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            var buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: '☁️ PULSA ☁️'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: '❄️ GOPAY ❄️'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            }
            break
case 'via':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
if((args[0]) == '☁️ PULSA ☁️'){
            saai =`${pulsa}`            
            var buttonpulsa = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saai}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttonpulsa,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            } else
if ((args[0]) == '❄️ GOPAY ❄️'){
            payu =`${gopay}`            
            var buttongopay = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${payu}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttongopay,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voto =`${ovo}`            
            var buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6289667923162@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©HentongersBot`, 'jpegThumbnail': fs.readFileSync('./image/kirtod.jpeg')}}}})
                   
            }
            break
case 'donasi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
 listMsg = {
 buttonText: '🥺 MAU DONASI KAK 🥺',
 footerText: 'Lord HentongersBot',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Sewabot`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${time}`,
 rows: [
                          {
                              "title": "PULSA",
                              "rowId": `${prefix}via gopay`
                           },
                           {
                              "title": "GOPAY",
                              "rowId": `${prefix}via gopay`
                           },
                           {
                              "title": "OVO",
                              "rowId": `${prefix}via gopay`
                           },
                           {
                              "title": "DANA",
                              "rowId": `${prefix}via gopay`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fakeTroli})
break
case 'gk':
replly('*Anak Kontol Dah Tolol Sok Keras Pulak*')
break
case 'runtime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
replly (`${runtime(process.uptime())}`)
break
case 'tes':
replywa ('On Kak')
break
case 'play':
             if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(`[ ⏳ ] HARAP SABAR KAK 😁`)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             var { thumb, title, filesizeF, filesize } = res
             var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}
•⚡ Link Video : ${yut.videos[0].url}`
             ya = await getBuffer(thumb)
             py =await KirBotz.prepareMessage(from, ya, image)
             sendButloc(from,monospace(capti),'',`KirBotz×`,[{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵 AUDIO 🎵'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥 VIDEO 🎥'}, type: 1}
],null,null,ya)
})
             break                
case 'ytmp3':
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
        if (args.length < 1) return reply('🔗 LINK NYA MANA KAK? 🔗')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link gk valir')
        reply("[ ⏳ ] SEDANG MENGDOWNLOAD AUIDO HARAP SABAR 😏")
        teks = args.join(' ')
        res = await y2mateA(teks)
        sendFileFromUrl(res[0].link, document, {quoted: fakeTroli, mimetype: 'audio/mp3', filename: res[0].output})
        break
case 'ytmp4':
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
        if (args.length < 1) return reply('🔗 LINK NYA MANA KAK? 🔗')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link gk valir')
        reply("[ ⏳ ] SEDANG MENGDOWNLOAD VIDEO HARAP SABAR 😏")
        teks = args.join(' ')
        res = await y2mateV(teks)
        sendFileFromUrl(res[0].link, document, {quoted: fakeTroli, mimetype: 'video/mp4', filename: res[0].output})
        break
case 'tiktokmp4':
 		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
 		if (!q) return replly('Linknya?')
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		var { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `Make Doang Gak Follow🙄Gak Malu?\nFollow Nih https://www.instagram.com/agan.rizkia.182/`
		KirBotz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:kir,caption:me})
		})
		})
     		break
case 'tiktokmp3':
             if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             sticWait(from)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=KONTOLODON&url=${ini_link}`)
             KirBotz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: kir })
             break
case 'listsurah':
                   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=KONTOLODON`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
case 'statusminecraft':
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/play.nikosmp.live`)
ini_txt =`*╭─ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐒𝐞𝐫𝐯𝐞𝐫*\n`
ini_txt +=`│⬅️ 🔰 ➡️ 𝑺𝒕𝒂𝒕𝒖𝒔 : ${anu.online}\n`
ini_txt +=`│⬅️ 🔰 ➡️ 𝑶𝒏𝒍𝒊𝒏𝒆 : ${anu.players.online}\n`
ini_txt +=`│⬅️ 🔰 ➡️ 𝑴𝒂𝒑 : ${anu.map}\n`
ini_txt +=`│⬅️ 🔰 ➡️ 𝑮𝒂𝒎𝒆𝑴𝒐𝒅𝒆 : Survival\n`
ini_txt +=`│⬅️ 🔰 ➡️ 𝑰𝑷 : ${anu.ip}\n`
ini_txt +=`└❏─────────────`
reply(ini_txt)
break
case 'ssweb':
case 'ss':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					KirBotz.sendMessage(from, buff, image, {quoted: kir, caption : teks})
					break
case 'ttp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
sticWait(from)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
 //ganz
break
case 'bts':
case 'cecan':
case 'cogan':
case 'estetic':
case 'meme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KONTOLODON`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️ SELANJUTNNYA KAK ➡️ ' }, type: 1 }
                       ]
                sendButImage(from, '🥳 ℕ𝕚𝕙 𝕜𝕒𝕜 𝕦𝕕𝕒𝕙 𝕛𝕒𝕕𝕚 🥳', `🤖 Hentongers-Botz 🤖`, hasil, but)
                                
                    break
                    case 'darkjoke':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/ap/darkjoke/darkjoke?text=${txt1}&apikey=KONTOLODON`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break      
                                                                                                               
                                                                                                               case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
})
break
                                                                                                               
case 'neko':
case 'loli':
case 'milf':
case 'chiisaihentai':
case 'trap':
case 'sagiri':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
case 'patrick':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=KONTOLODON`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️ SELANJUTNNYA KAK ➡️' }, type: 1 }
                       ]
                sendButImage(from, '```Sagne Kok Ke 2D Hadeh Stress Lu keokwok :v```', `🤖 Hentongers-Botz 🤖`, hasil, but)
       sendVn(ara1)
                    break
                    /// halal broter
                      case 'shota':
                      case 'husbu':
                      case 'art':
                      case 'elf':
                      case 'wallnime':
                      case 'bully':
                      case 'cuddle':
                      case 'cry':
                      case 'hug':
                      case 'awoo':
                      case 'lick':                           
                      case 'elaina':
                      case 'megumin':
                      case 'husnobu':
                      case 'kanna':
                      case 'pat':
                      case 'blush':
                      sendVn(niionichan)
                       sticOk(from)                   
                 ////////////                        
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KONTOLODON`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️ SELANJUTNNYA KAK ➡️' }, type: 1 }
                       ]
                sendButImage(from, '🥳 ℕ𝕚𝕙 𝕜𝕒𝕜 𝕦𝕕𝕒𝕙 𝕛𝕒𝕕𝕚 🥳', `🤖 Hentongers-Botz 🤖`, hasil, but)
       
                    break
                    
case 'verify':
if (isRegistered) return reply('```😁 KAKA UDAH DAFTAR 😁```')
var serialUser = createSerial(18)
	         try {
								ppimg = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         var anuu = `「 *🤖 PENDAFTARAN USER BOT 🤖* 」
*Terimakasih 😁 Sudah Mendaftarkan Diri Dalam Database 🤖 Bot 🤖 WhatsApp*

👤️ Nama :* ${pushname}
🔥️ API :* +${sender.split('@')[0]}
🎟️ Serial:* ${serialUser}
🌟️ Total:* ${_registered.length} *Pengguna Botz*

*「 🤖 HENTONGERS-BOT 🤖 」*`
         kirbotz = await getBuffer(ppimg)
                but = [
                { buttonId: `${prefix}linkgc`, buttonText: { displayText: '👍 GROUP-BOT 👍' }, type: 1 }
                ,
                { buttonId: `${prefix}menu`, buttonText: { displayText: '🤖 MENU 🤖' }, type: 1 }
                ,
                { buttonId: `${prefix}allmenu`, buttonText: { displayText: '😎 LONCAT ALLMENU 😎' }, type: 1 }
                ]
                sendButImage(from, `${anuu}`, `❤️ HENTONGERS-BOT ❤️`, kirbotz, but)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
            setTimeout( () => {
			KirBotz.updatePresence(from, Presence.composing)
			replly('```*Terimakasih Telah Terdaftar Di HENTONGERS-BOT*```')
		}, 2000)
		sendVn(salamkenal)
		
        break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'keta':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
case 'nsfw_neko_gif':
case 'random_hentai_gif':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=KONTOLODON`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: '➡️ SELANJUTNNYA KAK ➡️ ' }, type: 1 }
                       ]
                sendButImage(from, '```Nih Kawan Jangan Lupa Coly Noh Di Kamar kwookwok```', `🤖 Hentongers-Botz 🤖`, hasil, but)
       sendVn(ara1)
       sticOk(from)
                    break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=KONTOLODON&text=${ini_txt}`).then((gambar) => {
                    KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=KONTOLODON&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=KONTOLODON&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli}) 
                    })
                    break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=KONTOLODON&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=KONTOLODON&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'tahta':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/hartatahta?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'sndw':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/sandw?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'gplaybutton':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'splaybutton':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/splaybutton?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'text3dbox':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/text3dbox?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'tlight':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/tlight?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'coolgravity':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=KONTOLODON&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'bannerlol':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=KONTOLODON&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'logo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'christmas':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/christmas?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'cemeterygates':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/cemeterygates?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'lovelock':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/lovelock?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'airballoon':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/airballoon?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'neonsign':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/neonsign?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'neonwriting':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.dapuhy.ga/api/photofunia/neonwriting?text1=${txt1}&text2=${txt2}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'artpapercut':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/textpro/artpapercut?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'neondevil':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.dapuhy.ga/api/ephoto/neondevil?text=${txt1}&apikey=TtiLOZsxnW`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
//
case 'breakweall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} KirBotz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.zeks.me/api/breakwall?apikey=b6xAb98WcsSbviYqcyYFtizz8MG&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `❤️ HENTONGERS-BOT ❤️`, quoted : fakeTroli})
                    })
                    break
case 'tourl':
               if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
               if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               sticWait(from)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
               owgi = await KirBotz.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
let inilist = []
for (let i of ownerNumber) {
var vname = KirBotz.contacts[i] != undefined ? KirBotz.contacts[i].vname || KirBotz.contacts[i].notify : undefined
inilist.push({
"displayName": 'Akira',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${KirBotz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await KirBotz.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fakeTroli })
button = [
  {buttonId: '.menu', buttonText: {displayText: '🤖 MENU-BOT 🤖'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `*©HentongersBot*`,
    buttons: button,
    headerType: 1
}
await KirBotz.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fakeTroli})
    sendVn(oniidaisuki)
break
case 'mode':
        if (!kir.key.fromMe) return;
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `⬡ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `⬡ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
case 'group':
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fakeTroli})
        sendButMessage(from, `OPEN & CLOSE`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `⬡ OPEN `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `⬡ CLOSE`,
            },
            type: 1,
          },
        ]);
        break;
case 'antilink':
        if (!kir.key.fromMe) return;
        sendButMessage(from, `ON & OFF`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}anti enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}anti disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ]);
        break;
case 'welcome':
        if (!kir.key.fromMe) return;
        sendButMessage(from, `ON & OFF`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}welco enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}welco disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ]);
        break;
case 'self':
              if (!kir.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              replly(`Success mode self gan`)
              break
case 'public':
        	  if (!kir.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              replly(`Sukses mode publik gan`)
              break
case 'welco':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return replly('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               replly('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               replly('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               replly('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'anti':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Anda Bukan Admin`)
                   if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
                   reply(`Sukses Membuka Grup ${groupName} Kontol`)
						KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(`Anda Bukan Admin`)
                   if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
						reply(`Sukses Menutup Grup ${groupName} Kontol`)
						KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!kir.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'add':
             if (kir.message.extendedTextMessage === null || kir.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             KirBotz.groupAdd(from, [entah])
             } else {
             entah = kir.message.extendedTextMessage.contextInfo.participant
             KirBotz.groupAdd(from, [entah])
}
             break
case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !kir.key.fromMe) return reply(`Khusus Owner Tod`)
				KirBotz.updatePresence(from, Presence.composing)
				KirBotz.groupLeave(from)
						break
case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
					linkgc = await KirBotz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					KirBotz.sendMessage(from, yeh, text, { quoted: kir })
					break
case 'sticker': 
case 'stiker':
case 's':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            var media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                KirBotz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: kir})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kir.message.videoMessage.seconds < 11 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
                var media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            KirBotz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: kir})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `🕳️ @${i.jid.split("@")[0]}\n\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek ❤️ HENTONGERS-BOT ❤️`)
fs.unlinkSync(ran)
})
break
case 'tourl':
    if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
            owgi = await KirBotz.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'bc':
             if (!isOwner) return  sticOwner(from)
             if (args.length < 1) return reply('teks?')
             anu = await KirBotz.chats.all()
             if (isMedia && !kir.message.videoMessage || isQuotedImage) {
             var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
             bc = await KirBotz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	KirBotz.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `
${wib} _𝑾𝒊𝒃_
${wita} _𝑾𝒊𝒕𝒂_
${wit} _𝑾𝒊𝒕_
*${_registered.length}* User Bot
_${totalchat.length}_ Chat
_${runtime(process.uptime())}_
_${time}_
Broadcast By *🤖 Hentongers-Botz 🤖*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '🤖 MENU-BOT 🤖'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'🤖 SEWA-BOT 🤖'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             KirBotz.sendMessage(_.jid, { contentText: `${textt}`, footerText: `
${wib} _𝑾𝒊𝒃_
${wita} _𝑾𝒊𝒕𝒂_
${wit} _𝑾𝒊𝒕_
*${_registered.length}* User Bot
_${totalchat.length}_ Chat
_${runtime(process.uptime())}_
_${time}_
Broadcast By *WilyKunꪶ𖣂ꫂ*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '🤖 MENU-BOT 🤖'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'🤖 SEWA-BOT 🤖'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./image/kirtod.jpeg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
default:
if (budy.startsWith('$')){
if (!kir.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
replly(stdout)
}
})
}
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'pink'))
        }
	}
}
