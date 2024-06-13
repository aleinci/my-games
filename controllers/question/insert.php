<?php
require "../../models/connection.php";

session_start();

	if (!isset($_SESSION["user"])) 
	{
		//header("location:../index.php");
	}else{
		$name=$_SESSION["user"];
	}

$lvlP = $_POST["lvlP"];
$minP = $_POST["minP"];
$segP = $_POST["segP"];




if (isset($_POST['lvlP'])) 
{

	echo $lvlP;
	echo $minP;
	echo $segP;
	


	$consult = "UPDATE question SET lvl='$lvlP', min='$minP', sec='$segP' WHERE name = '$name'";

	$resultados = mysqli_query($connection, $consult);
	
}









