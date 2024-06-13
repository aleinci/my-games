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

				<div class="w-100 position-relative">
					<div class="position-absolute">
						<svg class="p-1 bg-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M266.67-40q-27 0-46.84-19.83Q200-79.67 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920h426.66q27 0 46.84 19.83Q760-880.33 760-853.33v746.66q0 27-19.83 46.84Q720.33-40 693.33-40H266.67Zm0-166.67v100h426.66v-100H266.67Zm213.45 83.34q14.21 0 23.71-9.62t9.5-23.83q0-14.22-9.61-23.72-9.62-9.5-23.84-9.5-14.21 0-23.71 9.62-9.5 9.61-9.5 23.83 0 14.22 9.61 23.72 9.62 9.5 23.84 9.5Zm-213.45-150h426.66v-480H266.67v480Zm0-546.67h426.66v-33.33H266.67V-820Zm0 613.33v100-100Zm0-613.33v-33.33V-820Z"/></svg>

						<svg class="p-1 bg-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M329.33-120v-66.67h84V-280H146.67q-27 0-46.84-19.83Q80-319.67 80-346.67v-426.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 46.84 19.83Q880-800.33 880-773.33v426.66q0 27-19.83 46.84Q840.33-280 813.33-280H546.67v93.33h84V-120H329.33ZM146.67-346.67h666.66v-426.66H146.67v426.66Zm0 0v-426.66 426.66Z"/></svg>
					</div>
					<img src="'.$image.'" class="card-img-top" height="200" alt="'.$name.'">
				</div>

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

