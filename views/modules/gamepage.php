<?php

	include 'models/functions.php';
	require "models/src.php";
	session_start();
	if (!isset($_SESSION["user"])) {

		header("location: ".$src);

	}

	class GameContainer
	{
		function __construct($image, $name, $src)
		{
			echo '
			<div class="card mx-3 my-3" style="width: 22rem;">

				<img src="'.$image.'" class="card-img-top" height="200" alt="'.$name.'">

				<div class="card-body text-center">

					<h5 class="card-title text-secondary font-weight-bolder">'.$name.'</h5>

					<div class="container">
						<div class="row justify-content-sm-center m-2">
							<a class="btn btn-primary btn-block w-50 h-25 col-5" href="'.$src.'">PLAY</a>
							<a class="col-1"></a>
							<a class="btn btn-primary btn-block w-50 col-5" href="'.$src.'Leader">Leader</a>
						</div>
					</div>

				</div>

			</div>';

		}
	}
	
?>
<!-- Navbar -->
<nav class="navbar navbar-light bg-light">

	<a class="navbar-brand font-weight-bolder text-secondary">MY GAMES</a>

	

	<div class="row justify-content-sm-end">

		<span class="navbar-text font-weight-bolder text-secondary"><?php echo "Welcome: ".$_SESSION["user"]; ?></span>
		<a href="./controllers/close_sesion.php" class="mx-3 btn btn-outline-primary my-2 my-sm-0">Logout</a>

	</div>
	
</nav>

</div>



<div class="container my-5">
	<div class="row justify-content-sm-center">
		<?php
			new GameContainer("./views/img/runrun.jpg", "Run run Game", "runrun");

			new GameContainer("./views/img/game.jpg", "Spaceship Game", "spaceShip");
			
			new GameContainer("./views/img/pandemic.jpg", "Pandemic Game", "pandemic");

			new GameContainer("./views/img/Question.jpg", "Questionary Game", "question");

			new GameContainer("./views/img/puzzle.png", "Puzzle Game", "puzzle");

			//new GameContainer("./views/img/hanged.png", "Hanged Game", "hanged");


		?>
	</div>
</div>

