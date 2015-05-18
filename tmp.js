function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","/aaa.txt",false);
	xmlhttp.send();
	document.getElementById("ajaxDiv").innerHTML=xmlhttp.responseText;
}
<div id="ajaxDiv"><h2>Let AJAX change this text</h2></div>
<button type="button" onclick="loadXMLDoc()">Ajax change content</button>
