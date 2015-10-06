var cnvs = document.getElementById("matrix");
var ctx = cnvs.getContext("2D");
var columns = cnvs.width/10; //# of columns
var drops = []; //array of drops - one per column
for(var x=0; x<columns: x++)
{
	drops[x] = 1; //1 = y coordinate of the drop, same for every drop initially
}


//make canvas full screen
cnvs.height = window.innerHeight;
cnvs.width = window.innerWidth;

//display string
var words = "under construction";

//converting string into array
words = words.split("");


//drawing the words
function draw() {
	//form the canvas
	ctx.fillStyle = '(0,0,0,1)';
	ctx.fillRect(0,0,cnvs.width,cnvs.height);

	//green text
	ctx.fillStyle = "#0F0";
	ctx.font = "10px arial" 

	//looping drops Ϟ
	for(var i=0; i< drops.length; i++) {
		var text = words[Math.floor(Math.random()*words.length)]
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text,i*10,drops[i]*10);
	}
}

setInterval(draw,90);
