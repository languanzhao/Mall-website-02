$(function(){
	
	function confirmData(){
		var comData=JSON.parse(localStorage.getItem("checkShop"));
		if(comData){
			var total=0
			for(var i=0;i<comData.length;i++){
				
				var li=$('<li data-id="'+comData[i].id+'"><div class="left">'+						
							'<div class="input">'+	
							'<img src="'+comData[i].imgSrc+'" alt="shop_cart01" /></div>'+
							'<div class="detais"><p>'+comData[i].title+'</p><img src="images/shop_cart02.jpg"/><img src="images/shop_cart03.jpg"/><img src="images/shop_cart04.jpg"/></div>'+
							'<div class="include"><span>'+comData[i].ic+'</span></div></div>'+
							'<div class="right"><div class="price">¥<span id="price_'+comData[i].id+'">'+comData[i].price+'</span></div>'+
							'<div class="num"><span id="num_'+comData[i].id+'">'+comData[i].num+'</span></div>'+	
							'<div class="discount"><span>省27：爱baby</span><img src="images/confirm03.png"/></div>'+
							'<div class="total">¥<span id="total_'+comData[i].id+'">'+comData[i].totalPrice+'</span></div></div></li>');
							$("#product_ul").append(li);
							total+=parseInt(comData[i].totalPrice);
			}
			$(".paymoney").text("¥"+total+".00");
		}
		
	}
	confirmData();

	$(".star>ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
		
	})
	function show(img,altNum){		
		if(altNum==="1"){
				img.attr("src","images/confirm01.png");
				img.attr("alt","0");
			}else{
				img.attr("src","images/confirm06.png");
				img.attr("alt","1");
			}
		}
})
