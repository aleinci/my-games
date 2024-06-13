<?php
	require "../models/connection_pag.php";
	require "../models/src.php";

	$user = htmlentities(addslashes($_POST['user']));
	$password = htmlentities(addslashes($_POST['pass']));

	$counter = 0;

	$sql = "SELECT * FROM users WHERE username = :user ";

	$result = $base->prepare($sql);

	$result->execute(array(":user"=>$user));

	while ($register = $result->fetch(PDO::FETCH_ASSOC)) {

		if (password_verify($password, $register["pass"])) $counter++;

	}

	//user register
	if($counter > 0) {

		session_start();
		$_SESSION["user"] = $_POST["user"];
		header("location: ".$src."gamepage");
		

	} else { 

		header("location: ".$src);
		
	}//user not register

	