let save=false;
let sSoung={i:0, l:1};
function scoreBoard()
{
	ctx.save();
	ctx.globalAlpha=0.5;
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, canvas.width,canvas.height);
	ctx.restore();

	ctx.save();
	ctx.drawImage(gameOver, canvas.width/2-200, canvas.height/2-200, 400,400);
	ctx.restore();

	ctx.save();
	ctx.fillStyle="#81cfcf";
	ctx.font="30pt Calibri";
	ctx.textAlign="left";
	ctx.fillText("score: ", canvas.width/2-120, canvas.height/2-20);
	ctx.fillText("best: ", canvas.width/2-120, canvas.height/2+50);
	ctx.fillText(sce ,canvas.width/2+45, canvas.height/2-20);
	ctx.fillText(record, canvas.width/2+45, canvas.height/2+50);
	ctx.restore();

	SBbutton();



	if (!save && score >= record) 
	{
		document.getElementById("score").innerHTML = sce;
		ajaxPost();
		save=true;

		if (sSoung.i < sSoung.l) {
			sSoung.i++;
			sound.gameOver2.play();
		}

	}else if(!save){
		if (sSoung.i < sSoung.l) {
			sSoung.i++;
			sound.gameOver1.play();
		}
	}
}
function SBbutton()
{
	btnSB.img= mPauseBtn;
	btnSB.draw();
	btnSB.clicked();
	btnSB.event = () =>{
		btnChange.btnG_M=true;
		restart();
	}
	btnSB.width=130;
	btnSB.height=70;
	btnSB.x=canvas.width/2-btnSB.width/2;
	btnSB.y=canvas.height/2-btnSB.height/2+150;

	btnSB.iwidth=btnSB.img.width/2;
	btnSB.iheight=btnSB.img.height/2;
	btnSB.ix=btnSB.img.width/2;
	btnSB.iy=btnSB.img.height/2;
	btnSB.stepX=0;
	//btnSB.stepY=0;
	btnSB.DRstp=false;
}