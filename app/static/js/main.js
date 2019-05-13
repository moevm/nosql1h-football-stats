
class Model
{
	constructor(id)
	{
		this.id = id;
	}
	
	fadeIn(){
		$(this.id + ">div").removeClass("fadeOutUp");
		$(this.id).fadeIn(1000);
	}
	fadeOut(){
		$(".block-model>div").addClass("fadeOutUp");
		$(".block-model").fadeOut(1000);
	}
}


$(document).ready(function(){
	
	function readFile(file, callback){
		var reader = new FileReader();
		reader.onload = callback
		reader.readAsText(file);
	}
	
	
	var ImportBlock = new Model("#model-import");
	var CompareBlock = new Model("#model-compare");
	var StatTeamBlock = new Model("#model-stat-team");
	
	$(".block-model .close").on("click",function(){
		ImportBlock.fadeOut();
	});
	$("#model-import .send").on("click",function(e){
		
		var selectedFile = $('#linkImport')[0].files[0];
		var tt;
		readFile(selectedFile, function(e) {
            
            tt = (e.target.result);
			$.ajax({
				url: '/import/',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({
					 'json': tt
				}),
				dataType: "json",
				success : function(ans){
					console.log("-----------");
					console.log(ans);
					
				},
			})
        });
		
		
		
		
		ImportBlock.fadeOut();
	});
	$("#import").on("click",function(){
		ImportBlock.fadeIn();
		
		
		
	});
	

	var datab;
	$.ajax({
			url: '/export/',
			type: 'POST',
			success : function(ans){
				datab =" "+ ans + " ";
				console.log("done")
				
			},
		})
	
	$("#download_link").on("click",function(){
		//datab = "Hello"
		//$("#download_link").href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(datab);
		    this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(datab);
	});
	$("#export").on("click",function(){
		
		
		
	});
	
	
	$("#compare-main").on("click",function()
	{
		CompareBlock.fadeIn();
	})
	$("#model-compare .send").on("click",function(){
		
		console.log("1");
		
		var team1 = $("#team1").val();
		var team2 = $("#team2").val();
		
		team1 = team1.trim();
		team2 = team2.trim();
		
		
		if (team1 != "" && team2 != "" )
		{
			window.location.href = "/compare/f="+team1+"&s=" + team2;
		}
		
	});
	
	$("#stat-team-main").on("click",function()
	{
		StatTeamBlock.fadeIn();
	})
	$("#model-stat-team .send").on("click",function(){
		

		var teamname = $("#team-name-stat").val();
		
		teamname = teamname.trim();

		
		
		if (teamname != "" )
		{
			window.location.href = "/statteam/" + teamname;
		}
		
	});
	
	
	
})