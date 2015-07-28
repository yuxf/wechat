var wechat = require('./lib/wechat');
// 等待回复
wechat.List = require('./lib/list');
// 事件
wechat.Event = require('./lib/events');

module.exports = wechat;

// ===========

var config = {
  token: 'feiyuitravel',
  appid: 'wx5d34f7a9cb77d517',
  encodingAESKey: '5FLR9cvgrcA4XdaUA1KffSAlZ058bqXHVCigcEzcxij'
};

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.query());

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var content = [
	[
                  {
                    title: 'ukulili',
                    description: '这是今天晚饭前的娱乐',
                    picurl:'http://img6.douban.com/lpic/s27284878.jpg', 
                    url: 'https://en.wikipedia.org/wiki/Ukulele'
                  }
        ],
	[
		  {
                    title: '湾区好室友',
                    description: '好室友连接地球and火星人',
                    picurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ukulele1_HiRes.jpg/138px-Ukulele1_HiRes.jpg',
                    url: 'http://test-haoshiyou.herokuapp.com/'
                  }
	]
]

app.use('/', wechat(config).text(function (message, req, res, next) {
  console.log(req.weixin);
  res.reply(content[Math.floor(Math.random() * content.length)]);
}).image(function (message, req, res, next) {

}).voice(function (message, req, res, next) {

}).video(function (message, req, res, next) {

}).shortvideo(function (message, req, res, next) {

}).location(function (message, req, res, next) {

}).link(function (message, req, res, next) {

}).event(function (message, req, res, next) {

}).device_text(function (message, req, res, next) {

}).device_event(function (message, req, res, next) {

}).middlewarify()
);

