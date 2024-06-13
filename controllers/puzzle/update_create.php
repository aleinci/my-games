<?php

require "models/connection.php";
require "controllers/puzzle/viewRecord.php";




$validarCuenta = mysqli_query($connection,"SELECT * FROM puzzle WHERE name = '$name'");
 //verificamos si el user exite con un condicional
if( mysqli_num_rows($validarCuenta) == 0){//no existe la cuenta
	$registro = "INSERT INTO puzzle(`name`) VALUES ('$name')";
	$resultados = mysqli_query($connection, $registro);
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}else
{
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}




mysqli_close($connection);
