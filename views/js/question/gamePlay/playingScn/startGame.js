var gameStart = true;
var gsCount = 0;
var noPlay = false;

function startGame() {
	noPlay = true;
	gsCount++;

	if (gsCount<150) 
	{
		ctx.save();//fondo oscuro
		ctx.globalAlpha=0.4;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();

		ctx.save();
		ctx.drawImage(lvlBox, canvas.width/2-(600/2), canvas.height/2-(250/2), 600, 250);
		ctx.textAlign = "center";

		ctx.fillStyle = "black";
		ctx.font ="55pt calibri";
		ctx.fillText("Question", canvas.width/2 + 2, canvas.height/2 - 20 + 2);
		ctx.font ="45pt calibri";
		ctx.fillText(1, canvas.width/2 + 2, canvas.height/2 + 70 + 2);

		ctx.fillStyle = "white";
		ctx.font ="55pt calibri";
		ctx.fillText("Question", canvas.width/2, canvas.height/2 - 20);
		ctx.font ="45pt calibri";
		ctx.fillText(1, canvas.width/2, canvas.height/2 + 70);
		ctx.restore();

		lighting();
	}
	else
	{
		gameStart = false; 
		noPlay = false;
	}
}