let ini = document.getElementById("ini");

let	srcImg;	//Image
let	srcSfx; //Sound effect
let	srcPhp; //Php
let srcPag; //Game page  (solo nombre de la pagina)
let srcLed; //Leader (solo nombre de la pagina)

function initiateSrc(){
	if(ini.className=="php"){
		srcImg 		= "views/img/pandemic/";				//Image
		srcSfx 		= "views/img/sound/pandemic/";		//Sound effect
		srcPhp 		= "controllers/pandemic/insert.php";	//Php
		srcPag 		= "gamepage";						//Game page  (solo nombre de la pagina)
		srcLed 		= "pandemicLeader";					//Leader (solo nombre de la pagina)
	}else{
		srcImg 		= "../img/pandemic/";				//Image
		srcSfx 		= "../img/sound/pandemic/";			//Sound effect
		srcPhp 		= "controllers/pandemic/insert.php";	//Php
		srcPag 		= "gamepage";						//Game page  (solo nombre de la pagina)
		srcLed 		= "pandemicLeader";					//Leader (solo nombre de la pagina)
	}
}initiateSrc()


