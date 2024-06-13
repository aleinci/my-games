<?php



$stageN;
$countN=3;


	if (!isset($_POST["stagE"])) 
	{
		$sql = "SELECT * FROM player ORDER BY stage_1 DESC";
	}else{
		$stageN = $_POST['stagE'];

		if ($_POST['stagE']=="stage_1") {
			$countN=3;
		}
		switch ($_POST['stagE']) {
			case 'stage_1':
				$countN=3;
				break;

			case 'stage_2':
				$countN=4;
				break;

			case 'stage_3':
				$countN=5;
				break;

			case 'stage_4':
				$countN=6;
				break;

			case 'stage_5':
				$countN=7;
				break;

			case 'stage_6':
				$countN=8;
				break;

			case 'stage_7':
				$countN=9;
				break;

			case 'stage_8':
				$countN=10;
				break;

			case 'stage_9':
				$countN=11;
				break;

			case 'stage_10':
				$countN=12;
				break;
			
			default:
				$countN=3;
				break;
		}

		$sql = "SELECT * FROM player ORDER BY $stageN DESC";
	}
	
