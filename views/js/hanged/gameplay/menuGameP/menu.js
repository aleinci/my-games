var mDraw = true;
var mDrawClick =false;
var mDP= 0;//posicion
var mBtn ={
	x:513.5,
	y:235,
	width:20,
	height:70,
}
var hudPos ={
	xS:10,
	xC:220,
	xL:390,
	xI:470,
}
let lColor={
	r:0, r2:0,
	g:0, g2:0,
	b:0, b2:0,
	speed:5,
}
let cColor={
	r:0, r2:0,
	g:0, g2:0,
	b:0, b2:0,
	speed:5,
}

function drawM() 
{
	if (lColor.r>lColor.r2) {lColor.r-=lColor.speed;}
	else{lColor.r+=lColor.speed;}

	if (lColor.g>lColor.g2) {lColor.g-=lColor.speed;}
	else{lColor.g+=lColor.speed;}

	if (lColor.b>lColor.b2) {lColor.b-=lColor.speed;}
	else{lColor.b+=lColor.speed;}

	if (cColor.r>cColor.r2) {cColor.r-=cColor.speed;}
	else{cColor.r+=cColor.speed;}

	if (cColor.g>cColor.g2) {cColor.g-=cColor.speed;}
	else{cColor.g+=cColor.speed;}

	if (cColor.b>cColor.b2) {cColor.b-=cColor.speed;}
	else{cColor.b+=cColor.speed;}

	//moveM();
	var x=550;
	

	ctx.save();
	//ctx.drawImage(barMenu,0,0,canvas.width, 70);
	ctx.drawImage(ui_box, 158, 0, 162, 35,//score
		6,28,162, 35);

	ctx.drawImage(ui_box, 0, 0, 108, 35,//combo
		209,28,108, 35);

	ctx.drawImage(ui_box, 108, 0, 50, 35,//life
		382,28,50, 35);

	ctx.drawImage(ui_box, 158, 0, 162, 35,//incorrect
		458,28,162, 35);
	ctx.restore();

	/////////////////////////////////////////////////////

	ctx.save();
	ctx.fillStyle="black";
	ctx.textAlign="left";

	//TITULOS
	ctx.font= "20pt Calibri";
	/*ctx.fillText("Combo",	 x + mDP + 100,	 50);
	ctx.fillText("Score",	 x + mDP + 100,	 120);
	ctx.fillText("Life", 	 x + mDP + 100,	 190);
	ctx.fillText("incorrect",x + mDP + 100,	 260);*/
	ctx.fillStyle="#78b162";
	ctx.fillText("Score",	 hudPos.xS,	 25);

	//ctx.fillStyle="rgb("+cColor.r+","+cColor.g+","+cColor.b+")";
	ctx.fillText("Combo",	 hudPos.xC,	 25);

	//ctx.fillStyle="rgb("+lColor.r+","+lColor.g+","+lColor.b+")";
	ctx.fillText("Life", 	 hudPos.xL,	 25);

	
	ctx.fillText("incorrect",hudPos.xI,	 25);




	//sub
	ctx.font= "25pt Calibri";
	
	ctx.fillStyle="#78b162";
	ctx.fillText(sce, 				10,	 55);


	//ctx.fillStyle="rgb("+cColor.r+","+cColor.g+","+cColor.b+")";
	ctx.fillText("x "+combo, 		220, 55);

	//ctx.fillStyle="rgb("+lColor.r+","+lColor.g+","+lColor.b+")";
	ctx.fillText(life,				390, 55);

	//ctx.fillStyle="black";
	ctx.fillText(incorrect, 470, 55);

	ctx.restore();


	start();
}

function moveM()
{
	
	//mover menu
	if (mDraw && mDP>0)
	{
		mDP-=30;
		if(mDP<0){mDP=0;}
	}

	if (!mDraw && mDP<266) {
		mDP+=30;
		if(mDP>266){mDP=266;}
	}
	//activar/desactivar menu
	

	if (cX > mBtn.x &&
		cX < mBtn.x + mBtn.width &&
		cY > mBtn.y &&
		cY < mBtn.y + mBtn.height && mouse) 
	{
		mDrawClick = true;
	}
	if (mDrawClick && !mouse) 
	{
		mDraw = !mDraw;
		mDrawClick=false;
	}


	mBtn.x=514 + mDP;
}


function start()
{
	btnst.img=pauseBtn;
	btnst.draw();
	btnst.x = canvas.width-65;
	btnst.y = 5;
	btnst.width = 60;
	btnst.height = 60;
	btnst.ix= btnst.img.width/3;
	btnst.iwidth= btnst.img.width/3;
	btnst.iheight= btnst.img.height;
	btnst.stepX=0;
	btnst.DRstp=true;

	btnst.event =()=>{btnChange.btnG_P=true; btnst.stepX=2;}
	if (life>0) {btnst.clicked();}
}