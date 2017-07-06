// 引入events模块
var events = require('events');
// 创建eventsEmitter对象，是events.EventEmitter()的实例
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected(){
	console.log('1.连接成功');
	
	// 触发事件'data_receive'
	eventEmitter.emit('data_receive');	
}

// 绑定 connection 事件
eventEmitter.on('connection',connectHandler);

// 使用匿名函数绑定 data_receive 事件
eventEmitter.on('data_receive',function(){
	console.log('2.数据连接成功');
});

// 触发connection 事件
eventEmitter.emit('connection');

console.log('3.程序执行完毕');