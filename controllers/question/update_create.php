<?php

require "models/connection.php";
require "controllers/question/viewRecord.php";




$count = mysqli_query($connection,"SELECT * FROM question WHERE name = '$name'");
 //verificamos si el user exite con un condicional
if( mysqli_num_rows($count) == 0){//no existe la cuenta
	$register = "INSERT INTO question(`name`) VALUES ('$name')";
	$results = mysqli_query($connection, $register);
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}else
{
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}






mysqli_close($connection);
