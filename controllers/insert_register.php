<?php

require "../models/connection_pag.php";
require "../models/src.php";

$user = htmlentities(addslashes($_POST["user"]));
$password = htmlentities(addslashes($_POST["pass"]));
$passR = htmlentities(addslashes($_POST["passR"]));

$counter = 0;

$sql = "SELECT * FROM users WHERE username = :user ";

$result = $base->prepare($sql);

$result->execute(array(":user"=>$user));

while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
	$counter++;
}

if($counter > 0){
	// name in use
	header("location: ".$src."register");

}else{

	//account created

	$pass_encrypt= password_hash($password, PASSWORD_DEFAULT);

	$sqls = "INSERT INTO users (username, pass) VALUES (:user, :pass)";

	$result = $base->prepare($sqls);

	$result->execute(array(":user"=>$user, ":pass"=> $pass_encrypt));

	header("location: ". $src);

	$result->closeCursor();
}

