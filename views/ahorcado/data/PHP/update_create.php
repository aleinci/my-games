<?php

require "conexion.php";
require "viewRecord.php";




$validarCuenta = mysqli_query($conexion,"SELECT * FROM question WHERE nombre = '$nombre'");
 //verificamos si el user exite con un condicional
if( mysqli_num_rows($validarCuenta) == 0){//no existe la cuenta
	$registro = "INSERT INTO question(`nombre`) VALUES ('$nombre')";
	$resultados = mysqli_query($conexion, $registro);
	echo '<p id="userN2" name="userN" hidden="" >'.$nombre.'</p>';
}else
{
	echo '<p id="userN2" name="userN" hidden="" >'.$nombre.'</p>';
}






mysqli_close($conexion);
