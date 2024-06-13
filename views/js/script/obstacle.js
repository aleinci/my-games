var obs1 = [];
var velocityO = 0;
var obsTimeSp = 0;


function obstacles() 
{

	
	for(i in obs1)
	{
		
		var ob1 = obs1[i];
				
		ctx.save();
		if (ob1.type == "trigger") {
			ctx.globalAlpha = 0;
		}
		ctx.translate(ob1.x - ob1.width/-2, ob1.y - ob1.height/-2);
		ctx.rotate(ob1.angle);
		//pipesBG();
		switch(mapN)
		{
			case 0:
				ctx.drawImage(tubo1, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 100;
				velocityO = 3;
			break;
			case 1:
				ctx.drawImage(tubo4, 767, 164, 216, 878,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 60;
				velocityO = 8;
			break;
			case 2:
				ctx.drawImage(tubo0, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 75;
				velocityO = 5;
			break;
			case 3:
			ctx.drawImage(tubo1, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 100;
				velocityO = 10;
			break;
			case 4:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 65;
				velocityO = 6;
			break;
			case 5:
				ctx.drawImage(tubo2, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 80;
				velocityO = 7;
			break;
			case 6:
				ctx.drawImage(tubo0, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 75;
				velocityO = 5;
			break;
			case 7:
				ctx.drawImage(tubo1, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 65;
				velocityO = 3;
			break;
			case 8:

				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				alienMap();
			break;
			case 9:
				ctx.drawImage(tubo0, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 90;
				velocityO = 4;
			break;
			case 10:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 0;
				velocityO = 0;
			break;
			default:
				ctx.drawImage(tubo1, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
				obsTimeSp = 100;
				velocityO = 3;
		}
		
				
		ctx.restore();
		

		ob1.x -= ob1.speed;
		if (play.estado == "muerto") 
		{
			velocityO = 0;
			ob1.speed = 0;
		}else
		{
			ob1.speed = velocityO;
		}

		if (ob1.x < -50)//eliminar obstaculo
		{
			delete obs1[i];
		}

		if (play.x -22.5 + play.width> ob1.x &&
			play.x -22.5 < ob1.x + ob1.width &&
			play.y -14 + play.height>ob1.y &&
			play.y -14 < ob1.height + ob1.y &&
			ob1.type == "rigid" && play.estado == "vivo") 
		{
			if (mapN <10) {
				play.estado = "muerto";
				sabiasQ = true;
				hitC.play();
			}else{
				ctx.save();
				ctx.fillStyle="red";
				ctx.fillRect(0,0,100,100);
				ctx.restore();
			}
		}
		else if (play.x -22.5 + play.width> ob1.x &&
			play.x -22.5 < ob1.x + ob1.width &&
			play.y -14 + play.height>ob1.y &&
			play.y -14 < ob1.height + ob1.y &&
			ob1.type == "trigger" && play.estado == "vivo") 
		{
			if (ob1.hit == false) 
			{
				point.play();
				puntos++;
			}
			ob1.hit = true;
		}else
		{
			ob1.hit = false;
		}
	}

	if (mapN==8 && rvCount > 12500) {
		ctx.save();
		ctx.font = "30px Impact";
		ctx.textAlign="center";
		ctx.fillStyle = "darkred";
		ctx.fillText("danger the speed will reverse", canvas.width/2+1, canvas.height/2-99);
		ctx.fillStyle = "red";
		ctx.fillText("danger the speed will reverse", canvas.width/2, canvas.height/2-100);
		ctx.restore();
	}
}

function moverObs()
{
	for(i in obs1)
	{
		
		var ob1 = obs1[i];

	}
}

var count = 50;


function obst() 
{	

	if (mapN == 10 && count <= 51) {
		
			
			obs1.push({//tipo de colision rigido
				type:"rigid",
				hit:false,
				x:canvas.width/2- 25,
				y:canvas.height/2-150,
				width:50,
				height:300,
				speed:3,
				color:"blue",
				angle:0,
				UD:false,
			});
		
	}
	if (touchPlay) {
		if (play.estado == "vivo" && count <200)
		{
			count++;
		}
		if (play.estado == "muerto") 
		{
			count = 50;
		}

		if (count >= obsTimeSp && mapN <10)//100 y 70 
		{
			count 	= 0;
			mxY		=270;	//posicion maxima
			minY	=550;	//posicion minima
			yr		= Math.floor(Math.random() * (mxY - minY + 1));//posision random

				obs1.push({//tipo de colision rigido
						type:"rigid",
						hit:false,
						x:canvas.width+ 60,
						y:yr,
						width:50,
						height:300,
						speed:3,
						color:"red",
						angle:3.14,
						UD:false,
					});
			
					obs1.push({//tipo de colision rigido
						type:"rigid",
						hit:false,
						x:canvas.width+ 60,
						y:yr +455,
						width:50,
						height:300,
						speed:3,
						color:"blue",
						angle:0,
						UD:false,
					});

					obs1.push({//tipo de colision traspasable
						type:"trigger",
						hit:false,
						x:canvas.width+ 60+30,
						y:yr + 300,
						width:20,
						height:155,
						speed:3,
						color:"yellow",
						angle:0,
						UD:false,
					});
		}
	}
}

function pipesBG() {
	for(i in obs1)
	{
		
		var ob1 = obs1[i];

		switch(mapN)
		{
			case 0:
				ctx.drawImage(tubo1, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 1:
				ctx.drawImage(tubo0, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 2:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 3:
			ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 4:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 5:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 6:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 7:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 8:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 9:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			case 10:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
			break;
			default:
				ctx.drawImage(tubo3, 800, 198, 202, 845,
				ob1.width/-2, ob1.height/-2, ob1.width, ob1.height);
		}
	}
}

//solo mapa de alienigena
var rvCount=0;//contador para invertir las velocidades
var invVelocity =false;//invierte las velocidades

function alienMap()
{

	
	rvCount++;

	if (rvCount>14000) {
		changeS.play();
		invVelocity =!invVelocity;
		rvCount=0;
	}

	if (!invVelocity)
	{
		if (teclado[jump] || mouse) {
			obsTimeSp = 100;
			velocityO = 5;
		}else
		{
			obsTimeSp = 100;
			velocityO = 2;
		}
	}

	if (invVelocity)
	{
		if (teclado[jump] || mouse) {
			obsTimeSp = 100;
			velocityO = 2;
		}else
		{
			obsTimeSp = 100;
			velocityO = 5;
		}
	}

		
}