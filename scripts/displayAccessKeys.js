function displayAccessKeys(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var links =document.getElementsByTagName("a");
	var akeys=new Array();
	for (var i = 0; i < links.length; i++) {
		if(!links[i].getAttribute("accesskey")) continue;
		var key =links[i].getAttribute("accesskey");
		var text =links[i].firstChild.nodeValue;
		akeys[key]=text;
	}
	var ulist =document.createElement("ul");
	for(key in akeys){
		var text=akeys[key];
		var str=key+" : "+text;
		var list=document.createElement("li");
		var list_text=document.createTextNode(str);
		list.appendChild(list_text);
		ulist.appendChild(list);
	}
	var header=document.createElement("h3");
	var header_text=document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(ulist);
}
addLoadEvent(displayAccessKeys);