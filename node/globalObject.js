// 全局对象：_filename,dirname,setTimeout,clearTimeout,
// setInterval,clearInterval,process,console


console.log(__filename);	//脚本文件名 或者 模块文件路径
console.log(__dirname);		//脚本所在目录

//测试setTimeout方法的执行优先级
console.log('a');

//setTimeout函数会先挂起，等待其他语句执行完才执行
setTimeout(function(){
	console.log('b');
	num();
},0)

console.log('c');

function num() {
	console.log('d');
}

console.log('e');

// process: 描述当前Node.js 进程状态的全局对象
process.on('exit', function(code) {

  // 以下代码永远不会执行
	setTimeout(function() {
	  console.log("该代码不会执行");
	}, 0);
  console.log('退出码为:', code);
});
console.log("程序执行结束");


// 输出到终端
process.stdout.write('Hello, world!' + '\n');

// 通过参数读取
process.argv.forEach(function(val,index,array){
	console.log(index + ':' + val);
});

// 获取执行路径
console.log(process.execPath);

// 获取平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
