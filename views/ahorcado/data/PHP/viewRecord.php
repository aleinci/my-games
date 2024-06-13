<?php

require "conexion.php";

session_start();

	if (!isset($_SESSION["usuario"])) 
	{
		header("location:../index.php");
	}else{
		$nombre=$_SESSION["usuario"];
	}



$consulta = "SELECT * FROM question WHERE nombre = '$nombre'";

$resultados = mysqli_query($conexion, $consulta);

	$fila = mysqli_fetch_row($resultados);



echo '<p id="userN" name="userN" hidden="" >'.$fila[1].'</p>
		<p id="score" name="score" hidden="" >'.$fila[2].'</p>';

