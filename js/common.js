$(function(){
//	$(".header_top .right ul li.dropdown").click(function(){
//		$(".header_top .right ul li.dropdown>ul").toggle("li.dropdown>ul");
//	})
	$("#header .header_bottom .nav>ul>li").click(function(){
		index=$(this).index();
		$("#header .header_bottom .nav>ul>li>ol").eq(index).toggle("#header .header_bottom .nav>ul>li>ol");
	})
	$("#header .header_bottom .all").click(function(){	
		$("#header .header_bottom .all>ul").toggle("#header .header_bottom .all>ul");
	})

	var lia = $(".article_top .middle .brand .brand_right>span:nth-child(2)");
	var cc = lia.parent().prev().children("ul")
		.children("li:nth-child(8),li:nth-child(9),li:nth-child(10),li:nth-child(11),li:nth-child(12),li:nth-child(13),li:nth-child(14)");
	var dd=lia.children("a").text("更多∨")
	
	lia.click(function(){
		var num=$(this).attr("data-id");
		
		if(num==0){
			lia.children("a").text("更多∧")
			$(this).parent().prev().prev().prev().css("height","70px");
			$(this).attr("data-id","1");
		}else{
			lia.children("a").text("更多∨")
			$(this).parent().prev().prev().prev().css("height","35px");
			$(this).attr("data-id","0");
		}
		cc.toggle()
	})
var allA=$(".all ul li:nth-child(8) a");
var allAt=allA.text("推荐排序∨")
var allul=$(".all ul li:nth-child(8) ul")
allA.click(function(){
		var num=$(this).attr("data-id");
		if(num==0){
			allA.text("推荐排序∧")
			allul.show()
			$(this).attr("data-id","1");
		}else{
			allA.text("推荐排序∨")
			allul.hide()
			$(this).attr("data-id","0");
		}
		
	})
$("#more").click(function(){
	var num=$(this).attr("data-id");
	if(num==0){
		$(this).html("更多合作<span>∧</span>")
		
		$(this).next().show()
		$(this).attr("data-id","1");
	}else{
		$(this).html("更多合作<span>∨</span>")
		$(this).next().hide()
		$(this).attr("data-id","0");
	}
})
var inputSpan=$(".article_top .middle .brand .brand_right>span:nth-child(1)");
var span=inputSpan.parent()
var inputL=inputSpan.parent().prev().prev()
var brand_middle=inputSpan.parent().prev()
var hh = brand_middle.children("ul")
		.children("li:nth-child(1),li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5),li:nth-child(6),li:nth-child(7)");
		
		
		inputSpan.click(function(){
			var num=$(this).attr("data-id");
			if(num==0){
			span.hide()
			brand_middle.hide()
			$(this).parent().prev().prev().prev().css("height","122px");
			inputL.show()
			$(this).attr("data-id","0");
			}
		})
	
$("#return").click(function(){
			inputL.hide()
			span.show()
			brand_middle.show()
			cc.hide()
			$(this).parent().parent().prev().css("height","35px");
			lia.children("a").text("更多∨");
			lia.attr("data-id","0");
					

})
$("#confirm").click(function(){
			var inputl=$(this).prev().prev().children("li").children("label");
			console.log(inputl)
			var inp=inputl.children("input:checked").length
			console.log(inp)
			if(inp>0){
				location.href="pro_details.html"
			}else{
				return false;
			}

})
var lia1 = $(".article_top .middle .sort .sort_right>span");
	var cc1 = lia1.parent().prev().children("ul")
		.children("li:nth-child(4),li:nth-child(5),li:nth-child(6)");
	var dd1=lia1.children("a").text("更多∨")			
lia1.click(function(){
	var num=$(this).attr("data-id");
		
		if(num==0){
			lia1.children("a").text("更多∧")
			$(this).parent().prev().prev().css("height","70px");
			$(this).attr("data-id","1");
		}else{
			lia1.children("a").text("更多∨")
			$(this).parent().prev().prev().css("height","35px");
			$(this).attr("data-id","0");
		}
		cc1.toggle()
})
var cc2=$(".article_top .middle .bottomr")
var lia2=$(".options>span:nth-child(2)")
var dd2=lia2.children("a").text("更多选项 ∨")
lia2.click(function(){
	console.log("a")
	var num=$(this).attr("data-id");
		if(num==0){
			lia2.children("a").text("更多选项 ∧")
			cc2.show()
			$(this).attr("data-id","1");
		}else{
			lia2.children("a").text("更多选项 ∨")
			cc2.hide()
			$(this).attr("data-id","0");
		}	
})

var lia3 = $(".article_top .bottom .middle>.checkbox .more>span");
	var cc3 = lia3.prev().children("ul")
		.children("li:nth-child(4),li:nth-child(5),li:nth-child(6)");
	var dd3=lia3.children("a").text("更多∨")
	lia3.click(function(){
		var num=$(this).attr("data-id");
		
		if(num==0){
			lia3.children("a").text("更多∧")
			cc3.show()
			$(this).attr("data-id","1");
		}else{
			lia3.children("a").text("更多∨")
			cc3.hide()
			$(this).attr("data-id","0");
		}
		
	})
	var lia4 = $("#article .product_introduction .right .promise dl:nth-child(6)>a");
	var cc4 = lia4.next();
	var dd4=lia4.text("支付方式∨")
	lia4.click(function(){
		
		var num=$(this).attr("data-id");
		if(num==0){
			lia4.text("支付方式∧")
			cc4.show()
			$(this).attr("data-id","1");
		}else{
			lia4.text("支付方式∨")
			cc4.hide()
			$(this).attr("data-id","0");
		}
		
	})
	var lia5 = $(".action");
	var cc5 = lia5.parent().next();
	var dd5=lia5.text("更多优惠 ∨")
	lia5.click(function(){
		
		var num=$(this).attr("data-id");
		if(num==0){
			lia5.text("更多优惠∧")
			cc5.show()
			$(this).attr("data-id","1");
		}else{
			lia5.text("更多优惠∨")
			cc5.hide()
			$(this).attr("data-id","0");
		}
		
	})
	

	$(".article_top .bottom .middle>.checkbox .more .left img").each(function(){
		$(this).click(function(){
			altNum=$(this).attr("alt");
			img=$(this)
			show(img,altNum)
		})
	})
	$(".article_top .bottom .middle>.checkbox .more .left span").each(function(){
		$(this).click(function(){
			altNum=$(this).prev().attr("alt");
			img=$(this).prev()
			show(img,altNum)
		})
	})
	
	$(".shipping p:nth-child(2)").click(function(){
			altNum=$(this).children("img:nth-child(1)").attr("alt");		
			img =$(this).children("img:nth-child(1)")
			show(img,altNum)
			
	})
	$(".right .evaluation .all ul li:nth-child(7) a").click(function(){
			altNum=$(this).prev().attr("alt");		
			img =$(this).prev()
			show(img,altNum)
			
	})
	$(".right .evaluation .all ul li:nth-child(7) img").click(function(){
		console.log(1)
			altNum=$(this).attr("alt");	
			
			img =$(this);
			show(img,altNum)
			
	})
	$(".total label span").each(function(){
		$(this).click(function(){
			altNum=$(this).prev().attr("alt");		
			img =$(this).prev()
			show(img,altNum)
		})
	})
	$(".total label img").each(function(){
		$(this).click(function(){
			altNum=$(this).attr("alt");		
			img =$(this) 
			show(img,altNum)
		})
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
	
	var keyName="shopCar"
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
	getCarNum();
	function getCar(){
		return localStorage.getItem(keyName); 
	}

	$(function(){
			var heightW=$(window).height()
			var smallH=$(".small").height();
			var smallTop=(heightW-smallH)/2
			$(".small").css("top",smallTop+"px");
		})
	$("div.small>ul>li:nth-child(7)").click(function(){
			$("body,html").animate({scrollTop:0},1000);
		})
	$("#star h2:nth-child(3) a").each(function(){
			$(this).click(function(){
			var id=$(this).attr("data-id");
			if(id==0){
				$(this).addClass("on");
				$(this).attr("data-id","1")
			}else{
				$(this).removeClass("on");
				$(this).attr("data-id","0")
			}
		})
	})
	$("#home em").each(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
})

		