<?php

	session_start();
	$url = Route::ctrRoute();

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	
	<style type="text/css">
		.bordeIm{
			border-radius: 20px 20px;
			margin: auto;
			width: 500px;
		}
		.textG{
			font-size: 20px;
			color:black;
		}
		body{
			background: #0597d5; 
		}
		.box{
			background: white;
			border: 2px solid lightblue;
		}

		.boxUser{
			background: white;
			border: 4px solid lightgreen;
		}
	</style>
</head>
<body>
	<script src="<?php echo $url; ?>views/js/spaceship/JQuery.js"></script>
	
	

<nav class="navbar navbar-light bg-light">

	<a class="navbar-brand font-weight-bolder text-secondary">COACHTEEN GAMES</a>

	<div class="row justify-content-sm-end">

		<span class="navbar-text font-weight-bolder text-secondary">Welcome: <?php echo $_SESSION["user"]?></span>
		<a href="../../cerrar/cerrar_sesion.php" class="mx-3 btn btn-outline-primary my-2 my-sm-0">Logout</a>

	</div>
	
</nav>



<div class='container'>
	<div class='row mt-5 justify-content-sm-center'>
		<form action="spaceShipLeader" method="post">
			<table>
				<td><input class='btn box' type="submit" onclick="ajaxPost('1')" name="stagE" value="stage_1"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('2')" name="stagE" value="stage_2"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('3')" name="stagE" value="stage_3"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('4')" name="stagE" value="stage_4"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('5')" name="stagE" value="stage_5"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('6')" name="stagE" value="stage_6"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('7')" name="stagE" value="stage_7"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('8')" name="stagE" value="stage_8"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('9')" name="stagE" value="stage_9"></td>
				<td><input class='btn box' type="submit" onclick="ajaxPost('10')" name="stagE" value="stage_10"></td>
			</table>
		</form>

</div>

<div id="mytable"></div>

<?php
require "controllers/spaceship/showData.php";
?>

<script>
	function ajaxPost(num) {
		valores ={stagE:"stage_"+num};
		

		$.ajax({
			url: 'controllers/spaceShip/data.php',
			type:"POST",
			data:valores,
			success: function (data) {
				console.log(data);
			}
		});
	}
	ajaxPost("1");



</script>


</body>
</html>