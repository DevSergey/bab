var app = require('../app.js');
var logger = require('../logging.js');
exports.command = function(message) {
  message.mentions.users.map((user) => {
    var count = app.warnings.filter(function(x) { return x.id == user.id && !x.cleared }).length || 0;
    message.channel.sendMessage(`${user}, you have ${count} warnings.`).catch(function (error) {
      logger.error('Error sending #admin-log message.', error);
    });
  });
}
