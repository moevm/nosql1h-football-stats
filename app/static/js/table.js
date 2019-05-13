function showRes(count,name)
	{
		count *=2;
		//console.log("div[name='"+name+"]'");
		$("div[name='"+name+"']").prepend(count);
		//console.log(count,name);
	}
function tableMatch(res)
	{
		var a = 0;
		res.forEach(function(elem){
			a++;
			count = elem.Matches;
			
			name1 = elem['_id'].AwayTeam;
			name2 = elem['_id'].HomeTeam;
				
			
			showRes(count,name1 + "-" + name2)
			
			
		})
		//console.log(a);
	}
	
$(document).ready(function(){
	
	
	




	
})	