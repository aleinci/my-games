<?php

require "models/connection.php";
require_once "models/src.php";

session_start();

if (!isset($_SESSION["user"])) 
{
	header("location: ".$src);
}else{
	$name=$_SESSION["user"];
}



$consult = "SELECT * FROM puzzle WHERE name = '$name'";

$results = mysqli_query($connection, $consult);

$row = mysqli_fetch_row($results);


if (isset($row)) {
	echo '	<div id ="player" hidden="">
				<p id="userN" name="userN" hidden="" >'.$row[1].'</p>
				<p id="score" name="score" hidden="" >'.$row[2].'</p>
			</div>';
}else{
	echo '	<div id ="player" hidden="">
				<p id="userN" name="userN" hidden="" ></p>
				<p id="score" name="score" hidden="" >0</p>
			</div>';
}
