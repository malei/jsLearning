jQuery(document).ready(function(){
	jQuery("button").click(function(){
		jQuery("px").text("jQuery Running!");
	});
});

var jq = jQuery.noConflict()

jQuery(document).ready(function(){
	jq("button").click(function(){
		jq("px2").text("jQuery Running, Tooo!");
	});
});

jq(document).ready(function() {
	jq(".ex .hide").click(function(){
		jq(this).parents(".ex").hide("slow");
	});
	jq(".hide").click(function(){
		//jq(".ex").hide("slow");
		jq(".ex").hide(1000);
	});
	jq(".show").click(function(){
		//jq(".ex").show("slow");
		jq(".ex").show(2000, showFinish);
	});
	jq(".toggle").click(function(){
		//jq(".ex").show("slow");
		jq(".ex").toggle(2000);
	});
	jq("#btfadein").click(function(){
		//jq(".ex").show("slow");
		//jq(".ex").toggle(2000);
		jq("#div1").fadeIn();
		jq("#div2").fadeIn("slow");
		jq("#div3").fadeIn(3000);
	});

	jq("#btfadeout").click(function(){
		//jq(".ex").show("slow");
		//jq(".ex").toggle(2000);
		jq("#div1").fadeOut();
		jq("#div2").fadeOut("slow");
		jq("#div3").fadeOut(3000);
	});

	jq("#btfadetoggle").click(function(){
		//jq(".ex").show("slow");
		//jq(".ex").toggle(2000);
		jq("#div1").fadeToggle();
		jq("#div2").fadeToggle("slow");
		jq("#div3").fadeToggle(3000);
	});

	jq("#btfadeto").click(function(){
		//jq(".ex").show("slow");
		//jq(".ex").toggle(2000);
		jq("#div1").fadeTo("slow",0.15);
		jq("#div2").fadeTo("slow",0.4);
		jq("#div3").fadeTo("slow",0.7);
	});

	jq(".flip").click(function(){
		//jq(".panel").slideDown("slow");
		//jq(".panel").slideUp("slow");
		jq(".panel").slideToggle("slow");
	});

	jq("#btanimate").click(function(){
		var div = jq("#animateDiv")
		div.animate({height:'300px',opacity:'0.4'},"slow");
		div.animate({width:'300px',opacity:'0.8'},"slow");
		div.animate({height:'100px',opacity:'0.4'},"slow");
		div.animate({width:'100px',opacity:'0.8'},"slow");
		div.animate({left:'100px'},"slow");
		div.animate({fontSize:'3em'},"slow");
	});
	jq("#btdom").click(function(){
		alert("txt:" + jq("#w3s").text());
		alert("html:" +  jq("#w3s").html());
		alert("val:" + jq("#w3s").val());
		alert("attr_href:" + jq("#w3s").attr("href"));
	});

	jq("#btcss").click(function(){
		jq("#cssDiv").addClass("important");
	});

	jq("#bttest").click( 
			function(){
				//jq("#test").load("aaa.txt");
				//
				//url = "http://localhost:8800"
				//url = "http://localhost:9000/index.html"
				url = "http://www.baidu.com"
				//url = "/aaa.txt"
				//var ret = jq.get(url)
				//console.log(ret)
				//jq.get(url, function(data, status) {
				//	alert("Data:" + data + "\nStatus:" + status);
				//	}
				//);
				htmlobj=jq.ajax({url:"url",async:false});
				jq("#httpDiv").html(htmlobj.responseText);


				//jq("#test").text("aaa.txt");
				//jq('#test').load('http://127.0.0.1:8800/');
			}
	);

});

function animateShowFinish() {
	alert("animate show Finished!")
}

function showFinish() {
	//document.write("</br>")
	//document.write("show Finished!")
	//alert("show Finished!")
	//window.open("http://www.baidu.com")
}


var xmlhttp;
function loadXMLDoc(method, url, func)
{
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = func 
	//xmlhttp.open(method,url,false);
	xmlhttp.open(method,url,true);
	//alert("loadXMLDoc");
	xmlhttp.send();
}

function ajaxFunc()
{
	//alert("hello ajax")
	func = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("ajaxDiv").innerHTML=xmlhttp.responseText;
		}
	}
	loadXMLDoc("GET", "/aaa.txt", func);
	//alert("hello ajax, too")
}

function showHint(str) {
	func = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		}
	}
	loadXMLDoc("GET", "/aaa.txt?s=" + str, func);
}

function showCustomer(str) {
	func = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			//document.getElementById("txtHint_list").innerHTML=xmlhttp.responseText;
			//document.getElementById('txtHint_list').innerHTML=xmlhttp.getAllResponseHeaders();
			document.getElementById('txtHint_list').innerHTML=xmlhttp.getResponseHeader('Last-Modified')
		}
	}
	loadXMLDoc("GET", "/aaa.txt?s=" + str, func);
}
