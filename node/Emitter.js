
var events = require('events');
var EventEmitter = events.EventEmitter;
var eventEmitter = new EventEmitter();

var listener1 = function listener1(){
	console.log('监听器 listener1 执行');
};

var listener2 = function listener2(){
	console.log('监听器 listener2 执行');
};

eventEmitter.addListener('connection',listener1);

eventEmitter.on('connection',listener2);

// 取得事件 connection 上绑定的监听器
var eventListeners = EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听 connection 事件');

eventEmitter.emit('connection');

// 移除监听器 connection 事件绑定的 listener1 函数
eventEmitter.removeListener('connection',listener1);

var eventListeners = EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听 connection 事件');

eventEmitter.emit('connection');


console.log('程序执行完毕');