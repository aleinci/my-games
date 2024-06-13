function Map()
{
	mapLimited();

	let width1 = 4688;
	let height1 = 2896;


	//OutMap

	backG(width1,0,0,0,width1,height1, 0.5, 0.5);
	backG(width1,height1,0,0,width1,height1, 0.5, 0.5);
	backG(width1,-height1,0,0,width1,height1, 0.5, 0.5);
	backG(width1,height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(width1,-height1/2,0,0,width1,height1, 0.5, 0.5);

	backG(-width1,0,0,0,width1,height1, 0.5, 0.5);
	backG(-width1,height1,0,0,width1,height1, 0.5, 0.5);
	backG(-width1,-height1,0,0,width1,height1, 0.5, 0.5);
	backG(-width1,height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(-width1,-height1/2,0,0,width1,height1, 0.5, 0.5);

	backG(0,height1,0,0,width1,height1, 0.5, 0.5);
	backG(width1/2,height1,0,0,width1,height1, 0.5, 0.5);
	backG(-width1/2,height1,0,0,width1,height1, 0.5, 0.5);

	backG(0, -height1,0,0,width1,height1, 0.5, 0.5);
	backG(width1/2, -height1,0,0,width1,height1, 0.5, 0.5);
	backG(-width1/2, -height1,0,0,width1,height1, 0.5, 0.5);

	

	//InMap

	backG(0,0,0,0,width1,height1, 0.5, 0.5);
	backG(width1/2,0,0,0,width1,height1, 0.5, 0.5);
	backG(-width1/2,0,0,0,width1,height1, 0.5, 0.5);
	backG(0,height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(0,-height1/2,0,0,width1,height1, 0.5, 0.5);

	backG(width1/2,height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(width1/2,-height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(-width1/2,height1/2,0,0,width1,height1, 0.5, 0.5);
	backG(-width1/2,-height1/2,0,0,width1,height1, 0.5, 0.5);

	
	backG(width1/2, (-height1)+(904/2)+46,  0,height1,	  width1,904, 0.5, 0.5);
	backG(0, (-height1)+(904/2)+46,  0,height1,	  width1,904, -0.5, 0.5);
	backG(-width1/2, (-height1)+(904/2)+46,  0,height1,	  width1,904, 0.5, 0.5);
	

	backG(width1/2, height1/2+888+58,  0,height1+904, width1,888, 0.5, 0.5);
	backG(0, height1/2+888+58,  0,height1+904, width1,888, -0.5, 0.5);
	backG(-width1/2, height1/2+888+58,  0,height1+904, width1,888, 0.5, 0.5);

	
	backG(-3735, 1894,  width1+2, 0, 888, width1, 0.5, 0.5);
	backG(-3735, -450,  width1+2, 0, 888, width1, 0.5, -0.5);
	backG(-3735, -1001,  width1+2, 0, 888, width1, 0.5, 0.5);

	backG(3735, 1894,  width1+2+800, 0, 888, width1, 0.5, 0.5);
	backG(3735, -450,  width1+2+800, 0, 888, width1, 0.5, -0.5);
	backG(3735, -1001,  width1+2+800, 0, 888, width1, 0.5, 0.5);
	
}

function backG(x, y, px, py, w, h, scalex, scaley)
{
	if(playerVisionMap(x,y,w,h)){
		CreateImage(bg, px, py, w, h, x, y, w, h, 1, 1, scalex, scaley, 1);	
	}
}

function backG2(x, y, px, py, w, h, scalex)
{
	let a = Background;
	let b = camera.viewport;
	let sA = a.sprite.getSize();
	let sB = obj.sprite.getSize();

	Background.transform.scale(scalex, 0.5)

	if (b.right  > a.x - sA.width/2 &&
		b.left  < a.x + sA.width/2 &&
		b.bottom  > a.y - sA.height/2 &&
		b.top  < a.y + sA.height/2) 
	{
		//Background.sprite.renderer();
	}
	Background.sprite.renderer();

	Background.sprite.Step(1,1);
	Background.transform.position(x,y);
	Background.sprite.Padding(px,py);
	Background.sprite.PixelSize(w,h);
	
	
}
function mapLimited(a)
{
	let top = -2409;
	let down = 2361;
	let left = -3732;
	let right = 3732;

	let e1 = enemy.list;
	
	
	for(let i in e1)
	{
		let j = e1[i];

		for(let o in j)
		{
			let l = j[o].obj;

			limited(l);
		}
	}
	limited(obj);

	function limited(a)
	{
		if (a.y - a.sprite.getSize().height/2 < top) {a.y = top + a.sprite.getSize().height/2;}
		if (a.y + a.sprite.getSize().height/2 > down) {a.y = down - a.sprite.getSize().height/2;}

		if (a.x - a.sprite.getSize().width/2 < left) {a.x = left + a.sprite.getSize().width/2;}
		if (a.x + a.sprite.getSize().width/2 > right) {a.x = right - a.sprite.getSize().width/2;}
	}

}
