<?php
require "conexion.php";

session_start();

	if (!isset($_SESSION["usuario"])) 
	{
		//header("location:../index.php");
	}else{
		$nombre=$_SESSION["usuario"];
	}

$scoreP = $_POST["score"];



$prub;
	
$probando = $prub['prueba'];
echo $probando;


if (isset($_POST['scoreP'])) 
{

	echo $scoreP;


	$consulta = "UPDATE question SET score='$scoreP' WHERE nombre = '$nombre'";

	$resultados = mysqli_query($conexion, $consulta);
	
}









