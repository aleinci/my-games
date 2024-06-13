function InstantiateHPlayerOutCamera()
{
	//hud-player out camera
	hpoCamera={
		obj:new GameObject(0,0,100,100,0),
		txt:new Text("",0,0,22,"MyFont","red","center",true,"black",4),
		distance:0,
		update:function(){},
	}

	hpoCamera.update=()=>{
		if (player.y > camera.viewport.bottom) 
		{
			let c = hpoCamera;
			let posX = camera.worldToScreen(player.x, player.y);

			c.distance = parseInt(DistanceBetweenObjects(0,camera.viewport.bottom, 0, player.y)*0.1);
			c.txt.text = c.distance;

			c.obj.x = posX.x;
			c.txt.x = posX.x;

			c.obj.y = canvas.height - c.obj.height/2 - 10;
			c.txt.y = canvas.height - c.obj.height - 20;

			c.obj.Draw("image",images.outCamera.img);
			c.txt.Draw();
		}
	}
}

function DestroyHPlayerOutCamera()
{
	delete hpoCamera;
}