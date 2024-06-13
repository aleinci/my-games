<?php

	session_start();
	$url = Route::ctrRoute();

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	
	<style type="text/css">
		.bordeIm{
			border-radius: 20px 20px;
			margin: auto;
			width: 500px;
		}
		.textG{
			font-size: 20px;
			color:black;
		}
		body{
			background: #0597d5; 
		}
		.box{
			background: white;
			border: 2px solid lightblue;
		}

		.boxUser{
			background: white;
			border: 4px solid lightgreen;
		}
	</style>
</head>
<body>

<nav class="navbar navbar-light bg-light">

	<a class="navbar-brand font-weight-bolder text-secondary">COACHTEEN GAMES</a>

	<div class="row justify-content-sm-end">

		<span class="navbar-text font-weight-bolder text-secondary">Welcome: <?php echo $_SESSION["user"]?></span>
		<a href="../../cerrar/cerrar_sesion.php" class="mx-3 btn btn-outline-primary my-2 my-sm-0">Logout</a>

	</div>
	
</nav>



<?php
require "controllers/puzzle/showData.php";
?>


</body>
</html>