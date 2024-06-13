<?php

	require "../../models/connection.php";

	session_start();

	if (!isset($_SESSION["user"])) {

		//header("location:../index.php");

	} else {

		$name = $_SESSION["user"];

	}

	$points = $_POST["points"];
	$stage = $_POST["stage"];
	$save = $_POST["save"];

	$test;
		
	

	if (isset($_POST['points'])) {

		echo $points;
		echo $stage;
		echo $save;
		
		if ($save == "true") {

		switch ($stage) {

			case '0':

				$consult = "UPDATE player SET stage_1 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '1':

				$consult = "UPDATE player SET stage_2 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '2':

				$consult = "UPDATE player SET stage_3 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '3':

				$consult = "UPDATE player SET stage_4 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '4':

				$consult = "UPDATE player SET stage_5 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '5':

				$consult = "UPDATE player SET stage_6 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '6':

				$consult = "UPDATE player SET stage_7 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '7':

				$consult = "UPDATE player SET stage_8 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '8':

				$consult = "UPDATE player SET stage_9 = '$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;

			case '9':

				$consult = "UPDATE player SET stage_1 0 ='$points' WHERE name = '$name'";
				$results = mysqli_query($connection, $consult);
				break;
			
			default:

				echo "10";
				break;

			}

		}

	}









