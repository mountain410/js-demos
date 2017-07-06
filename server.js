var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function(request,response){
	//解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	//输出请求头
	console.log("Request for" + pathname + " received.");
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.log(err);
			//状态码404 ：NOT FOUND
			response.writeHead(404,{'Content-type':'text/html'});
		}else{
			
			//发送http头部
			//http类型值：200 : OK
			//内容类型：text/html
			response.writeHead(200,{'Content-type':'text/html'});

			//响应文件内容
			response.write(data.toString());
		}
		//发送响应数据
		response.end();
	});
	
}).listen(8888);

console.log('Server running in http://127.0.0.1:8888/');