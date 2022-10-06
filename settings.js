const fs = require('fs')
const chalk = require('chalk')

//Api Website\\ 
global.APIs = {
    zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
    'https://zenzapis.xyz': 'a4060c904b',
}


global.OWNER_REACT = '🧑🏻‍💻'
global.REACT_NUMBER = '201023246121'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['201023246121'] //ur owner number
global.ownername = "𝐾𝐴𝑁𝐸𝐾𝐼 𝐾𝐸𝑁" //ur owner name
global.ytname = "https://chat.whatsapp.com/EdVNcS810axJJ7dP6wcZUV" //ur yt chanel name
global.socialm = "https://chat.whatsapp.com/EdVNcS810axJJ7dP6wcZUV" //ur github or insta name
global.location = "مصريين يا غالي" //ur location

//bot bomdy 
global.owner = ['201023246121']
global.ownertag = '201023246121' //ur tag number
global.botname = 'Queen-Rose' //ur bot name
global.linkz = "https://chat.whatsapp.com/EdVNcS810axJJ7dP6wcZUV" //your theme url which will be displayed on whatsapp
global.websitex = "https://chat.whatsapp.com/EdVNcS810axJJ7dP6wcZUV" //ur website to be displayed
global.botscript = 'https://chat.whatsapp.com/EdVNcS810axJJ7dP6wcZUV' //script link
global.reactmoji = "💖" //ur menu react emoji
global.themeemoji = "🎸" //ur theme emoji
global.packname = "Queen-Rose" //ur sticker watermark packname
global.author = "Kaneki Ken" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['201023246121,201013144006,201024370368,212608492035'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['\', '/', '.', '🐦', '🐤', '🗿']
global.sp = '⚜'
global.mess = {
    success: 'اشطا ✓',
    admin: 'انت مش ادمن يغالي! 🇱🇰',
    botAdmin: '🗿ادمن يغالي! 🇱🇰',
    owner: '🗿لصاحب البوت بس! 🇱🇰',
    group: '🗿للجروب بس! 🇱🇰',
    private: '🗿للخاص بس! 🇱🇰',
    bot: 'للبوت بس 🇱🇰',
    wait: '☕أشرب قهوه عبال ما اخلص🇱🇰',
    linkm: '🗿اين الرابط انا لا اراه 🇱🇰',
    error: '🗿اكتب عدل بالله',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: '🐦خد بان هعهعهعهعهع.',
    nsfw: 'احا انت بتعمل ايه!🐦🗡️',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.rpg = {
    darahawal: 100,
    besiawal: 15,
    goldawal: 10,
    emeraldawal: 5,
    umpanawal: 5,
    potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
