function ajaxPost() 
{
	valores ={score:ui.score};
	$.ajax({
		url: srcPhp,
		type:"POST",
		data:valores,
		success: function (data) {
			//console.log(data);
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
}
