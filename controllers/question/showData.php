<?php

require "models/connection.php";


$sql = "SELECT * FROM question ORDER BY lvl DESC, min ASC, sec ASC";





$results = mysqli_query($connection, $sql);

$rank = 0;

$num = "0";

// datos de rank del usuario conectado
$uRank 	= "-";
$uName 	= $_SESSION["user"];
$uLvl 	= 0;
$uMin 	= 0;
$uSec 	= 0;
	

echo"
<div class='card w-75  mb-5 my-5 box' style='margin:auto;'>
  <div class=''>
	<table class='table'>
		 <thead>
    		<tr>
    			<th scope='col'>#</th>
				<th scope='col'>Name</th>
			    <th scope='col'>Lvl</th>
			    <th scope='col'>Time</th>
			</tr>
		 </thead>

		 <tbody class='bordeIm mt-2'>";

while(($row=mysqli_fetch_row($results))==true){
	$rank++;

	if ($row[4]<10) {
		$num="0";
	}else{
		$num="";
	}

	echo "<tr>
		      <th scope='row'>".$rank."</th>
		      <td>".$row[1]."</td>
		      <td>".$row[2]."</td>
		      <td>".$row[3].":".$num.$row[4]."</td>
    	  </tr>";

	
	if ($row[1]== $_SESSION["user"]) {
		$uRank 	= $rank;
		$uName 	= $row[1];
		$uLvl 	= $row[2];
		$uMin 	= $row[3];
		$uSec 	= $row[4];
	}
	

}
	//echo "</div>";

	if ($uSec<10) {
		$num="0";
	}else{
		$num="";
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
			   	    <th scope='col'>".$uLvl."</th>
			   	    <th scope='col'>".$uMin.":".$num.$uSec."</th>
				</tr>
			</thead>
		</table>
  	</div>
</div>";
?>
	

?>