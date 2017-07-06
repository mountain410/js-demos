var util = require('util');

function Person(){
	this.name = 'libai';
	this.toString = function(){
		return this.name;
	}
}

var obj = new Person;
console.log('1',util.inspect(obj));
console.log('2',util.inspect(obj,true));

// util 工具还有inherits, isArray, isDate, isRegExp, isError