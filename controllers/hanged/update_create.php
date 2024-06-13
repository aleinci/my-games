<?php

require "models/connection.php";
require "controllers/hanged/viewRecord.php";




$count = mysqli_query($connection,"SELECT * FROM hanged WHERE name = '$name'");
 //verificamos si el user exite con un condicional
if( mysqli_num_rows($count) == 0){//no existe la cuenta
	$register = "INSERT INTO hanged(`name`) VALUES ('$name')";
	$results = mysqli_query($connection, $register);
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}else
{
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}






mysqli_close($connection);
