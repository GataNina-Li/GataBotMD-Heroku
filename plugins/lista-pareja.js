let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `π πππππΌ πΏπ ππππΌπΎπππ : ππππΌππππππππ
*β­β’Β·βββββββββββββββββββΒ·β’*
β *Total : ${relacion.length} Usuarios* ${relacion ? '\nβ\n' + relacion.map(([jid], i) => `
β *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Pareja' : conn.getName(jid)}
β ${isOwner ? '@' + jid.split`@`[0] : jid}\nβ - - - - - - - - -`.trim()).join('\n') : ''}
*β°β’Β·βββββββββββββββββββΒ·β’*`
await conn.sendButton(m.chat, caption, `π π π π£ππ₯πππ β’ ${pareja ? `*${user} π ${conn.getName(pareja)}*` : `β *No tiene Pareja*`}\n${wm}`, null, [ 
['π  π π‘ π¨ βοΈ', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i

export default handler
