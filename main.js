var child_process = require('child_process');
var TelegramBot = require('node-telegram-bot-api');

var token = '282189190:AAGGenqn34KTViEqv3kqTNYH6h0_4mS04U8';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});


bot.onText(/\/df/, function (msg, match) {
   // the user Id
   var fromId = msg.from.id;
   
   if(msg.from.id == 24035642){
      df_command(fromId);
   } else {
      bot.sendMessage(fromId, "Fella, I don't know you");
   }
});

function df_command(toId){
   child_process.exec('df -h', function(error, stdout, stderr){
      console.log(stdout);
      bot.sendMessage(toId, 'Hey Dario!: ' + stdout);
   });
}
