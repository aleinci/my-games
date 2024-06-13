<?php

	require_once "models/connection.php";
	require "controllers/viewRecord.php";

	$Validaccount = mysqli_query($connection,"SELECT * FROM player WHERE name = '$name'");

	//verificamos si el user exite con un condicional

	if( mysqli_num_rows($Validaccount) == 0) { //no existe la cuenta

		$register = "INSERT INTO player(`name`) VALUES ('$name')";
		$results = mysqli_query($connection, $register);
		echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';

	} else {

		echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';

	}

	mysqli_close($connection);
