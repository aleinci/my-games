<?php
	
	require "models/src.php";
	session_start();
	if (!isset($_SESSION["user"])) {

		header("location: ".$src);

	}

?>

<nav class="navbar navbar-light bg-light">

	<a class="navbar-brand font-weight-bolder text-secondary">COACHTEEN GAMES</a>

	<div class="row justify-content-sm-center">

		<a href="leader/puzzle" class="mx-3 btn btn-outline-primary my-2 my-sm-0">puzzle</a>
	</div>

	<div class="row justify-content-sm-end">

		<span class="navbar-text font-weight-bolder text-secondary"><?php echo "Welcome: ".$_SESSION["user"]; ?></span>
		<a href="./controllers/close_sesion.php" class="mx-3 btn btn-outline-primary my-2 my-sm-0">Logout</a>

	</div>
	
</nav>

</div>