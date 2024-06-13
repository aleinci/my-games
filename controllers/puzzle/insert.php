<?php
require "../../models/connection.php";

session_start();

	if (!isset($_SESSION["user"])) 
	{
		//header("location:../index.php");
	}else{
		$name=$_SESSION["user"];
	}

$score = $_POST["score"];


if (isset($_POST['score'])) 
{

	//echo $score;

	$consult = "UPDATE puzzle SET score='$score' WHERE name = '$name'";

	$results = mysqli_query($connection, $consult);
	
}




