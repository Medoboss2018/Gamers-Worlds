const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage('https://discord.gg/DzxhsMB')
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + 'message.author.tag')

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : مؤبد | عدد استخدامات الرابط : غير محددة ")
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
var prefix = "&";

if (!message.content.startsWith(prefix)) return;
var args = message.content.split(' ').slice(1);
var argresult = args.join(' ');
if (message.author.id == 439393453332234243) return;
if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '439393453332234243') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else


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
