<?php

require "models/connection.php";


$sql = "SELECT * FROM pandemic ORDER BY score DESC";

$results = mysqli_query($connection, $sql);

$rank = 0;

$num = "0";

// datos de rank del usuario conectado
$uRank 	= "-";
$uName 	= $_SESSION["user"];
$uScore = 0;

echo"
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

		 <tbody>";

while(($row=mysqli_fetch_row($results))==true){
	$rank++;

	echo "<tr>
		      <th scope='row'>".$rank."</th>
		      <td>".$row[1]."</td>
		      <td>".$row[2]."</td>
    	  </tr>";

	if ($row[1]== $_SESSION["user"]) {
		$uRank 	= $rank;
		$uName 	= $row[1];
		$uScore = $row[2];
	}
}

echo "</tbody>
	</table>
  </div>
</div>";
	



echo "
<div class='card w-75  mt-5 boxUser' style='margin:auto;'>
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
?>