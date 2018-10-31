$(function(){
	//单击实现全选
	$("#checkAll").click(function(){
		
		altNum=$(this).children("img").attr("alt");
		console.log(altNum)
		var img=$(this).children("img")
		if(altNum==="0"){
			img.attr("src","images/shop_car02.png");
			img.attr("alt","1");
			$("img[id^=input_]").each(function(){
				$(this).attr({"src":"images/shop_car02.png","alt":"1"});
				
			})
		}else{
			img.attr("src","images/shop_car01.png");
			img.attr("alt","0");
			$("img[id^=input_]").each(function(){
				$(this).attr({"src":"images/shop_car01.png","alt":"0"});
			})
		}
		
		checkNum();
		calSum();
//		var sum=0;
//			var alt=$("img[id^=input_]");
//			var altLength=$("img[id^=input_]").length
//			for(var i=0;i<altLength;i++){
//				sum+=parseInt(alt.eq(i).attr("alt"));
//			}
//		img.attr("src",$("img[id^=input_]").length==sum?"images/shop_car02.png":"images/shop_car01.png");
		
	})
	

	//反选功能
	$("#uncheck").click(function(){
		altNum=$(this).children("img").attr("alt");
		img=$(this).children("img")
		if(altNum==="0"){
			img.attr("src","images/shop_car02.png");
			img.attr("alt","1");
		}else{
			img.attr("src","images/shop_car01.png");
			img.attr("alt","0");
		}
		$("img[id^=input]").each(function(){
			altNum=$(this).attr("alt");
			if(altNum==="0"){
				$(this).attr("src","images/shop_car02.png");
				$(this).attr("alt","1");
			}else{
				$(this).attr("src","images/shop_car01.png");
				$(this).attr("alt","0");
			}
			var sum=0;
				var alt=$("img[id^=input_]");
				var altLength=$("img[id^=input_]").length
				for(var i=0;i<altLength;i++){
					sum+=parseInt(alt.eq(i).attr("alt"));
				}
				var img1=$("#checkAll").children("img")
			
				console.log($("img[id^=input_]").length);
				console.log(sum)
				if($("img[id^=input_]").length==sum){
						
					img1.attr("src","images/shop_car02.png")
					img1.attr("alt","1")
					if($("img[id^=input_]").length==0){
							img1.attr("src","images/shop_car01.png");
							img1.attr("alt","0");
							img.attr("src","images/shop_car01.png");
							img.attr("alt","0");
						}
				}else{
					img1.attr("src","images/shop_car01.png")
					img1.attr("alt","0")
				}
			
			calSum();
			checkNum();
		})
	})
	
	
	//商品加操作
	
	//商品的总价格
	function calSum(){
		var sum=0;
		$("img[id^=input_]").each(function(){
			if($(this).attr("src")=="images/shop_car02.png"){
				var total=$(this.id.replace("input_","#total_")).text()
				sum+=Number(total);
			}
		})
		$("#total_price").text(sum+".00元");
	}

	
	
		
		

		
	
		function loadCar(){
		var carData=JSON.parse(getCar());
		
		if(carData){
		
			for(var i=0;i<carData.length;i++){
				var li=$('<li data-id="'+carData[i].id+'"><div class="left">'+						
							'<div class="input"><img src="images/shop_car01.png" alt="0" id="input_'+carData[i].id+'"/>'+	
							'<a href="pro_details.html"><img src="'+carData[i].imgSrc+'" alt="shop_cart01" /></a></div>'+
							'<div class="detais"><p><a href="pro_details.html">'+carData[i].title+'</a></p><img src="images/shop_cart02.jpg"/><img src="images/shop_cart03.jpg"/><img src="images/shop_cart04.jpg"/></div>'+
							'<div class="include"><span>'+carData[i].ic+'</span></div></div>'+
							'<div class="right"><div class="price">¥<span id="price_'+carData[i].id+'">'+carData[i].price+'</span><a href="#">促销&or;</a></div>'+
							'<div class="num"><a href="javascript:;" id="reduce">-</a><input type="text" placeholder="1" id="num_'+carData[i].id+'" value="'+carData[i].num+'"/><a href="javascript:;" id="add">+</a></div>'+	
							'<div class="total">¥<span id="total_'+carData[i].id+'">'+carData[i].totalPrice+'</span></div>'+
							'<div class="del"><a href="javascript:;">移入收藏夹</a><a href="javascript:void(0);" id="del_'+carData[i].id+'">删除</a></div></div></li>');	
							$("#product_ul").append(li);
			}
			//判断全选按钮是否需要被选中
				$("img[id^=input_]").each(function(){
				$(this).click(function(){
					altNum=$(this).attr("alt");
					if(altNum==="0"){
						$(this).attr("src","images/shop_car02.png");
						$(this).attr("alt","1");
					}else{
						$(this).attr("src","images/shop_car01.png");
						$(this).attr("alt","0");
						$("#checkAll").children("img").attr("alt","0")
					}
					var sum=0;
					var alt=$("img[id^=input_]");
					var altLength=$("img[id^=input_]").length
					for(var i=0;i<altLength;i++){
						sum+=parseInt(alt.eq(i).attr("alt"));
					}
					var img =$("#checkAll").children("img")
					img.attr("src",$("img[id^=input_]").length==sum?"images/shop_car02.png":"images/shop_car01.png");
					checkNum();
					calSum();
					
					
				})
			})
				//商品数量的校验
			$("input[id^=num_]").each(function(){
				$(this).blur(function(){
					var num;
					num=$(this).val();
					id=$(this).parent().parent().parent().attr("data-id");
					console.log(id);
					console.log(num);
					if(isNaN(num)){
						num=1;
						$(this).val(num);
						var total=$(this.id.replace("num_","#total_")).text("49.00");
					}else{
						if(num<1){
							num=1;
						}else{
							parseInt(num);
						}
						$(this).val(num);
					
						/*this.id=num1
						 * num换成#price
						 * this.id=price_1
						*/
						var price=$(this.id.replace("num_","#price_")).text();	
						var sum=num*price+".00";
						var total=$(this.id.replace("num_","#total_")).text(sum);
						calSum();
						changeCarNum(id,num,sum)
					}
					
					
				})	
			})
			//商品数量减操作
			$(".num>#reduce").each(function(){
				$(this).click(function(){
					id=$(this).parent().parent().parent().attr("data-id");
				
					var num=$(this).next().val();
					
					if(num<=1){
						num=1
					}else{
						num--;
					}
					$(this).next().val(num);
					var sum=0;
					parseInt(num);		
					var price=$(this).parent().prev().children("span").text();
					var sum=num*price+".00";
					
					var total=$(this).parent().next().children("span").text(sum);
					calSum();
					changeCarNum(id,num,sum);
				})
			})
			$(".num>#add").each(function(){
				$(this).click(function(){
					id=$(this).parent().parent().parent().attr("data-id");
					
					
					var num=$(this).prev().val();
					num++;
					parseInt(num);
					$(this).prev().val(num);
					
					var sum=0;
					parseInt(num);		
					var price=$(this).parent().prev().children("span").text();
					var sum=num*price+".00";
					
					var total=$(this).parent().next().children("span").text(sum);
					
					calSum();
					changeCarNum(id,num,sum);
				})
			})
			$("#delcheck").click(function(){
				if(confirm("是否删除选中商品")){
					$("img[id^=input_]").each(function(){
							altNum = $(this).attr("alt");
							if(altNum == 1){
								id=$(this).parent().parent().parent().attr("data-id");
								delProduce(id);
								$(this).parent().parent().parent().remove();
								calSum();
								checkNum();
									
									}else{
								return;
							}
								var sum=0;
								var alt=$("img[id^=input_]");
								var altLength=$("img[id^=input_]").length
								for(var i=0;i<altLength;i++){
									sum+=parseInt(alt.eq(i).attr("alt"));
								}
								var img1=$("#checkAll").children("img")
								var img2=$("#uncheck").children("img")
								
								if($("img[id^=input_]").length==sum){
										
									img1.attr("src","images/shop_car02.png")
									img1.attr("alt","1")
									if($("img[id^=input_]").length==0){
											img1.attr("src","images/shop_car01.png");
											img1.attr("alt","0");
											img2.attr("src","images/shop_car01.png");
											img2.attr("alt","0");
										}
								}else{
									img1.attr("src","images/shop_car01.png")
									img1.attr("alt","0")
								}
							})
							
					}else{
						return
					}
					
				
			})
			$("[id^=del_]").each(function(){
				$(this).click(function(){
					if(confirm("是否删除此产品")){
						id=$(this).parent().parent().parent().attr("data-id");
						delProduce(id);
						$(this).parent().parent().parent().remove();
						calSum();
						checkNum();
							var sum=0;
								var alt=$("img[id^=input_]");
								var altLength=$("img[id^=input_]").length
								for(var i=0;i<altLength;i++){
									sum+=parseInt(alt.eq(i).attr("alt"));
								}
								var img1=$("#checkAll").children("img")
								
								var img2=$("#uncheck").children("img")
								if($("img[id^=input_]").length==sum){
										
									img1.attr("src","images/shop_car02.png")
									img1.attr("alt","1")
									if($("img[id^=input_]").length==0){
											img1.attr("src","images/shop_car01.png");
											img1.attr("alt","0");
											img2.attr("src","images/shop_car01.png");
											img2.attr("alt","0");
										}
								}else{
									img1.attr("src","images/shop_car01.png")
									img1.attr("alt","0")
								}
					}else{
						return 
					}
					
				
					
				})
			})
			function changeCarNum(id,num,sum){
				var carData=JSON.parse(getCar());
				for(var i=0;i<carData.length;i++){
					if(carData[i].id==id){
						carData[i].num=num;
						carData[i].totalPrice=sum;
						break
					}
				}
				addCar(carData);
			}
		}
		
	}
	loadCar();
	function checkNum(){
		$("[id^=input_]").each(function(){
			var sumNum=0;
			var alt=$("img[id^=input_]");
			var altLength=$("img[id^=input_]").length;
			
			if(altLength==0){
				$("#checkNum").text(0);
			}else{
				for(var i=0;i<altLength;i++){
					sumNum+=parseInt(alt.eq(i).attr("alt"));
				}
				$("#checkNum").text(sumNum);
			}
			
			
			
		})
		
		
	}
	
	
})
	function checkShopSum(){
		var carData=JSON.parse(getCar());
		var checkData=[];
		var id;
	
		$("[id^=input_]").each(function(){
			altNum=$(this).attr("alt");
			if(altNum==="1"){
				id=$(this).parent().parent().parent().attr("data-id")
				console.log(id)
				for(var i=0;i<carData.length;i++){
					if(carData[i].id==id){
						checkData.push(carData[i]);
						localStorage.setItem("checkShop",JSON.stringify(checkData));
					}
				}
			}
			var sum=0;
			var img=$("[id^=input_]")
			for(var i=0;i<img.length;i++){
				sum+=parseInt(img[i].getAttribute("alt"));
			}
			if(sum==0){
				alert("请勾选你要购买的商品");
				return false;
			}else{
				
				location.href="confirm.html"
			}
			
		})
		
	}
	