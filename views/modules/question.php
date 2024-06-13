<?php
	require "models/connection.php";
	require "controllers/question/update_create.php";

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
<body style="margin: 0px;">
	<canvas id="canvas" width="800" height="800" style="position: absolute;"></canvas>

	<script src="<?php echo $url; ?>views/js/question/src.js"></script>
	
	<script src="<?php echo $url; ?>views/js/question/ajax/jQuery.js"></script>


	<script src="<?php echo $url; ?>views/js/question/questionsDifficulty.js"></script>
	<script src="<?php echo $url; ?>views/js/question/randomizedQuestion/randomQuestion.js"></script>

	<script src="<?php echo $url; ?>views/js/question/gamePlay/gameplay.js"></script>
	<script src="<?php echo $url; ?>views/js/question/gamePlay/control.js"></script>
	<script src="<?php echo $url; ?>views/js/question/gamePlay/QuestionVerify.js"></script>

	<script src="<?php echo $url; ?>views/js/question/gamePlay/start/start.js"></script>

	<script src="<?php echo $url; ?>views/js/question/lvl_1/question1.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_2/question2.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_3/question3.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_4/question4.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_5/question5.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_6/question6.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_7/question7.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_8/question8.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_9/question9.js"></script>
	<script src="<?php echo $url; ?>views/js/question/lvl_10/question10.js"></script>

	<script src="<?php echo $url; ?>views/js/question/gamePlay/playingScn/startGame.js"></script>
	<script src="<?php echo $url; ?>views/js/question/gamePlay/playingScn/endGame.js"></script>
	<script src="<?php echo $url; ?>views/js/question/gamePlay/playingScn/victoryGame.js"></script>

	<script src="<?php echo $url; ?>views/js/question/restart.js"></script>
	<script src="<?php echo $url; ?>views/js/question/menu/credits.js"></script>
	<script src="<?php echo $url; ?>views/js/question/menu/mainMenu.js"></script>

	<script src="<?php echo $url; ?>views/js/question/changeScene.js"></script>

	<script src="<?php echo $url; ?>views/js/question/score/score.js"></script>



	<script src="<?php echo $url; ?>views/js/question/function.js"></script>

	<script src="<?php echo $url; ?>views/js/question/ajax/ajax.js"></script>


	<script src="<?php echo $url; ?>views/js/question/multimedia.js"></script>
	<script src="<?php echo $url; ?>views/js/question/mouse.js"></script>
	<script src="<?php echo $url; ?>views/js/question/resolution.js"></script>
	<script src="<?php echo $url; ?>views/js/question/script.js"></script>

	
</body>
</html>