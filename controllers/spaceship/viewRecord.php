<?php

	require_once "models/connection.php";
	require_once "models/src.php";

	session_start();

		if (!isset($_SESSION["user"])) {

			header("location: ".$src);

		} else {

			$name = $_SESSION["user"];

		}

	$consult = "SELECT * FROM player WHERE name = '$name'";

	$results = mysqli_query($connection, $consult);

		$row = mysqli_fetch_row($results);
if (isset($row)) {
	echo '<p id="userN" name="userN" hidden="" >'.$row[1].'</p>
			<p id="stage0" name="stage0" hidden="" >'.$row[3].'</p>
			<p id="stage1" name="stage1" hidden="" >'.$row[4].'</p>
			<p id="stage2" name="stage2" hidden="" >'.$row[5].'</p>
			<p id="stage3" name="stage3" hidden="" >'.$row[6].'</p>
			<p id="stage4" name="stage4" hidden="" >'.$row[7].'</p>
			<p id="stage5" name="stage5" hidden="" >'.$row[8].'</p>
			<p id="stage6" name="stage6" hidden="" >'.$row[9].'</p>
			<p id="stage7" name="stage7" hidden="" >'.$row[10].'</p>
			<p id="stage8" name="stage8" hidden="" >'.$row[11].'</p>
			<p id="stage9" name="stage9" hidden="" >'.$row[12].'</p>';
}else{
	echo '<p id="userN" name="userN" hidden="" ></p>
		<p id="stage0" name="stage0" hidden="" >0</p>
		<p id="stage1" name="stage1" hidden="" >0</p>
		<p id="stage2" name="stage2" hidden="" >0</p>
		<p id="stage3" name="stage3" hidden="" >0</p>
		<p id="stage4" name="stage4" hidden="" >0</p>
		<p id="stage5" name="stage5" hidden="" >0</p>
		<p id="stage6" name="stage6" hidden="" >0</p>
		<p id="stage7" name="stage7" hidden="" >0</p>
		<p id="stage8" name="stage8" hidden="" >0</p>
		<p id="stage9" name="stage9" hidden="" >0</p>';
}
