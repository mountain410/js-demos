function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有缩略词
	var abbreviations = document.getElementsByTagName('abbr');
	if (abbreviations.length<1) return false;
	var defs = new Array();
	//遍历所有缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		if(abbreviations[i].childNodes.length<1) continue;
		var definition =abbreviations[i].getAttribute("title");
		var key = abbreviations[i].firstChild.nodeValue;
		defs[key]=definition;
	}
	//创建定义列表
	var list = document.createElement("dl");
	for(key in defs){
		var definition=defs[key];
		//创建定义标题
		var dtitle=document.createElement('dt');
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddsec=document.createElement("dd");
		var ddsec_text=document.createTextNode(definition);
		ddsec.appendChild(ddsec_text);
		//插入到定义列表
		list.appendChild(dtitle);
		list.appendChild(ddsec);
	}
	if(list.childNodes.length<1) return false;
	//创建标题
	var header =document.createElement("h2");
	var header_text=document.createTextNode("abbreviations");
	header.appendChild(header_text);
	//将标题插入页面主体
	document.body.appendChild(header);
	//将定义列表插入页面主体
	document.body.appendChild(list);
}

addLoadEvent(displayAbbreviations);

