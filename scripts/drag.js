function allowDrop(e){
	e.preventDefault();
}

function drag(e){
	e.dataTransfer.setData("Text",e.target.id);
}

function drop(e){
	e.preventDefault();
	var data =e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(data));
}