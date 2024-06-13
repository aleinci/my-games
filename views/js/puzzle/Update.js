let clicked=false;

let x = 100;
let y = 100;
let playing=false;
let onAnim=false;
let startText = {
	text:new Text("Press To Start",canvas.width/2, 680, 24, "Arial", "#007f7f", "center"),
	alpha:{ max:1, current:1,},
}

let pos=
[
	pos1={x:1,y:1}, pos2={x:2,y:1}, pos3={x:3,y:1},
	pos4={x:1,y:2}, pos5={x:2,y:2}, pos6={x:3,y:2},
	pos7={x:1,y:3}, pos8={x:2,y:3}, pos9={x:3,y:3},	
];

let gameBG = new GameObject(canvas.width/2, canvas.height/2, canvas.width, canvas.height, 0);

let empty =
{ 
	object:new GameObject(x+(150*pos[8].x),y+(150*pos[8].y),150,150,0),
	x:150*pos[8].x,
	y:150*pos[8].y,
	speed:10,
}


let mindBreak =[];
let textoP
let borders = new GameObject(x+300,y+300,472,472,0);




function StartGP()
{
	empty.object.x=150*pos[8].x+x;
	empty.object.y=150*pos[8].y+y;
	Ramdomized();
	animRestart();
	animRandom.on=true;
	mindBreak.length=0;
	let c =0;
	let f = -1;

	for (var i = 0; i < 8; i++) 
	{
		f++;
		if (f>2) {c++; f=0;}

		mindBreak.push(
		{
			//object:new GameObject((50*pos[i].x),(50*pos[i].y),50,50,0),
			object:new Sprite(x+(150*pos[i].x), y+(150*pos[i].y), 150, 150, 0,
			 selectImage[random][0].width/3, selectImage[random][0].height/3, selectImage[random][0].width/3, selectImage[random][0].height/3,f,c),
			//object:new GameObject(25,25+(50*i),50,50,0),
			pos:i,
			x:150*pos[i].x,
			y:150*pos[i].y,
			select:false,
			onPosition:false,
		});	
	}
}

function GamePlay()
{
	//if (question.on || animAnswer.enabled) {playing=false;}
	if (!playing && !animAnswer.enabled && animRandom.on) 
	{
		GameTimeStop();
		
		if (mouse && animRandom.on && !animAnswer.enabled) 
		{
			playing=true;
			ui.count=0;
			GameTime();
		}else{playing=false;}
	}
	
	if (playing) {collider(); playMusic.play();}
	
	
	gameBG.Draw("image",img.background);


	empty.object.Draw("image",img.emptyImg);


	
	

	for(this.i in mindBreak)
	{
		let j = mindBreak[this.i];
		j.object.Draw(selectImage[random][0]);


		if (j.object.x == (150*pos[j.pos].x)+x &&
		 j.object.y == (150*pos[j.pos].y)+y) 
		{
			j.onPosition=true;
		}
		else
		{
			j.onPosition=false;
		}	
	}
	

	
	UserInterfacePC();

	borders.Draw("image",img.borde);//borde puzzle

	if (mindBreak[0].onPosition && mindBreak[1].onPosition && mindBreak[2].onPosition &&
		mindBreak[3].onPosition && mindBreak[4].onPosition && mindBreak[5].onPosition &&
		mindBreak[6].onPosition && mindBreak[7].onPosition && !animRandom.on) 
	{
		empty.x=450;
		empty.y=450;
		Question();
		playing=false;
		question.on=true;
	}

	if (playing && animRandom.on) {animated();}
	if (!playing && !animAnswer.enabled && animRandom.on) {PressToStart();}
	if (ui.time<=0) {GameTimeStop(); GameOver();}
	

	
}
//collision del espacio vacio con las imagenes y su movimiento
function collider()
{
	for(this.i in mindBreak)
	{
		let j = mindBreak[this.i];

		
		

		if (empty.object.x== empty.x && empty.object.y == empty.y) {
			//mover X a la derecha
			if (empty.object.x + empty.object.width> j.object.x&&
				empty.object.x-1< j.object.x + j.object.width &&
				empty.object.y + empty.object.height> j.object.y&&
				empty.object.y< j.object.y + j.object.height)
			{
				if (cX> j.object.x-j.object.width/2&&
				cX< j.object.x + j.object.width/2 &&
				cY> j.object.y-j.object.width/2&&
				cY< j.object.y + j.object.height/2&&mouse) 
				{
					//j.object.x+=j.object.width;
					empty.x-=empty.object.width;
					j.select=true;
					sound.slide.playbackRate=3;
					sound.slide.currentTime=0;
					sound.slide.play();
				}
			}
				
			//mover X a la izquierda
			if (empty.object.x + empty.object.width+1> j.object.x&&
				empty.object.x< j.object.x + j.object.width &&
				empty.object.y + empty.object.height> j.object.y&&
				empty.object.y< j.object.y + j.object.height)
			{
				if (cX> j.object.x-j.object.width/2&&
				cX< j.object.x + j.object.width/2 &&
				cY> j.object.y-j.object.width/2&&
				cY< j.object.y + j.object.height/2&&mouse) 
				{
					//j.object.x-=j.object.width;
					empty.x+=empty.object.width;
					j.select=true;
					sound.slide.playbackRate=3;
					sound.slide.currentTime=0;
					sound.slide.play();
				}
			}

			//mover Y a la arriba
			if (empty.object.x + empty.object.width> j.object.x&&
				empty.object.x< j.object.x + j.object.width &&
				empty.object.y + empty.object.height> j.object.y&&
				empty.object.y-1< j.object.y + j.object.height)
			{
				if (cX> j.object.x-j.object.width/2&&
				cX< j.object.x + j.object.width/2 &&
				cY> j.object.y-j.object.width/2&&
				cY< j.object.y + j.object.height/2&&mouse) 
				{
					//j.object.y+=j.object.height;
					empty.y-=empty.object.height;
					j.select=true;
					sound.slide.playbackRate=3;
					sound.slide.currentTime=0;
					sound.slide.play();
				}
			}

			//mover Y a la arriba
			if (empty.object.x + empty.object.width> j.object.x&&
				empty.object.x< j.object.x + j.object.width &&
				empty.object.y + empty.object.height+1> j.object.y&&
				empty.object.y< j.object.y + j.object.height)
			{
				if (cX> j.object.x-j.object.width/2&&
				cX< j.object.x + j.object.width/2 &&
				cY> j.object.y-j.object.width/2&&
				cY< j.object.y + j.object.height/2&&mouse) 
				{
					//j.object.y-=j.object.height;
					empty.y+=empty.object.height;
					j.select=true;
					sound.slide.playbackRate=3;
					sound.slide.currentTime=0;
					sound.slide.play();
				}
			}
		}

		//movimiento
		if(empty.object.x<empty.x && j.select)
		{
			empty.object.x+=empty.speed;
			j.object.x-=empty.speed;
		}

		if(empty.object.x>empty.x && j.select)
		{
			empty.object.x-=empty.speed;
			j.object.x+=empty.speed;
		}

		if(empty.object.y<empty.y && j.select)
		{
			empty.object.y+=empty.speed;
			j.object.y-=empty.speed;
		}

		if(empty.object.y>empty.y && j.select)
		{
			empty.object.y-=empty.speed;
			j.object.y+=empty.speed;
		}




		if (empty.object.x== empty.x && empty.object.y == empty.y) {j.select=false;}
	}
}

function lerp(start, end, amt)
{
	return (1-amt)* start + amt * end
}


function PressToStart(){
	let t = startText;
	t.text.text = "Press To Start";

	if (t.text.alpha >= 0.9) {t.alpha.max = 0}
	if (t.text.alpha <= 0.1) {t.alpha.max = 1}

	t.alpha.current=lerp(t.alpha.current, t.alpha.max, 0.15);
	
	t.text.alpha=t.alpha.current;

	t.text.Draw();
}