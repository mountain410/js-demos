// Buffer 类是随 Node 内核一起发布的核心库，该类用来创建一个专门存放二进制数据的缓存区

// 创建长度为10的Buffer实例
// var buf = new Buffer(10);

// 给定数组创建 Buffer 实例
var buf1 = new Buffer([10,20,30,40,50]);

// 通过一个字符串创建 Buffer 实例
var buf2 = new Buffer('This is a string ','utf-8');

var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);


// 字符输出：toString()
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf-8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
console.log(buf.toJSON());								//输出JSON对象
console.log(buf1.toJSON());	


// 合并缓存区：concat()
var buf3 = Buffer.concat([buf,buf2]);		//注意这里的concat的格式，Buffer.concat([buf1,buf2])。
console.log('concat的内容：',buf3.toString());

// 比较：compare返回值为-1,0,1
var buf4 = buf1.compare(buf2);
console.log('compare的输出：' ,buf4);

// 拷贝：copy()
var buffer5 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer6 = new Buffer(5);
buffer5.copy(buffer6);			//buffer6复制了buffer5里面的内容
console.log("buffer6 content: " + buffer6.toString());

// 剪切：slice() 原来的不变
var buffer7 = new Buffer('runoob');
// 剪切缓冲区
var buffer8 = buffer7.slice(0,2);
console.log("buffer8 content: " + buffer8.toString());


var buffer9 = new Buffer('www.runoob.com');
//  缓冲区长度
console.log("buffer9 length: " + buffer9.length); //存储的是二进制码，计算的是字符串的长度
