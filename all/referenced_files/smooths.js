function stress()
{
	document.getElementById('stress-1').style.color="#dcdcdc";
	document.getElementById('stress-2').style.color="#dcdcdc";
	document.getElementById('stress-3').style.borderColor="#c1392d";
}
function unstress()
{
	document.getElementById('stress-1').style.color="#787878";
	document.getElementById('stress-2').style.color="#787878";
	document.getElementById('stress-3').style.borderColor="#787878";
}
function stress2()
{
	document.getElementById('stress-4').style.color="#dcdcdc";
	document.getElementById('stress-5').style.color="#dcdcdc";
	document.getElementById('stress-6').style.borderColor="#c1392d";
}
function unstress2()
{
	document.getElementById('stress-4').style.color="#787878";
	document.getElementById('stress-5').style.color="#787878";
	document.getElementById('stress-6').style.borderColor="#787878";
}
function moveto(x)
{
	if(x==1)
	{
		window.location.hash = "#index-1";
		document.getElementById('nav-p1').style.opacity=1;
		document.getElementById('nav-p2').style.opacity=0;
		document.getElementById('nav-p3').style.opacity=0;
		document.getElementById('nav-p4').style.opacity=0;
		document.getElementById('nav-p5').style.opacity=0;
		document.getElementById('nav-btimg-1').src= "images/deep-gray.png";
		document.getElementById('nav-btimg-2').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-3').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-4').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-5').src= "images/litte-gray.png";
	}
	else if(x==2)
	{
		window.location.hash = "#index-2";
		document.getElementById('nav-p1').style.opacity=0;
		document.getElementById('nav-p2').style.opacity=1;
		document.getElementById('nav-p3').style.opacity=0;
		document.getElementById('nav-p4').style.opacity=0;
		document.getElementById('nav-p5').style.opacity=0;
		document.getElementById('nav-btimg-1').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-2').src= "images/deep-gray.png";
		document.getElementById('nav-btimg-3').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-4').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-5').src= "images/litte-gray.png";
	}
	else if(x==3)
	{
		window.location.hash = "#index-3";
		document.getElementById('nav-p1').style.opacity=0;
		document.getElementById('nav-p2').style.opacity=0;
		document.getElementById('nav-p3').style.opacity=1;
		document.getElementById('nav-p4').style.opacity=0;
		document.getElementById('nav-p5').style.opacity=0;
		document.getElementById('nav-btimg-1').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-2').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-3').src= "images/deep-gray.png";
		document.getElementById('nav-btimg-4').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-5').src= "images/litte-gray.png";
	}
	else if(x==4)
	{
		window.location.hash = "#index-4";
		document.getElementById('nav-p1').style.opacity=0;
		document.getElementById('nav-p2').style.opacity=0;
		document.getElementById('nav-p3').style.opacity=0;
		document.getElementById('nav-p4').style.opacity=1;
		document.getElementById('nav-p5').style.opacity=0;
		document.getElementById('nav-btimg-1').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-2').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-3').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-4').src= "images/deep-gray.png";
		document.getElementById('nav-btimg-5').src= "images/litte-gray.png";
	}
	else if(x==5)
	{
		window.location.hash = "#index-5";
		document.getElementById('nav-p1').style.opacity=0;
		document.getElementById('nav-p2').style.opacity=0;
		document.getElementById('nav-p3').style.opacity=0;
		document.getElementById('nav-p4').style.opacity=0;
		document.getElementById('nav-p5').style.opacity=1;
		document.getElementById('nav-btimg-1').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-2').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-3').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-4').src= "images/litte-gray.png";
		document.getElementById('nav-btimg-5').src= "images/deep-gray.png";
	}
}

function show_detail(x,y)
{
	if(x==1)
	{
		document.getElementById('detail-icon-show-1').style.opacity=1;
		y.style.top="40%";
		y.style.borderColor="rgb(180,180,180)";
	}
	if(x==2)
	{
		document.getElementById('detail-icon-show-2').style.opacity=1;
		y.style.top="40%";
		y.style.borderColor="rgb(180,180,180)";
	}
	if(x==3)
	{
		document.getElementById('detail-icon-show-3').style.opacity=1;
		y.style.top="40%";
		y.style.borderColor="rgb(180,180,180)";
	}
	if(x==4)
	{
		document.getElementById('detail-icon-show-4').style.opacity=1;
		y.style.top="40%";
		y.style.borderColor="rgb(180,180,180)";
	}
}
function hide_detail(x,y)
{
	if(x==1)
	{
		document.getElementById('detail-icon-show-1').style.opacity=0;
		y.style.top="48%";
		y.style.borderColor="#f0f1ef";
	}
	if(x==2)
	{
		document.getElementById('detail-icon-show-2').style.opacity=0;
		y.style.top="48%";
		y.style.borderColor="#f0f1ef";
	}
	if(x==3)
	{
		document.getElementById('detail-icon-show-3').style.opacity=0;
		y.style.top="48%";
		y.style.borderColor="#f0f1ef";
	}
	if(x==4)
	{
		document.getElementById('detail-icon-show-4').style.opacity=0;
		y.style.top="48%";
		y.style.borderColor="#f0f1ef";
	}
}
function changetoall()
{
	var all=document.getElementById('left-all');
	all.style.color="#dcdcdc";
	all.style.borderColor="#c1392d";
	all.style.background="#c1392d";

	var ani=document.getElementById('right-ani');
	ani.style.color="#787878";
	ani.style.borderColor="#787878";
	ani.style.background="rgb(50,50,50)";
}
function changetoani()
{
	var ani=document.getElementById('right-ani');
	ani.style.color="#dcdcdc";
	ani.style.borderColor="#c1392d";
	ani.style.background="#c1392d";

	var all=document.getElementById('left-all');
	all.style.color="#787878";
	all.style.borderColor="#787878";
	all.style.background="rgb(50,50,50)";
}
