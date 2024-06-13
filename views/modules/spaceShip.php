<?php

    include 'models/functions.php';
	require "models/connection.php";
	require "controllers/spaceship/update_create.php";

?>
<style type="text/css">
	body{margin: 0;}
	html{
		touch-action: manipulation;
		touch-action: none;
	}
</style>

	<div id="cvs">
	
		<canvas id="canvas" width="680px" height="480px" style="position: absolute;">
		
		</canvas>

	</div>


	<div>
	

		<script src="<?php echo $url; ?>views/js/spaceShip/src.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/JQuery.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/vue.js"></script>
		

		<script src="<?php echo $url; ?>views/js/spaceShip/player/player.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/player/FX/effectV.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/player/FX/effectF.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/player/FX/playerFX.js"></script>

		


		<script src="<?php echo $url; ?>views/js/spaceShip/obstacle.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/ajax.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/points.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/Menus/gameOver.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/Menus/credits.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/did you know.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/Menus/pause.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/Menus/menus.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/Menus/mainMenu.js"></script>


		<script src="<?php echo $url; ?>views/js/spaceShip/reset.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/function.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/playMusic.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/load_Img_sfx.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/config.js"></script>

		<script src="<?php echo $url; ?>views/js/spaceShip/resolucion.js"></script>


	</div>
