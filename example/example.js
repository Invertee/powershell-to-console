const ps = require('powershell-to-console')

var params = {
  script : 'get-disk',
  executionPolicy: 'bypass',
  noProfile: true,
  PSCore : false,
  exitMessage : true
};

ps.script( params )

