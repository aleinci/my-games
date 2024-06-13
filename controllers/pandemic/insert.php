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

	echo $score;

	$consult = "UPDATE pandemic SET score='$score' WHERE name = '$name'";

	$resultados = mysqli_query($connection, $consult);
	
}









