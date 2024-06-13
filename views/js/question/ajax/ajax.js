function ajaxPost() {
		valores ={lvlP:QuestionLv-1, minP:tMin, segP:tSeg, save:save};
		$.ajax({
			url:srcPhp,
			type:"POST",
			data:valores,
			success: function (data) {
				//console.log(data);
			}
		})
		.done(function () {})

		.fail(function () {})

		.always(function () {});


}	
