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

