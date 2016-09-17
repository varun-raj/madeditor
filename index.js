
var editor = document.getElementById("editor");
var iframe = document.getElementById("iframe");
var style = document.getElementById("style");

iframeDoc = iframe.contentDocument,
iframeBody = iframeDoc.body,
iframeHead = iframeDoc.head,

iframeStyle = document.createElement('style');

editor.oninput=function(){
	iframeBody.innerHTML = editor.value
}

style.oninput = function() {

	var newCSS = document.createTextNode(style.value);
	iframeStyle.innerHTML = "";
	iframeHead.innerHTML = "";
	
	iframeStyle.appendChild(newCSS);
  	iframeHead.appendChild(iframeStyle);
}
