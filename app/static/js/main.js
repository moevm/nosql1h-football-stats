
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
	var ImportBlock = new Model("#model-import");
	var CompareBlock = new Model("#model-compare");
	var StatTeamBlock = new Model("#model-stat-team");
	
	$(".block-model .close").on("click",function(){
		ImportBlock.fadeOut();
	});
	$("#model-import .send").on("click",function(){
		
		HrefFile = $("#linkImport").text();
		$.ajax({
			url: 'php/upload.php',
			type: 'POST',
			data:{
				
			},
			success : function(ans){
			
			},
		})
		
		
		
		ImportBlock.fadeOut();
	});
	$("#import").on("click",function(){
		ImportBlock.fadeIn();
	});
	
	
	
	$("#export").on("click",function(){
		window.location.href = '/export/';
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