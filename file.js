var fs = require("fs");

// 读取文件

// 异步读取
fs.readFile('input.txt', function (err,data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("同步读取执行完毕。");	


// 异步打开文件
fs.open('input.txt', 'r+', function(err,fd){
	if (err) {
		console.log(err);
	}
	console.log(fd);
	console.log('文件打开成功');
});


// 异步获取文件信息
fs.stat('input.txt',function(err,stats){
	if (err) {
		console.log(err);
	}
	console.log('获取文件信息成功');
	console.log(stats);

	// 检测文件类型
	console.log('是否为文件(file)？' + stats.isFile());
	console.log('是否为目录(dir)？' + stats.isDirectory());
});

//异步写入文件,这里会覆盖之前已有的数据！！！
fs.writeFile('input.txt','这是我要写入的数据',function(err){
	if (err) {
		console.log(err);
	}
	console.log('写入数据成功');
	console.log('--------这是分割线--------');
	console.log('读取写入数据');
	fs.readFile('input.txt',function(err,data){
		if (err) {
			console.log(err);
		}
		console.log('写入的数据是：' + data.toString());
	});
});