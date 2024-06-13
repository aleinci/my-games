<?php 

	/*$db_host = "localhost:3306";
	$db_name = "games_players";
	$db_user = "games_coachteen";
	$db_pass = "g8D4^mp6";*/
	$db_host = "localhost";
	$db_name = "games_players";
	$db_user = "root";
	$db_pass = "";

	$connection = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

	if (mysqli_connect_errno()) {
		echo "Error to connect to the database";
		exit();
	}

	mysqli_select_db($connection, $db_name) or die("the database was not found");

