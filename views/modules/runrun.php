<?php
	
	require "models/connection.php";
	require "controllers/running/update_create.php";

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
	<div id ="ini" class="html">
		
		<canvas id="canvas" width="800" height="800" style="position: absolute;"></canvas>
		<canvas id="canvas2" width="800" height="800" style="position: absolute;"></canvas>

		<div name="scripts">
			<script src="<?php echo $url; ?>views/js/running/JQuery.js"></script>
			<script src="<?php echo $url; ?>views/js/running/src.js"></script>
			<script src="<?php echo $url; ?>views/js/running/Assets.js"></script>
			<script src="<?php echo $url; ?>views/js/Engine/v.0.2/Engine.js"></script>



			<script src="<?php echo $url; ?>views/js/running/player/player.js"></script>


			<!-- ITEMS -->
			<script src="<?php echo $url; ?>views/js/running/items/itemBase.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/money.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/invincible.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/magnet.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/extraLife.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/rainMoney.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/hyperSpeed.js"></script>
			<script src="<?php echo $url; ?>views/js/running/items/movement.js"></script>

			<!-- ENEMIES -->
			<script src="<?php echo $url; ?>views/js/running/enemy/enemy01.js"></script>
			<script src="<?php echo $url; ?>views/js/running/enemy/enemy02.js"></script>
			<script src="<?php echo $url; ?>views/js/running/enemy/enemy03.js"></script>
			<script src="<?php echo $url; ?>views/js/running/enemy/enemy04.js"></script>
			<script src="<?php echo $url; ?>views/js/running/enemy/enemy05.js"></script>

			<!-- PARTICLES -->
			<script src="<?php echo $url; ?>views/js/running/particles/P_money.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_magnet.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_extraLife.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_invincible.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_enemyDeath.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_cursor.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_mainMenuBtn.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_bomb.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_newRecord.js"></script>
			<script src="<?php echo $url; ?>views/js/running/particles/P_timeDecrease.js"></script>

			<!-- BACKGROUND -->
			<script src="<?php echo $url; ?>views/js/running/background/background.js"></script>
			
			<!-- HUD -->
			<script src="<?php echo $url; ?>views/js/running/hud/pOutCamera.js"></script>
			<script src="<?php echo $url; ?>views/js/running/hud/hud.js"></script>
			<script src="<?php echo $url; ?>views/js/running/hud/hPlayerDistance.js"></script>
			<script src="<?php echo $url; ?>views/js/running/hud/hInvincibility.js"></script>
			<script src="<?php echo $url; ?>views/js/running/hud/hHyperSpeed.js"></script>
			<script src="<?php echo $url; ?>views/js/running/hud/startPlay.js"></script>


			<!-- MENUS -->
			<script src="<?php echo $url; ?>views/js/running/menu/button.js"></script>
			<script src="<?php echo $url; ?>views/js/running/menu/pause_menu.js"></script>		
			<script src="<?php echo $url; ?>views/js/running/menu/death_menu.js"></script>
			<script src="<?php echo $url; ?>views/js/running/menu/credits_menu.js"></script>
			<script src="<?php echo $url; ?>views/js/running/menu/shop.js"></script>
			<script src="<?php echo $url; ?>views/js/running/menu/main_menu.js"></script>

			<!-- SAVE -->
			<script src="<?php echo $url; ?>views/js/running/save.js"></script>		


			<script type="text/javascript" src="<?php echo $url; ?>views/js/running/ini.js"></script>	
		</div>
	</div>
</body>
</html>