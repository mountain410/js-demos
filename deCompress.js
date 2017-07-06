var fs = require('fs');
var zlib = require('zlib');
	
// 解压文件 input.txt.gz 为 input.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt'));

console.log('解压程序完成');