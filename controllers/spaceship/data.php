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
	//	echo $stageN."|||||||||||||||||||||||||||||||||||||||||||||||||||||";

		$sql = "SELECT * FROM player ORDER BY $stageN DESC";


		
	}



	

	/*$results = mysqli_query($connection, $sql);

	$rank = 0;
	$uRank;
	$uName;
	$uScore;
	//$stagE
	echo"
	<h2 class='' style='text-align:center; color:white;'></h2>
	<div class='card w-75  mb-5 my-5 box' style='margin:auto;'>
	  <div class=''>
		<table class='table'>
			 <thead>
	    		<tr>
	    			<th scope='col'>#</th>
					<th scope='col'>Name</th>
				    <th scope='col'>Score</th>
				</tr>
			 </thead>

			 <tbody class='bordeIm mt-2'>";

	while(($row=mysqli_fetch_row($results))==true){
		$rank++;

		echo "<tr>
			      <th scope='row'>".$rank."</th>
			      <td>".$row[1]."</td>
			      <td>".$row[$countN]."</td>
	    	  </tr>";

	    if ($row[1]== $_SESSION["user"]) {
			$uRank 	= $rank;
			$uName 	= $row[1];
			$uScore = $row[$countN];
		}
	}

		echo "</tbody>
		</table>
	  </div>
	</div>";

	echo "
	<div class='card w-75  mb-5 my-5 boxUser' style='margin:auto;'>
	    <div class=''>
			<table class='table'>
				<thead>
	    			<tr>
	    				<th scope='col'>".$uRank."</th>
						<th scope='col'>".$uName."</th>
				   	 <th scope='col'>".$uScore."</th>
					</tr>
				</thead>
			</table>
	  	</div>
	</div>";
*/