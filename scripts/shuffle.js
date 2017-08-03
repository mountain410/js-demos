//数组乱序输出 
var a1 = [1,2,3,4,5]; 
var a2 = [6,8,9,7,5,3,4,2,1];

// 1. Math.random() & splice()
function shuffle1(a){
	var b = [];
	while (a.length) {
		var index = Math.floor(Math.random()*a.length);
		b.push(a[index]);
		a.splice(index,1);
	}
	return b;
}

// 2. Math.random()
function shuffle2(a){
	return a.concat().sort(function(){
		return Math.random() - 0.5;
	})
}

console.log(shuffle1(a1));
console.log(shuffle2(a2));