
function getblock()
{
	return `<div>
				<div>
					<a href = "#"></a>
					<span>Team 1</span>
				</div>
				<div>
					<a href = "#"></a>
					<img src = "img/ico/versus.svg">
				</div>
				<div>
					<a href = "#"></a>
					<span>Team 2</span>
				</div>
			</div>`;
}

$(document).ready(function(){
	$("#find-match").on("click",function(){
		var datetime = $("#datetime").val();
		var FullTimeResult = $("#FullTimeResult").val();
		var HalfTimeResult = $("#HalfTimeResult").val();
		var referee = $("#referee").val();
		var team1 = $("#team1").val();
		var team2 = $("#team2").val();
		var FullTimeGoals1 = $("#FullTimeGoals1").val();
		var FullTimeGoals2 = $("#FullTimeGoals2").val();
		var HalfTimeGoals1 = $("#HalfTimeGoals1").val();
		var HalfTimeGoals2 = $("#HalfTimeGoals2").val();
		var Shorts1 = $("#Shorts1").val();
		var Shorts2 = $("#Shorts2").val();
		var ShortsOnTarget1 = $("#ShortsOnTarget1").val();
		var ShortsOnTarget2 = $("#ShortsOnTarget2").val();
		var FoulsCommitted1 = $("#FoulsCommitted1").val();
		var FoulsCommitted2 = $("#FoulsCommitted2").val();
		var Corners1 = $("#Corners1").val();
		var Corners2 = $("#Corners2").val();
		var YellowCards1 = $("#YellowCards1").val();
		var YellowCards2 = $("#YellowCards2").val();
		var RedCards1 = $("#RedCards1").val();
		var RedCards2 = $("#RedCards2").val();
		
		alert("+");
	});
})