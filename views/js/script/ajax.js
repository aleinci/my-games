function ajaxPost() {

	/*$('form').submit(function(e){
		e.preventDefault();
		data1 =  $(this).serializeArray();
		data1.push({puntos:puntos, stage:mapN, save:save});*/
		valores ={points:puntos, stage:mapN, save:save};
		$.ajax({

			url: 'controllers/spaceship/insert.php',
			type:"POST",
			//dataType:"html",
			//data:data1,
			data:valores,
			success: function (data) {
				console.log(data);
			}

		})
		.done(function () {

			//console.log("success");
			//console.log(this.data);
			
		})
		.fail(function () {

			//console.log("error");

		})
		.always(function () {

			//console.log("complete");

		});
	//});

}	

function prevent(e){
	
	e.preventDefault();
	
}

/*
setInterval(function() {
    $("p").load("PHP/viewRecord.php");
},10000);
*/
