window.onload = function init()

{	
	Display()
}
function Screen(Time,n)
{	

	var scale = 1;
	var canvas = document.getElementById("myCanvas");
	width = Math.floor(window.innerWidth / scale);
	height = Math.floor(window.innerHeight / scale);
	canvas.width = width * scale-4;
	canvas.height = height * scale-4;
	
	Display()
	
}

function Display()
{
	l = 1
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');
	for (let p = 0; p < width/l; p++) 
	{	
		for (let q = 0; q < height/l; q++)
		{
			P = p*l
			Q = q*l	
			Find(P,Q)
			
			ctx.strokeStyle = `rgb(${Math.floor(color)},${Math.floor(color)},${Math.floor(color)})`;

		
			ctx.beginPath();
			ctx.moveTo(P,Q);
			ctx.lineTo(P+1,Q+1);
			ctx.stroke();
			
		}
	}
}


function Find(P,Q)
{
	x = 0
	y = 0
	x2 = 0
	y2 = 0
	cx = (P-width*.5)/300
	cy = (-1*(Q-height*.5))/300
	i = 0
	
	while (x2 + y2 <= 4 & i < 200) 
	{
		y = 2*x*y + cy
		x = x2 - y2 + cx
		x2 = x*x
		y2 = y*y
		i = i + 1
	}
	color = i*(255/200)	
}