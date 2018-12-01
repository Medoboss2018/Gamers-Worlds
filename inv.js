const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message'.message => {
    if (!message.guild) return;
    if (message.content.startsWith("رابط"})    {


message.channel.createInvite({
 thing: true,
 maxUses: 1,
 maxAge: 86400
}).then(invite=>
 message.author.sendMessage(invite.url)
}
message.channel.send(`**تم ارسال الرابط برسالة خاصة**`)
message.author.send(`**هدا الرابط لشخص و لمدة 24 ساعة**`)
}
});
(edited)

client.on('message', message => {
var prefix = "$";

if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '439393453332234243') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
 message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '439393453332234243') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
 client.user.setActivity(argresult, {type : 'watching'});
message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
if (message.content.startsWith(prefix + 'listening')) {
if (message.author.id !== '439393453332234243') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setActivity(argresult, {type : 'listening'});
message.channel.sendMessage(`**${argresult}**: تم تغير الاستماع الي`)
}

});

client.login(process.env.BOT_TOKEN);
