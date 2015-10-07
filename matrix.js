// credit: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript

var cnvs = document.getElementById("matrix");
var ctx = cnvs.getContext("2d");
var msg = cnvs.getContext("2d");
 

//make canvas full screen
cnvs.height = window.innerHeight;
cnvs.width = window.innerWidth;

//display string
var words = 'under construction!';

//converting string into array
words = words.split("");

var font_size = 13;
var columns = cnvs.width/2; //# of columns

var drops = []; //array of drops - one per column
for(var x=0; x<columns; x++)
{
	drops[x] = 1; //1 = y coordinate of the drop, same for every drop initially
}

//show note bottom left corner.
msg.fillStyle="rgba(0,255,0,100)";
msg.font = "bold 15px arial";
msg.fillText("> XYZ UNDER CONSTRUCTION..", 10, window.innerHeight-10);


//drawing the words
function draw() {
	//form the canvas
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.fillRect(0,0, cnvs.width, cnvs.height);

	//green text
	ctx.fillStyle = "#0F0";
	ctx.font = font_size+"px arial";

	//looping drops Ϟ
	for(var i=0; i< drops.length; i++) {
		//grabs a random letter and puts it in text
		var text = words[Math.floor(Math.random()*words.length)]
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text,i*font_size,drops[i]*font_size); //fillText(text to fill, x-coordinate, y-coordinate)
		
		//reset raindrops back to the top of screen
		if(drops[i]*font_size > cnvs.height && Math.random()>0.9){
			drops[i]=0;
		}

		//increment y-coordinate
		drops[i]++;
	}
}

function resize_canvas(){
	if(cnvs.width < window.innerWidth){
		cnvs.width= window.innerWidth;
	}
	if(cnvs.height < window.innerHeight){
		cnvs.height = window.innerHeight;
	}
}

setInterval(draw,90);
