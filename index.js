const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "MzM1OTA0ODg0ODMyNDY4OTk0.DEx8mA.h-gLqJZyE_lCBtznaG_3civrS10" // Recommended to load from json file.

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    Bot.user.setGame('Tremzinho da Alegria Simulator')
});


music(Bot);

Bot.on('message', message => {
  let prefix = "!";
  if (message.content === '!hey') {
    message.reply('hey!');
  }

    if (message.content === '!top') {
    message.channel.send(':ok_hand: :ok_hand: :ok_hand: :ok_hand: :ok_hand: :ok_hand: ');
  }

   if (message.content === '!moidido') {
    message.channel.send('**nha**');
  }

   if (message.content === '!mara') {
     message.channel.send(':regional_indicator_m: :a:  - :regional_indicator_r: :a:  - :regional_indicator_v: :regional_indicator_i:  - :regional_indicator_l: :regional_indicator_h: :o2:  - :regional_indicator_s: :o2:');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
   }

   if (message.content === '!cedo') {
     message.channel.send(':regional_indicator_m: :regional_indicator_u: :regional_indicator_i: :regional_indicator_t: :regional_indicator_o:      :regional_indicator_c: :regional_indicator_e: :regional_indicator_d: :regional_indicator_o:');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
   }

  if (message.content === '!kimochi') {
     message.channel.send(':regional_indicator_k: :regional_indicator_i: :regional_indicator_m: :regional_indicator_o: :regional_indicator_c: :regional_indicator_h: :regional_indicator_i:');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!moe') {
     message.channel.send(':regional_indicator_m: :regional_indicator_o: :regional_indicator_e:   :regional_indicator_m: :regional_indicator_o: :regional_indicator_e:   :regional_indicator_m: :regional_indicator_o: :regional_indicator_e:');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!ore wa') {
     message.channel.send(':o2: :regional_indicator_r: :regional_indicator_e:   :regional_indicator_w: :a:   :regional_indicator_o: :regional_indicator_c: :regional_indicator_h: :regional_indicator_i: :regional_indicator_n: :regional_indicator_c: :regional_indicator_h: :regional_indicator_i: :regional_indicator_n:   :regional_indicator_g: :a:   :regional_indicator_d: :a: :regional_indicator_i: :regional_indicator_s: :regional_indicator_u: :regional_indicator_k: :regional_indicator_i:   :regional_indicator_n: :regional_indicator_a: :regional_indicator_n: :regional_indicator_d: :a: :regional_indicator_y: :o2:');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!euphoria') {
    message.channel.sendFile ('http://www.yfonteseca.esy.es/BotPico/Memes/Euphoria-meme-delicia.jpg');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!lord') {
    message.channel.sendFile ('http://static4.fjcdn.com/comments/Oh+chin+chin+_4647ade162611b99166408427ff9c1fe.jpg');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if ((/!hug/).test(message.content)) {
    const mention = message.mentions.users.first();
    message.channel.send(message.author.toString() + ' deu um abraço no ' + mention.toString(), {file: "http://vignette2.wikia.nocookie.net/degrassi/images/d/df/ATTACK_HUG.gif"});
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if ((/!atirar/).test(message.content)) {
    const mention = message.mentions.users.first();
    message.channel.send(message.author.toString() + ' atirou no ' + mention.toString(), {file: "http://www.yfonteseca.esy.es/BotPico/Memes/atirando.gif"});
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!donate') {
    message.channel.sendMessage('@Everyone');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!mavi') {
    message.channel.sendFile('http://www.yfonteseca.esy.es/BotPico/Memes/MaVi.png');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!gotusemen') {
    message.channel.sendFile('http://www.yfonteseca.esy.es/BotPico/Memes/got your semen.jpg');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if (message.content === '!kick') {
    var oie = message.member.user.id
console.log(`There was an error logging in:`);
console.log(oie);
oie.kick();
  }

  if (message.content === '!vai') {
    var embed = new Discord.RichEmbed()
      .addField("Test Title", "Test description", true)
      .addField("Test Title2", "Test description", true)
      .addField("Test Title3", "Test description", true)
      .addField("Test Title", "Test description")
      .addField("Test Title", "Test description")
      .setColor(0x00FFFF)
      .setFooter("This message")
      .setThumbnail(message.autor.avatarURL)
    message.channel.sendEmbed(embed);

  }

  if ((/!sorvetinho/).test(message.content)) {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
   const mention = message.mentions.users.first();
   const mention_other = message.mentions.users.last();

   if (mention !== mention_other) { // Se houver outra menção, !sorvetinho @primeiro @segundo
     message.channel.send(':icecream: ' + mention.toString() + ' derrubou sorvetinho em ' + mention_other.toString(), {file: "https://cdn.discordapp.com/attachments/332326372494016513/336569223960854538/4496860.gif"});
   } else {
    message.channel.send(':icecream: ' + Bot.user + ' derramou sorvetinho no ' + mention.toString(), {file: "https://cdn.discordapp.com/attachments/332326372494016513/336569223960854538/4496860.gif"}); // Mensagem normal
   }
   if (!mention) return message.channel.send(':icecream: ' + message.author.toString() + ' não sabe usar o comando, e derramou sorvetinho em sí mesmo. **(Use !sorvetinho @user)**'); // Essa é uma mensagem de erro.
   if (mention == message.author) return message.channel.send(':icecream: ' + Bot.user + ' derramou sorvetinho em sí mesmo.'); // Quando a pessoa joga sorvetinho em sí mesmo.


  }


  if (message.content === '!estou de volta') {
    message.channel.send(' ', {file: "https://cdn.discordapp.com/attachments/317406347165433856/336352974353727488/dba.gif"});
  }

  if ((/!lolicon/).test(message.content)) {
    const mention = message.mentions.users.first();
    message.channel.send(' Você está preso-desu, ' + mention.toString(), {file: "http://www.yfonteseca.esy.es/BotPico/Memes/preso-desu.jpg"}); // Mensagem normal
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if ((/!alegria/).test(message.content)) {
    const mention = message.mentions.users.first();
    message.channel.send(mention.toString() + ' entrou na dança do trenzinho da alegria', {file: "https://cdn.discordapp.com/attachments/332326372494016513/336958196046364673/images-1.jpg"}); // Mensagem normal
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }

  if ((/!gelinho/).test(message.content)) {
    const mention = message.mentions.users.first();
    if (mention == message.author) return message.channel.send(Bot.user + ' enfiou o gelinho em si mesmo. kyaa'); // Quando a pessoa joga sorvetinho em sí mesmo.
    message.channel.send(mention.toString() + ', me foda com um gelinho', {file: "https://s-media-cache-ak0.pinimg.com/originals/ca/d8/61/cad861052f8721de300a49221d5c98c1.jpg"}); // Mensagem normal
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
  }


  if ((/!as/).test(message.content)) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: Bot.user.username,
      icon_url: Bot.user.avatarURL
    },
    title: "**COMANDOS DE PICO-SAMA**",
    url: "https://www.baixarhentai.net/hentai/boku-no-piko",
    description: "Nha",
    timestamp: new Date(),
    footer: {
      icon_url: Bot.user.avatarURL,
      text: "© Pico-sama"
    }
  }
});

  }

  if (message.content === '!boludo') {
    message.channel.send('oie');
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    message.edit('Nada de mais, apenas um pico!')
  .then(msg => console.log(`Updated the content of a message from ${msg.author}`))
  .catch(console.error);
  }

  if (message.content === '!waifu MaVi-sama') {
     message.channel.send('MaVi............Existem tantas coisas que quero lher dizer mas... ainda... não sei se devo tentar... \r Mas Sério, como descobriu essa porra?');
  }

  if (message.content === 'a!jakka jan') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively

    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      // const dispatcher = connection.playFile("Yui_Hirasawa_-_Jaka_Jaka_Jan.mp3");
      const dispatcher = connection.playFile('http://www.yfonteseca.esy.es/BotPico/Audio/Yui_Hirasawa_-_Jaka_Jaka_Jan.mp3');
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
    //Yui Hirasawa - Jaka Jaka Jan.mp3
    //
  }

  if (message.content === 'a!dica gordinha') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/Dica_Gordinha.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!tuturu') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/tuturu.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!to be continued') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/to_be_continued.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!daijobu') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/daijobu_mae_daijobu.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!tasukete') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/dareka_tasukete.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!cool') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast()
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/cool.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!explosion') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/explosion.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!omoshiroi') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/omoshiroi.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === 'a!nico') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/Nico_Nico_Nii.mp3");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
    //Yui Hirasawa - Jaka Jaka Jan.mp3
    //http://www.yfonteseca.esy.es/BotPico/Audio/Yui_Hirasawa_-_Jaka_Jaka_Jan.mp3
  }

  if (message.content === '!adorei') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/adorei.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === '!felicidade') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/felicidade.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === '!rabbit') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/Rabbit so alegria.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === '!ochinchin') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/ochinchin.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === '!13 anos') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("Audio/Ela tem 13 anos gente.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  if (message.content === '!sorriso') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    var voiceChannel = message.member.voiceChannel;
    // Play files natively
    const broadcast = Bot.createVoiceBroadcast();
    //
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile("http://www.yfonteseca.esy.es/BotPico/Audio/Sorriso da minha cara.wav");
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
  }

  // TASUKETE

  if (message.content === '!tasukete') {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .catch(console.error);
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: Bot.user.username,
      icon_url: Bot.user.avatarURL
    },
    title: "**COMANDOS DE PICO-SAMA**",
    url: "https://www.baixarhentai.net/hentai/boku-no-piko",
    description: "Nha",
    fields: [{
        name: "!mara",
        value: "**MA-RA-VI-LHO-SO**"
      },
      {
        name: "!moe",
        value: "Moe moe moe"
      },
      {
        name: "!cedo",
        value: "MUITO CEDO"
      },
      {
        name: "!kimochi",
        value: "Kimochiiii"
      },
      {
        name: "!ore wa",
        value: "ORE WA"
      },
      {
        name: "!euphoria",
        value: "Vou enfiar a mão em ti."
      },
      {
        name: "!lord",
        value: "Lord Ochinchin-sama."
      },
      {
        name: "!sorvetinho @user",
        value: "Derrama sorvetinho do Pico-sama"
      },
      {
        name: "!hug @user",
        value: "Abraça coleguinha"
      },
      {
        name: "!atirar @user",
        value: "Atira no coleguinha"
      },
      {
        name: "!tasukete @user",
        value: "Atira no coleguinha"
      },
      {
        name: "RABBITÃO",
        value: "[Rabbit - iFonteSeca](https://www.rabb.it/ifonteseca) \r[Rabbit - MaVi](https://www.rabb.it/MaVi) "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: Bot.user.avatarURL,
      text: "© Pico-sama"
    }
  }
});
    // message.reply('\r !mara \r !cedo \r !kimochi \r !moe \r !ore wa \r !euphoria \r !lord \r \r **MÚSICA DO PICO** \r !nyaa música-> ')
  }

  // Saudação

  if (message.content === '!boa noite') {
    message.channel.sendFile('https://media.giphy.com/media/wQpHdcJGSIcs8/200.gif');
  }
  // Comandos Administrativos

  // Menu
  if (message.content === '!criar') {
    message.reply('**Seja bem-vindo ao trabalho <3 <3** \r !criar cargo -> Criar um novo cargo \r !criar canal -> Criar um novo Canal de Texto');

  }

  // Adicionar Cargo
  if (message.content === '!cargo ') {

  }

  // Criar novo Canal
  if (message.content === '!criar canal') {
    message.guild.createChannel('new-general', 'text')
    .then(channel => console.log(`Created new channel ${channel}`))
    .catch(console.error);
  }

  // Criar novo Cargo
  if (message.content === '!criar cargo') {
    message.guild.createRole({
      name: 'Super Cool People',
      color: 'BLUE',
    })
    .then(role => console.log(`Created role ${role}`))
    .catch(console.error)
  }

});

Bot.on('guildBanAdd', user => {
  user.guild.defaultChannel.send(`Bani o ${user}`);

  channel.send(`Bani o ${user}`);
})

Bot.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Bem-vindo . <3, ${member}!`);
  member.guild.defaultChannel.sendFile(`http://i.imgur.com/EY9tpdc.gif`);

  // If you want to send the message to a designated channel on a server instead
  // you can do the following:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bem-vindo . <3, ${member}`);
  channel.send(`http://i.imgur.com/EY9tpdc.gif`);
});




Bot.login(token);
