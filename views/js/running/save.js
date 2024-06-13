let dataP = [];
let dui;
function extractData()
{
	$.ajax({
		url:"controllers/running/data.php",
		method:"POST",
	}).done(function(res){
		dataP = JSON.parse(res);
		dui = dataP[4].split(",");
	});
}

function shopData(value)
{
	let val = value;
	let valu = {item:val};
	$.ajax({
		url:"controllers/running/shop.php",
		method:"POST",
		data:valu,
		success:function(data){console.log(data)}
	}).done(function(res){
		successShop = (res);

		
		if (successShop=="true") {
			extractData();
			shop_menu.shopping.imgS = successShop;
		}else{shop_menu.shopping.imgS = "false";}
	});
}

function InstantiateSaveProgress()
{
	function Save(value) 
	{
		values =value;
		$.ajax({
			url: srcPhp,
			type:"POST",
			data:values,
			success: function (data) {
				//console.log(data);
			}
		});
	}
	save={
		enable:false,
		progress:function(){},
		values:{record:parseInt(dataP[2]),money:parseInt(dataP[3])}
	}

	save.progress=()=>
	{
		if (save.enable)
		{
			save.enable=false;
			save.values.money = parseInt(dataP[3]);
			save.values.money += playerHub.money;

			if (playerHub.distance.current > save.values.record) {
				death_menu.record=true;
				save.values.record = playerHub.distance.current;
			}

			Save({money:save.values.money, score:save.values.record})

		}
		
	}
}



