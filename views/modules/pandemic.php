<?php
	require "models/connection.php";
	require "controllers/pandemic/update_create.php";

?>

<!DOCTYPE html>
<html>

<meta name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0' >
<meta name="apple-mobile-web-app-capable" content="yes" /> 
<meta name="mobile-web-app-capable" content="yes" /> 
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="mobile-web-app-status-bar-style" content="black-translucent" />
<head>
	<title></title>
	<style type="text/css">
		html{	
			touch-action: manipulation;
			touch-action: none;
		}
		body{margin: 0px;}
	</style>
</head>
<body>
	<div id ="ini" class="php">
	<canvas id="canvas" width="800" height="800" style="position: absolute;"></canvas>
	<canvas id="canvas2" width="800" height="800" style="position: absolute;"></canvas>

	<script src="<?php echo $url; ?>views/js/pandemic/ajax/JQuery.js"></script>
	<script src="<?php echo $url; ?>views/js/Engine/v.0.2/Engine.js"></script>

	

	<div name="Mini Game: survival">

		<script src="<?php echo $url; ?>views/js/pandemic/src.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/Assets.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/reset.js"></script>

		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/ClassMenu.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/gameState.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/deathMenu.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/mainMenu.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/pauseMenu.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/menu/creditsMenu.js"></script>


		<script src="<?php echo $url; ?>views/js/pandemic/survival/solidObject/block.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/solidObject/posBlock.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/items/extraLife.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/items/shield.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/items/weaponCube.js"></script>
		
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyMold.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyA.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyB.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyC.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyD.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyE.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyCollision.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/loadEnemy.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/enemys/enemyParticleDeath.js"></script>

		<script src="<?php echo $url; ?>views/js/pandemic/survival/controller/touch_controllers.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/controller/pc_controllers.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/player/player.js"></script>	
		<script src="<?php echo $url; ?>views/js/pandemic/survival/player/loadPlayer.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/player/weapon.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/player/menuUpdate.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/survival.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/view/camera.js"></script>	
		<script src="<?php echo $url; ?>views/js/pandemic/survival/HUD.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/map.js"></script>
		<script src="<?php echo $url; ?>views/js/pandemic/survival/func.js"></script>


		
	</div>
	
	<script src="<?php echo $url; ?>views/js/pandemic/shot.js"></script>
	<script src="<?php echo $url; ?>views/js/pandemic/ajax/ajax.js"></script>
	
</body>
</body>
</html>