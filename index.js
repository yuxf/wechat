var wechat = require('./lib/wechat');
// 等待回复
wechat.List = require('./lib/list');
// 事件
wechat.Event = require('./lib/events');

module.exports = wechat;

// ===========

TOKEN = "feiyuitravel";

/*
var config = {
  token: TOKEN,
  appid: 'wx5d34f7a9cb77d517',
  encodingAESKey: '5FLR9cvgrcA4XdaUA1KffSAlZ058bqXHVCigcEzcxij'
};
*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.query());
app.use('/', wechat(TOKEN, function (req, res, next) {
  console.log(req.weixin);
  res.reply({
      content: 'hehe',
      type: 'text'
    });
}));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

