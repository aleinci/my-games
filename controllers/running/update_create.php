<?php

require "models/connection.php";
require "controllers/running/viewRecord.php";




$count = mysqli_query($connection,"SELECT * FROM running WHERE name = '$name'");
 //verificamos si el user exite con un condicional
if( mysqli_num_rows($count) == 0){//no existe la cuenta
	$register = "INSERT INTO running(`name`) VALUES ('$name')";
	$results = mysqli_query($connection, $register);

	$consult = "UPDATE running SET  Iupgrade='0,0,0,0,0' WHERE name = '$name'";

	$results2 = mysqli_query($connection, $consult);
	
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}else
{
	echo '<p id="userN2" name="userN" hidden="" >'.$name.'</p>';
}






mysqli_close($connection);
