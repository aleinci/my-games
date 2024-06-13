function PUStart()
{
	pauseUi =
	{
		box:new GameObject(canvas.width/2, canvas.height/2, 400,350),
		resume:new Button(img.btn_pauseRM, (canvas.width/2 - 150/2)-85, canvas.height/2, 150, 70, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, false),
		quit:new Button(img.btn_pauseRM, (canvas.width/2 - 150/2)+85, canvas.height/2, 150, 70, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, false),
	}
}
function Pause()
{
	pauseUi.quit.stepX=1;

	pauseUi.box.Draw("image", img.pause_box);
	pauseUi.resume.Draw();
	pauseUi.quit.Draw();
	
	
	pauseUi.quit.event=()=>{btnChange.btnP_M=true; FullQuit(); sound.click.play();}
	pauseUi.resume.event=()=>{btnChange.btnP_G=true; GameTime(); sound.click.play();}
}