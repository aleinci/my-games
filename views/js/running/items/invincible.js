function InstantiateInvincible(){
	invincible = [];
	//i_invincible= new InvincibleItem();
	i_invincible = new Item(invincible, 5000, images.shield.img);

	i_invincible.addEventCollider=()=>{pl.addInvincibility(player.maxInvincibility);}
}

function DestroyInvincible(){
	delete invincible;
	delete i_invincible;
}

