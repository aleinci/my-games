function playerFX() {

	//WIND
	dibujarVientoP();
	MovimientoVientoP();

	if (play.modo=="viento") {

		VientoP();

	}

	//FIRE
	dibujarFuegoP();
	MovimientoFuegoP();
	
	if (play.modo=="fuego" && play.estado == "vivo") {

		//FuegoP();

	}

}