
	function getCarNum(){
			var dataProduct=getCar();
			if(!dataProduct){
				$(".badge").text("0");
			}else{
				var carData=JSON.parse(dataProduct);
				carDataLenth=carData.length;
		
				$(".badge").text(carDataLenth);
			}
		}
	
	function showAddCar(){
		var imgSrc=[
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg"
		];
		var title=[
		"强生婴儿牛奶沐浴露1300ml保湿沐浴乳男女士温和滋润家庭装男女士","强生婴儿活力清新沐浴露1000ml新生儿童宝宝沐浴露洗护乳全家适用","强生婴儿香桃沐浴露1000ml滋润持久留香沐浴乳清洁全身家庭装适用",
		"强生婴儿牛奶沐浴露1300ml保湿沐浴乳男女士温和滋润家庭装男女士","强生婴儿活力清新沐浴露1000ml新生儿童宝宝沐浴露洗护乳全家适用","强生婴儿香桃沐浴露1000ml滋润持久留香沐浴乳清洁全身家庭装适用",
		"强生婴儿牛奶沐浴露1300ml保湿沐浴乳男女士温和滋润家庭装男女士","强生婴儿活力清新沐浴露1000ml新生儿童宝宝沐浴露洗护乳全家适用","强生婴儿香桃沐浴露1000ml滋润持久留香沐浴乳清洁全身家庭装适用",
		"强生婴儿牛奶沐浴露1300ml保湿沐浴乳男女士温和滋润家庭装男女士","强生婴儿活力清新沐浴露1000ml新生儿童宝宝沐浴露洗护乳全家适用","强生婴儿香桃沐浴露1000ml滋润持久留香沐浴乳清洁全身家庭装适用"
		];
		var id=parseInt(Math.random()*12);
		var include=[
		"净含量：1.8kg","净含量：1.5kg","净含量：1kg",
		"净含量：1.8kg","净含量：1.5kg","净含量：1kg",
		"净含量：1.8kg","净含量：1.5kg","净含量：1kg",
		"净含量：1.8kg","净含量：1.5kg","净含量：1kg"
		];
		var price=[
		"49.00","89.00","69.00",
		"49.00","89.00","69.00",
		"49.00","89.00","69.00",
		"49.00","89.00","69.00"
		];
		var num=1;
		var img=imgSrc[id];
		var pc=price[id];
		var te=title[id]
		var product={
			imgSrc:img,
			title:te,
			ic:include[id],
			num:num,
			price:pc,
			id:id,
			totalPrice:(pc*num)+".00"
		}
		
		addShopCar(product);
		getCarNum()
	}
	
$(function(){
	$.getScript("js/city.js",function(data){
		var result=JSON.parse(data);
		
		for(var i=0;i<result.length;i++){
			//ProSort分离他们
			if(result[i].ProSort){
				//通过省份的ProID,获取省份的name
				$("#province").append("<option value='"+result[i].ProID+"'>"+result[i].name+"</option>");
			}
		}
		
	})
	
	$(".sales>ul li:not(.sales>ul li:nth-child(5))").each(function(){
		
		$(this).click(function(){
			var id=$(this).attr("data-id");
			console.log(id)
			if(id==0){
				$(this).css({"background":"#e2dede"})
				$(this).children("a").css("color","#ca5d0d")
				$(this).children("a").children("img").attr("src","images/show_list11.png")
				$(this).attr("data-id","1")
			}else{
				$(this).css({"background":"#FFFFFF"})
				$(this).children("a").css("color","#999999")
				$(this).children("a").children("img").attr("src","images/show_list10.png")
				$(this).attr("data-id","0")
				
			}
		})
	})
		
		
		$(".sales>ul li:nth-child(5)").click(function(){
			var id=$(this).attr("data-id");
			console.log(id)
			if(id==0){
				$(this).css({"background":"#e2dede"})
				$(this).children("a").css("color","#ca5d0d")
				$(this).children("a").children("img:nth-child(1)").attr("src","images/show_list14.png")
				$(this).children("a").children("img:nth-child(2)").attr("src","images/show_list15.png")
				$(this).attr("data-id","1")
			}else{
				$(this).css({"background":"#FFFFFF"})
				$(this).children("a").css("color","#999999")
				$(this).children("a").children("img:nth-child(1)").attr("src","images/show_list03.png")
				$(this).children("a").children("img:nth-child(2)").attr("src","images/show_list04.png")
				$(this).attr("data-id","0")
				
			}
		})
	$(".store>a").each(function(){
		
		$(this).click(function(){
			
			var index=$(this).index()
			var id=$(this).attr("data-id");
			console.log(id)
			if(id==0){
				if(index==0){
					$("#store").attr("src","images/show_pp01.png")
				}else if(index==1){
					$("#big").attr("src","images/show_list08.png")
				}else if(index==2){
					$("#small").attr("src","images/show_pp03.png")
				}
				
				$(this).attr("data-id","1")
			}else{
				if(index==0){
					$("#store").attr("src","images/show_list07.png")
				}else if(index==1){
					$("#big").attr("src","images/show_pp02.png")
				}else if(index==2){
					$("#small").attr("src","images/show_list09.png")
				}
			
			
				$(this).attr("data-id","0")
				
			}
		})
	})
	$(".brand_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
	$(".orgin_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
	$(".function_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
	$(".bottomr_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
	$(".sort_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
	$(".bottom_middle ul li").each(function(){
		var index=$(this).index()
		$(this).click(function(){
		
			$(this).addClass("on").siblings().removeClass("on");
		})
		
	})
})
 

