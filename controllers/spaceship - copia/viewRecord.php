<?php

require "conexion.php";

session_start();

	if (!isset($_SESSION["usuario"])) 
	{
		header("location:../index.php");
	}else{
		$nombre=$_SESSION["usuario"];
	}



$consulta = "SELECT * FROM jugador WHERE nombre = '$nombre'";

$resultados = mysqli_query($conexion, $consulta);

	$fila = mysqli_fetch_row($resultados);



echo '<p id="userN" name="userN" hidden="" >'.$fila[1].'</p>
		<p id="stage0" name="stage0" hidden="" >'.$fila[3].'</p>
		<p id="stage1" name="stage1" hidden="" >'.$fila[4].'</p>
		<p id="stage2" name="stage2" hidden="" >'.$fila[5].'</p>
		<p id="stage3" name="stage3" hidden="" >'.$fila[6].'</p>
		<p id="stage4" name="stage4" hidden="" >'.$fila[7].'</p>
		<p id="stage5" name="stage5" hidden="" >'.$fila[8].'</p>
		<p id="stage6" name="stage6" hidden="" >'.$fila[9].'</p>
		<p id="stage7" name="stage7" hidden="" >'.$fila[10].'</p>
		<p id="stage8" name="stage8" hidden="" >'.$fila[11].'</p>
		<p id="stage9" name="stage9" hidden="" >'.$fila[12].'</p>';

