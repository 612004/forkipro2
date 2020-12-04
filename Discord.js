const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
  if (message.content === '!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});
client.on('message', message => {
  console.log(message.content);
  if (message.content === 'hello') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'hellO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'helLo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'heLlo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'hEllo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'Hello') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'helLO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'heLlO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'hEllO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HellO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HelLo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HeLLo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HElLo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'hELlo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'hELlO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HEllo') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HELLO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HELlO') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'good') {
    message.channel.send(` ${message.author} That is great to hear my day is great to.`);
    if (message.content === 'gooD') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'goOd') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'gOod') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'goOD') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'gOoD') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'GooD') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'GoOd') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'GOod') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
    if (message.content === 'GOOD') {
      message.channel.send(` ${message.author} How's it going today?`);
    }
  } else if (message.content === 'bad') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'baD') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'bAd') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'bAD') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'BaD') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'BAD') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'Bad') {
    message.channel.send(` ${message.author} That is bad to hear from you.`);
  }
  if (message.content === 'hI') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'Hi') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === 'HI') {
    message.channel.send(` ${message.author} How's it going today?`);
  }
  if (message.content === '!moo avatar') {
    message.reply(message.author.displayAvatarURL());
  }
}

);
client.login('Nzc0MzQ1Njc5NTU5ODUyMDY0.X6WbnA.yihHL7P3q4DbAQae9ZQx4cH5Brc');