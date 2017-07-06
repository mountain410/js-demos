var router = require('./router');
var server1 = require('./server1');

server1.start(router.route)