const { randomInt } = require('crypto')
const Discord = require('discord.js')
const sqlite =  require('sqlite3').verbose();
require('dotenv').config()
const client = new Discord.Client()
const user_list = ["Will", "Mason", "Lee", "Tom", "Ally", "James"]
const activitylist = ["push-ups", "pull-ups", "dips", "sit-ups", "chin-ups", "star-jumps", "squats"]
const token = process.env.TOKEN

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    let db = new sqlite.Database('./fitness_boys.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
    client.user.setActivity("Gains-Simulator 2021")

    
})

client.on('message', msg => {
    if (msg.content == '!workout') {
        let rand1 = Math.floor((Math.random() * 100) + 1);
        let rand2 = Math.floor((Math.random() * 6));
        let rand3 = Math.floor((Math.random() * 7));

      msg.reply(user_list[rand2] + " has to do " + rand1 + " " + activitylist[rand3])
      let db = new sqlite.Database('./fitness_boys.db', sqlite.OPEN_READWRITE)

      if (msg == ".getdata") {
        let query = 'SELECT * FROM user WHERE '
      }
      db.run('')
    }
    if (msg.content == '!help') {
      msg.reply("This bot helps the boys make gains by choosing a random number that represents one member of the group and then another random integer to decide how many and another random integer to describe the activity. Try !workout for random or !meworkout for personal")
    }
    
    if (msg.content == '!meworkout') {
      let rand1 = Math.floor((Math.random() * 100) + 1);
      let rand3 = Math.floor((Math.random() * 6));

    msg.reply("you have to do " + rand1 + " " + activitylist[rand3])
  }
});

client.login(process.env.BOT_TOKEN)