let creditsM ={
	txt:new Text("", 0, 0, 0, "Microsoft PhagsPa", "black", "center"),
	back:new Button(730, 0, 140, 170,
		0,0,400,400,1,1,false),
	enable:false,
	start:function(){},
	text(){},


}


creditsM.start=()=>
{
	if (sound.musicMM.sfx.currentTime >= sound.musicMM.sfx.duration*0.98) {sound.musicMM.sfx.currentTime=0;}
	startMusic(sound.musicMM);

	let point;

	CreateImage(images.mainMenu.credits.img, 0,0, images.mainMenu.credits.img.width, images.mainMenu.credits.img.height,
		canvas.width/2, canvas.height/2, canvas.width, canvas.height, 1, 1, 1, 1, 1);

	if ( device == "pc" ) { point = Input.mousePosition }
	else{ point = Input.touchPosition[0] }

	

	creditsM.back.img = images.screen.hit.img;

	creditsM.back.event = () =>
	{
		creditsM.enable = false;
	}
	creditsM.back.clicked();

	
}

creditsM.text=(text, x, y, size, color, border, bcolor, linesize)=>
{
	let t = creditsM.txt;
	 var words = text.split('\n');
    var line = '';

    for(var n = 0; n < words.length; n++) {
        //var testLine = line + words[n] + ' ';
        //var metrics = ctx.measureText(testLine);
        //var testWidth = metrics.width;
       
            t.x 	= x;
			t.y 	= y;
			t.text 	= line;

            line = words[n] + ' ';
            y += size;
    }

	

	//t.text 	= line;

//	t.text.split("\n");

	t.x 	= x;
	t.y 	= y;
	t.size 	= size;
	t.color = color;

	t.border 	= border;
	t.bcolor 	= bcolor;
	t.linesize 	= linesize;

	

	t.Draw();
}

/*function wrapText(context, text, x, y, lineHeight) {
    var words = text.split('\n');
    var line = '';

    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
       
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += size;
    }
    
}*/