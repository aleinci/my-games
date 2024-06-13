<?php
require "conexion.php";

session_start();

	if (!isset($_SESSION["usuario"])) 
	{
		//header("location:../index.php");
	}else{
		$nombre=$_SESSION["usuario"];
	}

$puntos = $_POST["puntos"];
$stage = $_POST["stage"];
$save = $_POST["save"];


$prub;
	
$probando = $prub['prueba'];
echo $probando;


if (isset($_POST['puntos'])) 
{

	echo $puntos;
	echo $stage;
	echo $save;
	
	if ($save == "true") {


	switch ($stage) {
		case '0':
			$consulta = "UPDATE jugador SET stage_1='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '1':
			$consulta = "UPDATE jugador SET stage_2='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;
		case '2':
			$consulta = "UPDATE jugador SET stage_3='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '3':
			$consulta = "UPDATE jugador SET stage_4='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '4':
			$consulta = "UPDATE jugador SET stage_5='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;
		case '5':
			$consulta = "UPDATE jugador SET stage_6='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '6':
			$consulta = "UPDATE jugador SET stage_7='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '7':
			$consulta = "UPDATE jugador SET stage_8='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;
		case '8':
			$consulta = "UPDATE jugador SET stage_9='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;

		case '9':
			$consulta = "UPDATE jugador SET stage_10='$puntos' WHERE nombre = '$nombre'";

			$resultados = mysqli_query($conexion, $consulta);
			break;
		
		default:
			echo "10";
			break;
		}


	}
}









