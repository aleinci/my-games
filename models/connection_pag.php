<?php

	/*$db_host = "localhost:3306";
	$db_name = "games_players";
	$db_user = "games_coachteen";
	$db_pass = "g8D4^mp6";*/
	$db_host = "localhost";
	$db_name = "games_players";
	$db_user = "root";
	$db_pass = "";

	try {

		$base = new PDO ("mysql:host=".$db_host."; dbname=".$db_name."", $db_user, $db_pass);
		$base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	} catch(Exception $e) {

		die("Error: " . $e->getMessage());
		
	}

