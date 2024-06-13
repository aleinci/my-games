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
		<script type="text/javascript" src="<?php echo $url; ?>views/js/player/player.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/player/FX/EffectW.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/player/FX/EffectF.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/player/FX/playerFX.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/obstacle.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/ajax.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/points.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/Menus/gameOver.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/Menus/credits.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/did you know.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/Menus/pause.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/Menus/menus.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/Menus/mainMenu.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/reset.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/function.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/playMusic.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/load_Img_sfx.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/config.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>views/js/script/resolution.js"></script>
	</div>
