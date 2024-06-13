<?php

$url = Route::ctrRoute();

require "controllers/hanged/update_create.php";
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
	<p id="userN" name="userN" hidden=""></p>
	<p id="score" name="score" hidden=""></p>
<canvas id="canvas" width="800" height="800" style="position: absolute;"></canvas>

<script src="<?php echo $url; ?>views/js/hanged/src.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/ajax/jQuery.js"></script>

<script src="<?php echo $url; ?>views/js/hanged/gameplay/keyboard/keyboard.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/words/wordList.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/words/randomWord.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/words/viewHiddenWord.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/menuGameP/menu.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/menuGameP/start.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/menuGameP/scoreBoard.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/score/score.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/animation/lifeAnim.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/animation/comboAnim.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/animation/victoryAnim.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/animation/defeatAnim.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/gameplay/animation/bgAnim.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/mouse.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/resolution.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/changeScene.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/mainMenu/mainMenu.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/mainMenu/credits.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/restart.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/function.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/loadResources.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/update.js"></script>
<script src="<?php echo $url; ?>views/js/hanged/allBtn.js"></script>

<script src="<?php echo $url; ?>views/js/hanged/ajax/ajax.js"></script>
</body>
</html>