import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = agenda[Math.floor(Math.random() * agenda.length)]
conn.sendFile(m.chat, 'error.jpg', `*🔮 AGENDA SEMANAL 🔮*`, m)
}
handler.help = ['agenda']
handler.tags = ['internet']
handler.command = /^(agendasemanal)$/
handler.exp = 50
handler.level = 0
export default handler


global.agenda = [
"https://cdn.discordapp.com/attachments/1234592983794454530/1243658949845061773/FB_IMG_1716581761671.jpg",
]