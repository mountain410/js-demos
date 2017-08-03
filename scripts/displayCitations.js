function displayCitations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有引用
	var blockquotes =document.getElementsByTagName("blockquote");
	//遍历引用
	for (var i = 0; i < blockquotes.length; i++) {
		var citation=blockquotes[i].getAttribute("cite");
		//如果没有cite属性，则跳过这次，继续循环
		if(!citation) continue;
		//取得blockquotes的所有子元素节点
		var quote_children=blockquotes[i].getElementsByTagName("*");
		//如果没有子元素节点，则跳出此次，继续下次循环
		if(quote_children.length<1) continue;
		//取引用的最后一个子元素节点
		var elem = quote_children[quote_children.length-1];
		//创建链接元素，并赋予cite属性值
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",citation);
		link.setAttribute("target","_blank");
		//创建sup元素，将链接元素放进去
		var sup=document.createElement("sup");
		sup.appendChild(link);
		//将sup元素插入文档
		elem.appendChild(sup);
	}
}

addLoadEvent(displayCitations);
