let enabled = true;

var abc = false;//si es falso se activa key2 y si es verdadero key
var keyboard 	= [];

var key 		= ["a","b","c","d","e","f","g","h","i",
				   "j","k","l","m","n","o","p","q","r",
			         "s","t","u","v","w","x","y","z"];

var key2		= ["q","w","e","r","t","y","u","i","o","p",
				  	 "a","s","d","f","g","h","j","k","l",
			       		"z","x","c","v","b","n","m"];

var changeKBPress=false;
var changeKeyB = 
{
	x:canvas.width-120,
	y:700 ,
	width:100,
	height:70,
	step:0,
}
let keyTouch=false;//verifica q se alla precionado y se suelte el boton para ejecutar la accion

var selectKey;//selecciona entre key y key2

var letra 		="";//letra precionada en el teclado
var maxLife 	= 10;
var life		= maxLife;//vidas
var lifeCount	=0;//si es menor a 0 verifica si la letra es correcta o no y aumenta el numero para no seguir restando vidas si es incorrecta
var hiddenWord 	= [];//palabra para adivinar
var incorrect=[];


function keyboardGenerate() {//genera todo el teclado 1 vez
keyboard.length = 0;
	var x=0;
	var e=0;
	var o=-1;
	for (var i = 0; i < 26; i++) {
		if (abc) 
		{
			x=300-495/2;
			selectKey=key;
			o++;
			if (o>=9) 
			{
				e++;
				if (e<2) {
					o=0;
				}
				else
				{
					o=0.5;
				}
			}
			
		}
		else
		{
			x=300-550/2;
			selectKey=key2;
			o++;
			if (o>=10 && e==0) 
			{
				e++;
				o=0.5;
			}
			if (o>=9 && e==1) 
			{
				e++;
				o=1.5;
			}
			
		}
		keyboard.push({
			x:x + (65 * o),
			y:580 +(65 * e),
			width:60,
			height:60,
			step:0,
			letra:selectKey[i]
		});
	}
}

function keyboardDraw()
{
	for(i in keyboard){//genera el teclado en orden 
		var k = keyboard[i];
		ctx.save();
		ctx.globalAlpha=1;
		ctx.fillStyle="blue";
		//ctx.fillRect(k.x, k.y, k.width, k.height);
		ctx.drawImage(kbd, 0, 224*k.step, 224, 224,
			k.x, k.y, k.width, k.height);
		ctx.fillStyle="#78b162";
		ctx.font="24pt Calibri";
		ctx.textAlign="center";
		ctx.fillText(selectKey[i], k.x+k.width/2, k.y+k.height/2+7);
		ctx.restore();

		if (life==0) {k.step=0;}
	}

		ctx.save();
		ctx.fillStyle="blue";
		ctx.drawImage(kbd, 224, 224*changeKeyB.step, kbd.width-224, 224,
			changeKeyB.x, changeKeyB.y, changeKeyB.width, changeKeyB.height);
		ctx.fillStyle="#78b162";
		ctx.font="24pt Calibri";
		ctx.textAlign="center";
		if (abc) 
		{
			ctx.fillText("QWE", changeKeyB.x+50, changeKeyB.y+45);
		}
		else
		{
			ctx.fillText("ABC", changeKeyB.x+50, changeKeyB.y+45);
		}
		ctx.restore();
}


function keyPress()//verifica si se preciono alguna tecla
{
	if (!keyTouch) {
		for(i in keyboard)
		{
			var k = keyboard[i];

			if (cX > k.x &&
			 	cX < k.x+k.width &&
			 	cY > k.y &&
			 	cY < k.y+k.height &&
			 	mouse) 
			{
				letra=k.letra;
				k.step=1;
				keyTouch=true;
				sound.keyboard.play();
				//console.log(word.split("").join("")+" : "+ hiddenWord.join(""));
			}else{
				k.step=0;
			}
		}
	}
	if(!mouse)
	{
		letra="";
		keyTouch=false;
	}
}

function changeKeyBoard()
{
	if (cX > changeKeyB.x &&
	cX < changeKeyB.x+changeKeyB.width &&
	cY > changeKeyB.y &&
	cY < changeKeyB.y+changeKeyB.height &&
	mouse && !keyTouch) 
{
	keyTouch=true
	changeKBPress=true;
	changeKeyB.step=1;
}
if (changeKBPress && !mouse)
{
	abc = !abc;
	keyboardGenerate();
	changeKBPress=false;
	changeKeyB.step=0;
}

}


keyboardGenerate();


