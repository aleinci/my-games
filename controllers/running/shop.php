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



$price = array("invincible" => array(400, 700),
				"life" 		 => array(900),
				"magnet" 	 => array(500),
				"rainMoney"	 => array(300, 700),
				"hyperSpeed"	 => array(1000));


$shop = $_POST["item"];

if (isset($row) && isset($_POST['item']))
{
	//echo $shop;
	$item = explode(",", $row[4]);
	$success = "";


	if ($shop!="") {
		switch ($shop) {
			case 'invincible':////////////////
				if ($item[0] == "0") {
					
					if ($row[3] >= $price["invincible"][0]) {
						$row[3] -= $price["invincible"][0];
						$success = "true";
						$item[0] = "1";
					}
					else{$success="false";}
				}
				else if($item[0] == "1")
				{
				
					if ($row[3] >= $price["invincible"][1]) {
						$row[3] -= $price["invincible"][1];
						$success = "true";
						$item[0] = "2";
					}
					else{$success="false";}
				}

			break;

			case 'life':////////////////
				if ($item[1] == "0") {
					if ($row[3] >= $price["life"][0]) {
						$row[3] -= $price["life"][0];
						$success="true";
						$item[1] = "1";
					}
					else{$success="false";}
				}

			break;

			case 'magnet':////////////////

				if ($item[2] == "0") {
					if ($row[3] >= $price["magnet"][0]) {
						$row[3] -= $price["magnet"][0];
						$success="true";
						$item[2] = "1";
					}
					else{$success="false";}
				}

			break;

			case 'rainMoney':////////////////

				if ($item[3] == "0") {
					if ($row[3] >= $price["rainMoney"][0]) {
						$row[3] -= $price["rainMoney"][0];
						$success="true";
						$item[3] = "1";
					}
					else{$success="false";}
				}
				else if($item[3] == "1")
				{
					if ($row[3] >= $price["rainMoney"][1]) {
						$row[3] -= $price["rainMoney"][1];
						$success="true";
						$item[3] = "2";
					}
					else{$success="false";}
				}

			break;

			case 'hyperSpeed':////////////////

				if ($item[4] == "0") {
					if ($row[3] >= $price["hyperSpeed"][0]) {
						$row[3] -= $price["hyperSpeed"][0];
						$success="true";
						$item[4] = "1";
					}
					else{$success="false";}
				}

			break;
			
			default:
				$success="false";	
			break;
		}

		$saveItem = implode(",", $item); 

		if ($success=="true") {
			$consult2 = "UPDATE running SET gold='$row[3]', iupgrade='$saveItem' WHERE name = '$name'";

			$results2 = mysqli_query($connection, $consult2);	
		}
	}
	echo $success;
}

