function MMStart()
{
	menu=
	{
		background: new GameObject(canvas.width/2, canvas.height/2, canvas.width, canvas.height),
		play: 		new Button(img.btn_menu, canvas.width/2 - 170/2, 240, 170, 70, 0, img.btn_menu.height/2, img.btn_menu.width/2, img.btn_menu.height/2),
		
		credits: 	new Button(img.btn_menu, canvas.width/2 - 170/2, 320, 170, 70, img.btn_menu.width/2, img.btn_menu.height/2, img.btn_menu.width/2, img.btn_menu.height/2),
		creditsEnabled: false,

		leader: 	new Button(img.btn_menu, canvas.width/2 - 170/2, 400, 170, 70, img.btn_menu.width/2, 0, img.btn_menu.width/2, img.btn_menu.height/2),
		srcLD:srcLed,

		coachteen: 	new Button(img.btn_menu, canvas.width/2 - 170/2, 480, 170, 70, 0, 0, img.btn_menu.width/2, img.btn_menu.height/2),
		srcCT:srcPag,
	}
}


function MainMenu()
{
	saveSound=0;
	stopMusic(playMusic);
	menu.background.Draw("image", img.background);

	if(!menu.creditsEnabled)
	{
		menu.play.Draw();
		menu.play.overEvent =()=>{menu.play.operation ="lighter";}
		menu.play.outEvent =()=>{menu.play.operation ="";}
		menu.play.event=()=>{btnChange.btnM_G=true; started.Start(); sound.click.play();}
		//menu.play.pressEvent=()=>{menu.play.operation="darken";}
		

		menu.credits.Draw();
		menu.credits.overEvent =()=>{menu.credits.operation ="lighter";}
		menu.credits.outEvent =()=>{menu.credits.operation ="";}
		menu.credits.event=()=>{menu.creditsEnabled=true; sound.click.play();}

		menu.leader.Draw();
		menu.leader.overEvent =()=>{menu.leader.operation ="lighter";}
		menu.leader.outEvent =()=>{menu.leader.operation ="";}
		menu.leader.event=()=>{window.location=menu.srcLD; sound.click.play();}

		menu.coachteen.Draw();
		menu.coachteen.overEvent =()=>{menu.coachteen.operation ="lighter";}
		menu.coachteen.outEvent =()=>{menu.coachteen.operation ="";}
		menu.coachteen.event=()=>{window.location=menu.srcCT; sound.click.play();}
		
	}else
	{
		Credits();
	}

}



