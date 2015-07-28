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

var connect = require('connect');
var app = connect();

app.listen((process.env.PORT || 5000), function() {
  console.log('Node app is running on port', app.get('port'));
});

var content = [
	[
                  {
                    title: 'ukulele',
                    description: '这是今天晚饭前的娱乐',
                    picurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ukulele1_HiRes.jpg/138px-Ukulele1_HiRes.jpg', 
                    url: 'https://en.wikipedia.org/wiki/Ukulele'
                  }
        ],
	[
		  {
                    title: '湾区好室友',
                    description: '好室友连接地球and火星人',
                    picurl: 'http://img6.douban.com/lpic/s27284878.jpg',
                    url: 'http://test-haoshiyou.herokuapp.com/'
                  }
	],
        [
                  {
                    title: '网球拍哪家强',
                    description: '我想买个网球拍好好学下网球',
                    picurl: 'http://cdn.tennis.com/uploads/img/2012/08/13/2012_08_13_racquet/article.jpeg',
                    url: 'http://www.tennis.com/shop/2012/02/new-to-tennis-a-brief-racquet-primer-for-beginners/34762/#.VbZGxOhViko'
                  }
        ]
]

var List = wechat.List;
List.add('今天的榜单', [
  ['回复{1}试试', function (info, req, res) {
    res.reply(content[0]);
  }],
  ['回复{2}试试', function (info, req, res) {
    res.reply(content[1]);
  }],
  ['回复{3}试试', function (info, req, res) {
    res.reply(content[2]);
  }]
]);

app.use(connect.query());
app.use(connect.cookieParser());
app.use(connect.session({secret: 'keyboard cat', cookie: {maxAge: 60000}}));

app.use('/', wechat(config).text(function (message, req, res, next) {
  console.log(req.weixin);
  if (message.Content === 'list') {
    res.wait('view');
  } else {
    // 中断等待回复事务
    res.nowait('不来瞎玩的，算了不跟你玩了');
  }
  res.reply(content[Math.floor(Math.random() * content.length)]);
}).image(function (message, req, res, next) {
  res.reply('image');
}).voice(function (message, req, res, next) {
  res.reply('voice');
}).video(function (message, req, res, next) {
  res.reply('video');
}).shortvideo(function (message, req, res, next) {
  res.reply('shortvideo');
}).location(function (message, req, res, next) {
  res.reply('location');
}).link(function (message, req, res, next) {
  res.reply('link');
}).event(function (message, req, res, next) {
  res.reply('event');
}).device_text(function (message, req, res, next) {
  res.reply('device_text');
}).device_event(function (message, req, res, next) {
  res.reply('device_event');
}).middlewarify()
);

