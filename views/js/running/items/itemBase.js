class Item
{
	constructor(item,cooldown,img)
	{
		this.item = item;
		this.cooldown = cooldown;
		this.img = img;
	}

	create()
	{
		this.item.push({
			obj:new GameObject(Random(-252,252), camera.viewport.top - 100, 50, 50, 0),
		});
	}

	draw(i,j,img)
	{
		let size = j.obj.width;
		let scale = 1.5;
		ctx.save();
		ctx.translate(j.obj.x, j.obj.y);
		ctx.scale(scale, scale);
		ctx.drawImage(this.img, size/-2, size/-2, size, size);
		ctx.restore();
		//j.obj.Draw("image", this.img);
	}

	collision(i,j)
	{
		if(CircleCollider(j.obj.x, j.obj.y, j.obj.width, player.x, player.y, player.width) && player.state != "death"){
			this.addEventCollider();
			delete this.item[i];
			startMusic(sound.item);
		}
		if (j.obj.y > camera.viewport.bottom + 100) delete this.item[i];
	}

	spawm()
	{
		if (Random(0,this.cooldown) < 2 && this.item.length==0 && player.state!="death" && startPlay) {
			this.create();
		}
	}

	addEventCollider()
	{
		//implement event after colliding with player
	}

	EventPre(){}//event pre update
	EventMid(){}//event mid(in for) update
	EventPost(){}//event post update

	update()
	{
		this.EventPre();
		for(let i in this.item)
		{
			let j = this.item[i];

			this.collision(i,j);
			this.EventMid();
			this.draw(i,j);
		}
		this.spawm();
		
		this.item = this.item.filter(item => item);
		
		this.EventPost();
	}
}