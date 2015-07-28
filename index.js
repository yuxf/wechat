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

app.use('/', wechat(config).text(function (message, req, res, next) {
  console.log(req.weixin);
  res.reply(
		  {
		    title: '你来我家接我吧',
		    description: '这是女神与高富帅之间的对话',
		    picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
		    url: 'http://nodeapi.cloudfoundry.com/'
		  }
	   );
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

