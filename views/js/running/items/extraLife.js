function InstantiateExtraL(){
	extraL = [];

	i_extraL = new Item(extraL, 2000, images.extralife.img);
	
	i_extraL.addEventCollider=()=>{
		player.extraLife=pl.upgrade.life[pl.upgrade.extralife];
	}
	
}

function DestroyExtraL()
{
	delete extraL;
	delete i_extraL;
}

