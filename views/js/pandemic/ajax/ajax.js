function ajaxPost() 
{
	valores ={score:obj.point};
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

obj.record	= document.getElementById("score").innerHTML;

function Save()
{
	if(ini.className=="php"){
		obj.record	= document.getElementById("score").innerHTML;
		if (obj.point > obj.record) {
			ajaxPost();
			document.getElementById("score").innerHTML = obj.point;
			obj.record = obj.point;
		}
	}
}
