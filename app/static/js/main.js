
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
		$(this.id + ">div").addClass("fadeOutUp");
		$(this.id).fadeOut(1000);
	}
}


$(document).ready(function(){
	var ImportBlock = new Model("#model-import");
	
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
		
	});
	
	
	
	
})