<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>Games</title>

	<?php

		/*=============================================
		KEEP THE FIXED ROUTE OF THE PROJECT
		=============================================*/
		
		$url = Route::ctrRoute();

	?>
	<link rel="icon" href="<?php echo $url; ?>views/img/icon.png">
	<link href="<?php echo $url; ?>views/css/bootstrap.min.css" rel="stylesheet"> 
	<link href="<?php echo $url; ?>views/css/styles.css" rel="stylesheet"> 
	<script type="text/javascript" src="<?php echo $url; ?>views/js/script/JQuery.js"></script>
	<script type="text/javascript" src="<?php echo $url; ?>views/js/bootstrap.min.js"></script>

</head>

<body>

	<?php

		/*=============================================
		DYNAMIC CONTENT
		=============================================*/

		$routes = array();
		$route = null;
		$infoProduct = null;

		if(isset($_GET["route"])){

			$routes = explode("/", $_GET["route"]);
			$item = "route";
			$value =  $routes[0];

			$listPage = 
			$routes[0] == "login" 			||
			$routes[0] == "register" 		||
			$routes[0] == "gamepage" 		||
			$routes[0] == "spaceShip" 		|| $routes[0] == "spaceShipLeader" 	||
			$routes[0] == "hanged" 			|| $routes[0] == "hangedLeader"	 	||
			$routes[0] == "puzzle" 			|| $routes[0] == "puzzleLeader"		||
			$routes[0] == "question" 		|| $routes[0] == "questionLeader" 	||
			$routes[0] == "pandemic" 		|| $routes[0] == "pandemicLeader"	||
			$routes[0] == "runrun" 			|| $routes[0] == "runrunLeader";

			/*=============================================
			WHITE LIST OF FRIENDLY URL'S
			=============================================*/

			if($listPage){

				include "modules/".$routes[0].".php";

			} else {

				include "modules/error404.php"; 

			}
			
		} else{ 

			include "modules/login.php"; 

		}

	?>

</body>
</html>