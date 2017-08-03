
// 从流中读取数据
var fs = require('fs');
var data = '';

// 创建可读流
var readStream = fs.createReadStream('input.txt');

// 设置编码为utf-8
readStream.setEncoding('UTF8');

// 处理流事件：data, end, error
readStream.on('data',function(chunk){
	data += chunk;
});

readStream.on('end',function(){
	console.log(data);
	console.log('test');
});

readStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕1');


// 写入流
var data1 = '这是写入流的文本。';

// 创建一个写入流，写入到'output.txt'中。会自动创建一个output.txt文件
var writeStream = fs.createWriteStream('output.txt');

// 使用UTF8写入文件
writeStream.write(data1,'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件：data, end, error
writeStream.on('finish',function(){
	console.log('写入完成');
});

writeStream.on('error',function(err){
	console.log(err);
});

console.log('程序执行完成2');


// 管道流
var fs = require('fs');

var readStream1 = fs.createReadStream('input1.txt');

var writeStream1 = fs.createWriteStream('output1.txt');

// 管道写入操作
// 读取 input1.txt 内容写入 output1.txt文件
readStream1.pipe(writeStream1);

console.log('程序执行完成3'); 

