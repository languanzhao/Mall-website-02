$(function(){
	$(".small_product ul li img").click(function(){
		$("#big").attr("src",$(this).attr("src"));
		$(".box1 img").attr("src",$(this).attr("src"));
		$(this).parent('a').parent('li').addClass("on").siblings().removeClass("on");
	})
	
	$(".box1").html("<img />");
	$(".box1 img").attr("src","images/pro_big.jpg").css({"position":"absolute","width":"1400px"});
	$(".small_box").mouseover(function(){
		$(".box").stop(true,true).fadeIn(300);
		$(".box1").stop(true,true).fadeIn(300);
	})
	$(".small_box").mouseout(function(){
		$(".box").stop(true,true).fadeOut(300);
		$(".box1").stop(true,true).fadeOut(300);
	})
	
	$(".small_box").mousemove(function(e){
		var e =e ||window.event
		var imgX = e.pageX;
		var imgY = e.pageY;
		boxLeft=imgX-$(".box").innerWidth()/2-$(".small_box").offset().left;
		boxTop=imgY-$(".box").innerHeight()/2-$(".small_box").offset().top;
		
		if(boxLeft<0){
			boxLeft=0;
		}else if(boxLeft>$(".small_box").innerWidth()-$(".box").innerWidth()){
			boxLeft=$(".small_box").innerWidth()-$(".box").innerWidth();
		}
		if(boxTop<0){
			boxTop=0;
		}else if(boxTop>$(".small_box").innerHeight()-$(".box").innerHeight()){
			boxTop=$(".small_box").innerHeight()-$(".box").innerHeight();
		}
		$(".box").css({"left":boxLeft,"top":boxTop});
		var count = $(".box1>img").innerWidth()/$(".small_box>img").innerWidth();
		
		$(".box1>img").css({"left":-boxLeft*count+"px"});
		$(".box1>img").css({"top":-boxTop*count+"px"});
			
	})

	$("#num").blur(function(){
		var num;
		num=$(this).val();
		console.log(num)
		if(isNaN(num)){
			num=1;
			$(this).val(num);
			var total=$(this.id.replace("num_","#total_")).text("49.0");
		}else{
			if(num<1){
				num=1;
			}else{
				parseInt(num);
			}
			$(this).val(num);
		}
	})	
//商品数量减操作

	$("#red").click(function(){
		var num=$(this).parent().prev().prev().val();
		console.log(num);
		if(num<=1){
			num=1
		}else{
			num--;
		}
		$(this).parent().prev().prev().val(num);
	})

//商品加操作
	$("#inadd").click(function(){
		var num=$(this).parent().prev().val();
		console.log(num);
		num++;
		parseInt(num);
		$(this).parent().prev().val(num);
	})
	
	
	
	$(".introduce>.list ul li").click(function(){
		
		var	index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".right .show>div").eq(index).show().siblings().hide()
	})
	$(".product .list ul li").each(function(){
		$(this).click(function(){
			var index=$(this).index();
				$(this).addClass("on").siblings().removeClass("on")
				$(".left .product .show>ul").eq(index).show().siblings().hide()
			})
		})
		

})
	function productCar(){
		var imgSrc=["images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg",
					"images/shop_cart01.jpg","images/shop_cart05.jpg","images/shop_cart06.jpg"
		];
		var title=["强生婴儿牛奶沐浴露1300ml保湿沐浴乳男女士温和滋润家庭装男女士","强生婴儿活力清新沐浴露1000ml新生儿童宝宝沐浴露洗护乳全家适用","强生婴儿香桃沐浴露1000ml滋润持久留香沐浴乳清洁全身家庭装适用",
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
		var price=["49.00","89.00","69.00",
		"49.00","89.00","69.00",
		"49.00","89.00","69.00",
		"49.00","89.00","69.00"
		];
		var num = document.getElementById("num").value;
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
		getCarNum();
	}
	
	
	