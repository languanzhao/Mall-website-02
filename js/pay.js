$(function(){
	$(".verify .address label:nth-child(6)").click(function(){
		
		altNum=$(this).children("img").attr("alt");
		var img=$(this).children("img");
		show(img,altNum);
	})
	function show(img,altNum){
		if(altNum==="1"){
			img.attr("src","images/shop_car02.png");
			img.attr("alt","0");
		}else{
			img.attr("src","images/shop_car01.png");
			img.attr("alt","1");
		}
	}
})
