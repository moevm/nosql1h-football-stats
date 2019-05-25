function clean(obj) {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] == "") {
      delete obj[propName];
    }
  }
}
function getblock(HomeTeam, AwayTeam,date)
{
	return `<div>
				<div>
					<a href = "/statteam/${HomeTeam}"></a>
					<span>${HomeTeam}</span>
				</div>
				<div>
					<a href = "/statMatch/date=${date}&n=${HomeTeam}&f=${AwayTeam}"></a>
					<img src = "static/img/ico/versus.svg">
				</div>
				<div>
					<a href = "/statteam/${AwayTeam}"></a>
					<span>${AwayTeam}</span>
				</div>
				<div>${date}</div>
			</div>`;
}
$(document).ready(function(){
	
	
	$("#find-match").on("click",function(){
		var datetime1 = $("#Date-time").val();
		console.log(datetime1);
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
		
		
		
		
		var a = {
                    'Date' : $("#Date-time").val(),
					'FTR' : $("#FullTimeResult").val(),
					'HTR' : $("#HalfTimeResult").val(),
					'Referee' : $("#referee").val(),
					'HomeTeam' : $("#team1").val(),
					'AwayTeam' : $("#team2").val(),
					'FTHG' : $("#FullTimeGoals1").val(),
					'FTAG' : $("#FullTimeGoals2").val(),
					'HTHG' : $("#HalfTimeGoals1").val(),
					'HTAG' : $("#HalfTimeGoals2").val(),
					'HS' : $("#Shorts1").val(),
					'AS' : $("#Shorts2").val(),
					'HST' : $("#ShortsOnTarget1").val(),
					'AST' : $("#ShortsOnTarget2").val(),
					'HF' : $("#FoulsCommitted1").val(),
					'AF' : $("#FoulsCommitted2").val(),
					'HC' : $("#Corners1").val(),
					'AW' : $("#Corners2").val(),
					'HY' : $("#YellowCards1").val(),
					'AY' : $("#YellowCards2").val(),
					'HR' : $("#RedCards1").val(),
					'AR' : $("#RedCards2").val()
                };
				clean(a);
		console.log(a);
		
		$.ajax({
                url: '/findmatch/find/',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(a),
                dataType: "json",
                success: function (ans) {
					$(".search").empty();
					
                    ans.forEach(function(match){
						console.log(match);
						$(".search").append(getblock(match.HomeTeam,match.AwayTeam,match.Date));
					})
                },
                error: function (ans) {

                }
            });
	});
})