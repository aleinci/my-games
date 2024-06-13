function InstantiateBackground()
{
	background={
	width:images.stage.img.width,
	height:images.stage.img.height,
	y1:0,
	y2: images.stage.img.height*36,//-1296
	 scale:36,}
}

function DestroyBackground() {
	delete background;
}

function backgroundUpdate()
{
	if (background.y1 - (images.stage.img.height/2) *background.scale >= camera.viewport.bottom) 
	{
		background.y1=background.y2 - (images.stage.img.height)*background.scale;
	}
	if (background.y2 - (images.stage.img.height/2) *background.scale >= camera.viewport.bottom) 
	{
		background.y2=background.y1 - (images.stage.img.height)*background.scale;
	}

	CreateImage(images.stage.img, 
	0, 0, background.width, background.height,
	0, background.y1, background.width, background.height,
	0, 0, background.scale, background.scale, 1);

	CreateImage(images.stage.img, 
	0, 0, background.width, background.height,
	0, background.y2, background.width, background.height,
	0, 0, background.scale, background.scale, 1);
} 