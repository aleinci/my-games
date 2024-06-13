<?php
require "../../models/connection.php";

session_start();

	if (!isset($_SESSION["user"])) 
	{
		header("location: ".$src);
	}else{
		$name=$_SESSION["user"];
	}

$consult = "SELECT * FROM running WHERE name = '$name'";

$results = mysqli_query($connection, $consult);

	$row = mysqli_fetch_row($results);



if (isset($row)) {
	echo json_encode($row);

	//let array = dataP.split(',');
	//let string = array.ToString();
	 
	//echo '<p id="userN" name="userN" hidden="" >'.$row[1].'</p>
	//	<p id="score" name="score" hidden="" >'.$row[2].'</p>';
}
