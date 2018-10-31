$(function(){
	$(window).resize(function(){
	
		location.reload();
		
	})
var index=0;
var winW=$(window).width();
var lunbo;
var liLen=$(".index_banner .bd li").length;
var bool=true;
$(".index_banner .bd li").width(winW);
$(".index_banner .bd ul").css({"width":winW*liLen+"px"});
$(".index_banner .hd li").click(function(){
	index=$(this).index();
	if(bool){
		bool=false;
		$(".index_banner .bd ul").animate({marginLeft:-winW*index+"px"},function(){bool=true;});
		$(".index_banner .hd li").eq(index).addClass("on").siblings().removeClass("on");
		
	}
	})
function show(){
	index++;
		if(index>liLen-1){
		index=0;}
		
		$(".index_banner .bd ul").animate({marginLeft:-winW*index+"px"});
	
		$(".index_banner .hd li").eq(index).addClass("on").siblings().removeClass("on");

	
	}

lunbo=setInterval(show,4000);

$(".index_banner").mouseover(function(){
		clearInterval(lunbo);
	})
$(".index_banner").mouseout(function(){
		lunbo=setInterval(show,4000);
	})

})



