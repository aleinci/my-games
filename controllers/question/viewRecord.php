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



$consult = "SELECT * FROM question WHERE name = '$name'";

$results = mysqli_query($connection, $consult);

	$row = mysqli_fetch_row($results);


if (isset($row)) {
	echo '<p id="userN" name="userN" hidden="" >'.$row[1].'</p>
			<p id="lvl" name="lvl" hidden="" >'.$row[2].'</p>
			<p id="min" name="min" hidden="" >'.$row[3].'</p>
			<p id="sec" name="sec" hidden="" >'.$row[4].'</p>';
}
