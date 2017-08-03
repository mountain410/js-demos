// exports.world = function(){
// 	console.log('hello,world');
// }


function Hello(){
	var name;
	this.setName = function(n){
		name = n; 
	}
	this.sayHello = function(){
		console.log('Hello,' + name);
	}
}

module.exports = Hello;