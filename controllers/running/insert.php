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
	$money = $_POST["money"];

if (isset($_POST['score'])) 
{

	echo $score;
	echo $money;

	$consult = "UPDATE running SET score='$score', gold='$money' WHERE name = '$name'";


	$resultados = mysqli_query($connection, $consult);
	
}









