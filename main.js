
document.write("<h1>This is for me or that</h1>");
document.write("<p>This is great for that</p>");

function myFunction()
{
	document.getElementById("demo").innerHTML="My First JavaScript Function";
	document.getElementById("demoa").innerHTML = add(1, main);
}

var x = 5
var y = x + 5
console.log(x);
console.log("y:", y);

var pi = 3.14;
var name = "Bill Gates";
document.write(pi + "<br>");
document.write(name + "<br>");

var varname;
document.write(varname + "<br>");


var cars=new Array();
cars[0]="Audi";
cars[1]="BMW";
cars[2]="Volvo";

document.write(cars + "<br>");

var person={firstname:"Bill", lastname:"Gates", id:5566};

document.write(person + "<br>");

console.log("person", person);

document.write("id:" + person.id + "<br>");
document.write("lastname:" + person["lastname"] + "<br>");

var txt = "Hello";
document.write("txt.length:" + txt.length + "<br>");
document.write("txt:" + txt.toUpperCase() + "<br>");
document.write("add(1, 3):" + add(1, 3) + "<br>");

// 这个应该是访问范围的问题，无法search到
//document.getElementById("demoa").innerHTML = "sdfdf";

function add(x , y ) {
	return x + y;
}


var x = ""
var time = 10
if (time<10) {
	x="Good morning";
}
else if (time<20) {
	x="Good day";
} else {
	x="Good evening";
}

var day=new Date().getDay();
switch (day)
{
	case 0:
		x="Today it's Sunday";
		break;
	case 1:
		x="Today it's Monday";
		break;
	case 2:
		x="Today it's Tuesday";
		break;
	case 3:
		x="Today it's Wednesday";
		break;
	case 4:
		x="Today it's Thursday";
		break;
	case 5:
		x="Today it's Friday";
		break;
	case 6:
		x="Today it's Saturday";
		break;
}

document.write("x:", x)

cars=["BMW", "Volvo", "Saab", "Ford"];
for (var i=0; i<cars.length; i++) {
	document.write(cars[i] + "<br>");
}

document.write("hello lua")


function forfun () {
	var x = "";
	for (var i = 0; i < 5; i++ ) {
		x = x + "The number is " + i + "<br>"
	}
	document.getElementById("demo").innerHTML = x;
}

document.write("<br>")

var person={fname:"John",lname:"Doe",age:25};
var txt = ""
for (x in person) {
	txt=txt + " " + person[x];
}

document.write(txt)
	document.write("<br>")

	cars=["BMW","Volvo","Saab","Ford"];
list:
{
	document.write(cars[0] + "<br>");
	document.write(cars[1] + "<br>");
	document.write(cars[2] + "<br>");
	break list;
	document.write(cars[3] + "<br>");
	document.write(cars[4] + "<br>");
	document.write(cars[5] + "<br>");
}

document.write(txt)
	document.write("<br>")

function validate_required(field,alerttxt)
{
	with (field)
	{
		if (value==null||value=="") {
			alert(alerttxt);
			return false;
		} else {
			return true;
		}
	}
}

function validate_form(thisform)
{
	with (thisform)
	{
		if (validate_required(email,"Email must be filled out!")==false) {
			email.focus();
			return false;
		}
	}
}

do {
	x=x + "The number is " + i + "<br>";
	i++;
}
while (i<5);

cars=["BMW","Volvo","Saab","Ford"];
var i=0;
while (cars[i]) {
	document.write(cars[i] + "<br>");
	i++;
}

function trycatchFunc()
{
	try {
		var x=document.getElementById("demotrycatch").value;
		if(x=="")    throw "empty";
		if(isNaN(x)) throw "not a number";
		if(x>10)     throw "too high";
		if(x<5)      throw "too low";
	} catch(err) {
		var y=document.getElementById("mess");
		y.innerHTML="Error: " + err + ".";
	}
}


document.write(Date());

person = new Object();
person.name = "bill";
person.lastname = "gates";
person.age = 56;
person.eyecolor = "blue";

console.log("person:", person)


function DoPerson(firstname, lastname, age, eyecolor) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.eyecolor = eyecolor;
	this.changeName = changeName;

	function changeName (name) {
		this.lastname = name;
	}
}

var her = new DoPerson("bill", "gates", 56, "bluexdxxxx")
console.log("her:", her);
her.changeName ("fuck her");
console.log("her:", her);

var txt = ""
for (x in her) {
	txt = txt + her[x];
}
console.log("txt:", txt)


var pi = 3.14
var x = 0377
var z = 0xFF


var pattern = new RegExp("e", "g")
var x = ""
do {
	x =  pattern.exec("ksdjlfjdsfljdsfjdsfeeeej");
	console.log("x:", x);
} while(x != null);

var pattern = new RegExp("e")
x =  pattern.test("ksdjlfjdsfljdsfjdsfeeeej");
console.log("x:", x);
pattern.compile("x")
x =  pattern.test("ksdjlfjdsfljdsfjdsfeeeej");
console.log("x:", x);

//window.open("www.baidu.com");

//document.write("width：", screen.availWidth);
//document.write("height：",screen.availHeight);

console.log(screen.availWidth);
console.log(screen.availHeight);

document.write("<br>");
document.write(location.href);
document.write("<br>");
document.write(location.pathname);
//window.location.assign("http://www.baidu.com");
//
//window.location.assign("sex.jpg");
//window.history.back();

//var r=confirm("Press a button!");
//if (r==true){
//	alert("You pressed OK!");
//} else {
//	alert("You pressed Cancel!");
//}

//document.write("<br>");
//var name=prompt("Input your name:","Bill Gates")
//if (name!=null && name!="") {
//	document.write("hello!" + name + " How are u today?")
//}

//document.write("<br>");
//var t=setTimeout("document.write('5s')",5000)


function getCookie(c_name)
{
	if( document.cookie.length > 0 )
	{ 
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length + 1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end == -1) 
				c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie=c_name + "=" + escape(value)+ ((expiredays == null) ? "" : "; expires="+exdate.toGMTString());
}

function checkCookie()
{
	username = getCookie('username');
	if( username != null && username != "" ) {
		alert('Welcome again '+username+'!');
	} else {
		username = prompt('Please enter your name:',"");
		if ( username != null && username != "") {
			setCookie('username',username,365);
		}
	}
}

//$("#h01").html("Hello jQuery");

console.log("7.25:", Math.round(7.25))

document.write("<br>");
document.write("sjdlfjdlfd:", Math.round(7.25), "<br>");
document.write("max(2,4):", Math.max(2,4), "<br>");

//window.open("www.baidu.com", "win2");
window.status = "put your message here"

//$("p").css("background-color","red");

