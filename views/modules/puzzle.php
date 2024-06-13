<?php
	require "models/connection.php";
	require "controllers/puzzle/update_create.php";

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		body{margin: 0;}
		html{
			touch-action: manipulation;
			touch-action: none;
		}
	</style>
</head>
<body>

	<canvas id="canvas" style="position: absolute;"></canvas>

	<div>
		<script src="<?php echo $url; ?>views/js/puzzle/ajax/JQuery.js"></script>

		<script src="<?php echo $url; ?>views/js/Engine.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/src.js"></script>

		<script src="<?php echo $url; ?>views/js/puzzle/AssestLoad.js"></script>
		
		<script src="<?php echo $url; ?>views/js/puzzle/restart.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/random.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/Update.js"></script>
		
		<script src="<?php echo $url; ?>views/js/puzzle/sceneTransition.js"></script>
		
		<script src="<?php echo $url; ?>views/js/puzzle/Quest.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/animation/animation.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/animation/answer.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/hud/ui.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/hud/save.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/hud/pause.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/gameplay/hud/gameOver.js"></script>

		<script src="<?php echo $url; ?>views/js/puzzle/mainMenu/mainMenu.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/mainMenu/credits.js"></script>
		<script src="<?php echo $url; ?>views/js/puzzle/Start.js"></script>

		<script src="<?php echo $url; ?>views/js/puzzle/ajax/ajax.js"></script>

	</div>

	
</body>
</html>