<?php 

require "../../models/connection.php";

session_start();

if (!isset($_SESSION["user"])) 
{
	//header("location:../index.php");
}else{
	$name=$_SESSION["user"];
}


//upgrade[0]=invincible; max 2;
//upgrade[0]=life;		 max 1;
//upgrade[0]=magnet;	 max 1;
//upgrade[0]=rainMoney;  max 2;
$invincible = 0;
$life = 0;
$magnet = 0;
$rainMoney = 0;
$upgrade = "".$invincible.",".$life.",".$magnet.",".$rainMoney."";
$array = explode(",", $upgrade);

//$consult = "UPDATE running SET Iupgrade='$upgrade' WHERE name = '$name'";