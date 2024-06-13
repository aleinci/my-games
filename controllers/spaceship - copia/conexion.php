<?php 
//require "../PHP/conexion_pag.php";


/*$db_host 	= "localhost:3306";
$db_nombre 	= "games_players";
$db_usuario = "games_coachteen";
$db_clave 	= "g8D4^mp6";*/

$db_host 	= "localhost";
$db_nombre 	= "jugadores";
$db_usuario = "root";
$db_clave 	= "";

$conexion = mysqli_connect($db_host, $db_usuario, $db_clave, $db_nombre);

if (mysqli_connect_errno()) {
	echo "error al conectar con base de datos";
	exit();
}

mysqli_select_db($conexion, $db_nombre) or die("no se encontro la base de datos");


?>