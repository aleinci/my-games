function posBlock(){
	let oo1={x:611, y:249};
	let oo2={x:249, y:611};
	let oo3={x:400, y:400};

	blocke(images.obstacles.o2.img, oo3.x, 0,"rect", 0.2);
	blocke(images.obstacles.o1.img, 0, -300,"rect", 0.2);
	blocke(images.obstacles.o2.img, -oo3.x, 0,"rect", 0.2);
	blocke(images.obstacles.o3.img, -oo3.x, -300,"circle", 0.2);
	blocke(images.obstacles.o3.img, oo3.x, -300,"circle", 0.2);


	for(let i = -1; i <= 1; i+=2)
	{
		blocke(images.obstacles.o2.img, 1600*i, 0,"rect", 0.2);
		blocke(images.obstacles.o2.img, 1600*i, -oo2.y,"rect", 0.2);
		blocke(images.obstacles.o2.img, 1600*i, oo2.y,"rect", 0.2);
		blocke(images.obstacles.o1.img, (1600+oo2.x*1.7)*i, 0,"rect", 0.2);
		blocke(images.obstacles.o1.img, (oo1.x+1600+oo2.x*1.7)*i, 0,"rect", 0.2);

		blocke(images.obstacles.o1.img, oo1.x/2*i,1779,"rect", 0.2);
		blocke(images.obstacles.o2.img, 741*i, 1600,"rect", 0.2);

		blocke(images.obstacles.o3.img, 2540*i, -1230,"circle", 0.4);
		blocke(images.obstacles.o3.img, 2540*i, 1230,"circle", 0.4);

		blocke(images.obstacles.o1.img, (oo2.x*2-50)*i, -1800+oo2.y/2,"rect", 0.2);
	}

	blocke(images.obstacles.o2.img, 0, -1800+oo2.y,"rect", 0.2);
	blocke(images.obstacles.o2.img, 0, -1800,"rect", 0.2);


	//border
	blocke(images.obstacles.o3.img, 3735, -2423,"circle1", 0.65);
	blocke(images.obstacles.o3.img, 3735, 2423,"circle1", 0.65);
	blocke(images.obstacles.o3.img, -3735, -2423,"circle1", 0.65);
	blocke(images.obstacles.o3.img, -3735, 2423,"circle1", 0.65);
}
posBlock();