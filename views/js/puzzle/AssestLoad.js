let img ={
	borde:"",
	btn_exit:"",
	background:"",
	btn_menu:"",
	btn_pause:"",
	emptyImg:"",
	btn_pauseRM:"",
	pause_box:"",
	quest_box:"",
	borde_anwers:"",
	correct:"",
	incorrect:"",
	gameOver:"",
	borde_ui:"",
	ws:"",
	li:"",
	rn:"",
	ah:"",
	el:"",
	i1:"",
	i2:"",
	i3:"",
	i4:"",
	i5:"",
	i6:"",
	i7:"",
	i8:"",
	i9:"",
	i10:"",
	i11:"",
	i12:"",
}

let imagesJson= [
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80",
    "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]
let sound = [];

let playMusic;
let sonido;

class AssetsLoading
{
	constructor()
	{	
		/*this.srcImg = "views/img/puzzle/";
		this.srcMsc = "views/img/sound/puzzle/music/";
		this.srcSfx = "views/img/sound/puzzle/FX/";*/

		this.assetsToLoad = [];
		this.assetsLoaded = 0;

		this.LoadImage();
		
		this.LoadSound();
	}



	LoadImage=()=>
	{


		img.borde=new Image();
		img.borde.src = srcImg + "borde.png";

		img.btn_exit=new Image();
		img.btn_exit.src = srcImg + "btn_exit.png";

		img.background=new Image();
		img.background.src = srcImg + "background2.png";

		img.emptyImg=new Image();
		img.emptyImg.src = srcImg + "empty2.png";

		img.btn_menu=new Image();
		img.btn_menu.src = srcImg + "btn_menu.png";

		img.btn_pause=new Image();
		img.btn_pause.src = srcImg + "pause.png";

		img.btn_pauseRM=new Image();
		img.btn_pauseRM.src = srcImg + "pause/btn_pauseRM.png";

		img.pause_box=new Image();
		img.pause_box.src = srcImg + "pause/pause_box.png";

		img.quest_box=new Image();
		img.quest_box.src = srcImg + "question/text_box.png";

		img.borde_anwers=new Image();
		img.borde_anwers.src = srcImg + "question/borde_anwers.png";

		img.correct=new Image();
		img.correct.src = srcImg + "question/correct.png";

		img.incorrect=new Image();
		img.incorrect.src = srcImg + "question/incorrect.png";

		img.gameOver=new Image();
		img.gameOver.src = srcImg + "GameOver.png";

		img.borde_ui=new Image();
		img.borde_ui.src = srcImg + "borde_ui.png";

/////////////////////////////

		img.ws=new Image();
		img.ws.src = imagesJson[0];	

		img.li=new Image();
		img.li.src = imagesJson[1];	

		img.rn=new Image();
		img.rn.src = imagesJson[2];	

		img.ah=new Image();
		img.ah.src = imagesJson[3];	

		img.el=new Image();
		img.el.src = imagesJson[4];

		img.i1=new Image();
		img.i1.src = imagesJson[5];

		img.i2=new Image();
		img.i2.src = imagesJson[6];

		img.i3=new Image();
		img.i3.src = imagesJson[7];

		img.i4=new Image();
		img.i4.src = imagesJson[8];

		img.i5=new Image();
		img.i5.src = imagesJson[9];

		img.i6=new Image();
		img.i6.src = imagesJson[10];

		img.i7=new Image();
		img.i7.src = imagesJson[11];

		img.i8=new Image();
		img.i8.src = imagesJson[12];

		img.i9=new Image();
		img.i9.src = imagesJson[13];

		img.i10=new Image();
		img.i10.src = imagesJson[14];

		img.i11=new Image();
		img.i11.src = imagesJson[15];

		img.i12=new Image();
		img.i12.src = imagesJson[16];
		

		img.borde.addEventListener("load", this.loadHandler, false);
		img.btn_exit.addEventListener("load", this.loadHandler, false);
		img.background.addEventListener("load", this.loadHandler, false);
		img.emptyImg.addEventListener("load", this.loadHandler, false);
		img.btn_pauseRM.addEventListener("load", this.loadHandler, false);
		img.pause_box.addEventListener("load", this.loadHandler, false);
		img.quest_box.addEventListener("load", this.loadHandler, false);
		img.borde_anwers.addEventListener("load", this.loadHandler, false);
		img.correct.addEventListener("load", this.loadHandler, false);
		img.incorrect.addEventListener("load", this.loadHandler, false);
		img.gameOver.addEventListener("load", this.loadHandler, false);
		img.borde_ui.addEventListener("load", this.loadHandler, false);

		img.ws.addEventListener("load", this.loadHandler, false);
		img.li.addEventListener("load", this.loadHandler, false);
		img.rn.addEventListener("load", this.loadHandler, false);
		img.ah.addEventListener("load", this.loadHandler, false);
		img.el.addEventListener("load", this.loadHandler, false);
		img.i1.addEventListener("load", this.loadHandler, false);
		img.i2.addEventListener("load", this.loadHandler, false);
		img.i3.addEventListener("load", this.loadHandler, false);
		img.i4.addEventListener("load", this.loadHandler, false);
		img.i5.addEventListener("load", this.loadHandler, false);
		img.i6.addEventListener("load", this.loadHandler, false);
		img.i7.addEventListener("load", this.loadHandler, false);
		img.i8.addEventListener("load", this.loadHandler, false);
		img.i9.addEventListener("load", this.loadHandler, false);
		img.i10.addEventListener("load", this.loadHandler, false);
		img.i11.addEventListener("load", this.loadHandler, false);
		img.i12.addEventListener("load", this.loadHandler, false);

		this.assetsToLoad.push(img.borde);
		this.assetsToLoad.push(img.btn_exit);
		this.assetsToLoad.push(img.background);
		this.assetsToLoad.push(img.emptyImg);
		this.assetsToLoad.push(img.btn_pauseRM);
		this.assetsToLoad.push(img.pause_box);
		this.assetsToLoad.push(img.quest_box);
		this.assetsToLoad.push(img.borde_anwers);
		this.assetsToLoad.push(img.correct);
		this.assetsToLoad.push(img.incorrect);
		this.assetsToLoad.push(img.gameOver);
		this.assetsToLoad.push(img.borde_ui);

		this.assetsToLoad.push(img.ws);
		this.assetsToLoad.push(img.li);
		this.assetsToLoad.push(img.rn);
		this.assetsToLoad.push(img.ah);
		this.assetsToLoad.push(img.el);
		this.assetsToLoad.push(img.i1);
		this.assetsToLoad.push(img.i2);
		this.assetsToLoad.push(img.i3);
		this.assetsToLoad.push(img.i4);
		this.assetsToLoad.push(img.i5);
		this.assetsToLoad.push(img.i6);
		this.assetsToLoad.push(img.i7);
		this.assetsToLoad.push(img.i8);
		this.assetsToLoad.push(img.i9);
		this.assetsToLoad.push(img.i10);
		this.assetsToLoad.push(img.i11);
		this.assetsToLoad.push(img.i12);
	}

	LoadSound=()=>
	{
		playMusic = new Audio(srcMsc + "cyberdream.mp3");
		playMusic.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(playMusic);

	 	//SFX

		sound.click = new Audio(srcSfx + "click.mp3");
	 	sound.click.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.click);

	 	sound.slide = new Audio(srcSfx + "slide.mp3");
	 	sound.slide.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.slide);

	 	sound.correct = new Audio(srcSfx + "correct.mp3");
	 	sound.correct.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.correct);

	 	sound.incorrect = new Audio(srcSfx + "incorrect.mp3");
	 	sound.incorrect.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.incorrect);

	 	sound.gameOver1 = new Audio(srcSfx + "gameOver1.mp3");
	 	sound.gameOver1.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.gameOver1);

	 	sound.gameOver2 = new Audio(srcSfx + "gameOver2.mp3");
	 	sound.gameOver2.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.gameOver2);
	}

	loadHandler=()=> 
	{
		this.assetsLoaded++;
		this.LoadingScreen();
		    
		if (this.assetsLoaded === this.assetsToLoad.length) 
		{
			//console.log("All assets loaded");
			
			if (started == undefined) {started = new Start();}
			else{started = new Start();}
		}
	}
	LoadingScreen=()=> {//pantalla de carga
		var color1 ="";//darkcolor
		var color2 ="";//normalcolor

		//cambiar color de la barra de carga
		if (this.assetsLoaded < this.assetsToLoad.length*0.25) {
			color1 ="#FF0000";
			color2 ="#BB0000";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.25 && this.assetsLoaded < this.assetsToLoad.length*0.50) {
			color1 ="#BB9600";
			color2 ="#FFCD00";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.50 && this.assetsLoaded < this.assetsToLoad.length*0.75) {
			color1 ="#93BB00";
			color2 ="#C8FF00";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.75) {
			color1 ="#30BB00";
			color2 ="#23FF00";
		}




		ctx.save();

		ctx.fillStyle = "black";
		ctx.fillRect(0,0,canvas.width, canvas.height)

		ctx.fillStyle = "gray";
		ctx.fillRect(canvas.width/2-100, canvas.height/2-10, 200, 20)

		ctx.fillStyle = color1;
		ctx.fillRect(canvas.width/2-100, canvas.height/2-10, this.assetsLoaded/this.assetsToLoad.length*(200), 20);
		
		ctx.fillStyle = color2;
		ctx.fillRect(canvas.width/2-100, canvas.height/2-10, this.assetsLoaded/this.assetsToLoad.length*(200), 10);

		ctx.restore();

		ctx.save();
		ctx.fillStyle="white";
		ctx.font = '15pt Impact';
		ctx.textAlign = "center";
		ctx.fillText("Loading... ", canvas.width/2, canvas.height/2-20 );
		
		ctx.fillStyle="black";
		ctx.fillText(Math.floor(this.assetsLoaded/this.assetsToLoad.length*(100)) + "%", canvas.width/2+1, canvas.height/2+9 )
		
		ctx.fillStyle="white";
		ctx.fillText(Math.floor(this.assetsLoaded/this.assetsToLoad.length*(100)) + "%", canvas.width/2, canvas.height/2+8 );
		
		ctx.fillText("Please wait", canvas.width/2, canvas.height/2+35 );
		ctx.restore();
		
	}
}
Assets=new AssetsLoading();


function stopMusic(music){
	music.pause();
	music.currentTime=0;
}