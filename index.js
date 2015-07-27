var wechat = require('./lib/wechat');
// 等待回复
wechat.List = require('./lib/list');
// 事件
wechat.Event = require('./lib/events');

module.exports = wechat;

TOKEN = "feiyuitravel";

var express = require('express');
var crypto = require('crypto')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  if(checkSignature(request)) {
    var echoString = request.query.echostr;
    response.send(echoString);
  }
  else {
    response.send("Hello");
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function checkSignature(req)
{
  var signature = req.query.signature;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;  
  
  var token = TOKEN;
  var tmpArr = [token, timestamp, nonce];
  console.log(tmpArr);
  var sha1Str = sha1(tmpArr.sort().concat(""));
  console.log(sha1Str);

  if( sha1Str.localeCompare(signature) == 0 ){
    return true;
  }else{
    return false;
  }
}

function sha1(input){
  return crypto.createHash('sha1').update(JSON.stringify(input)).digest('hex')
}
