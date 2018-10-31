 $(function(){
            var spe=0;
            var bool=true;
            var liLen=$(".hot .show li").length;//li的个数
            var liWidth=$(".hot .show li").eq(0).outerWidth(true);//一个li的宽度
            $(".hot .show ul").css({"width":liLen*liWidth+"px"});//整个ul的宽度            

		$(".next").click(function(){
			if(bool){
				bool=false;
				if(liLen>liLen-1){
					$(".hot .show li").eq(0).animate({"left":-liWidth+"px"},function(){
						bool=true;
						$(".hot .show li").eq(0).appendTo(".hot .show ul").css("left",(liLen-1)*liWidth+"px");
					});
					for(var i=1;i<liLen-1;i++){
						$(".hot .show li").eq(i).animate({"left":(i-1)*liWidth+"px"},function(){
							bool=true;
						});
					}
				}
			}
		})
		$(".prev").click(function(){
			if(bool){
				bool=false;
				if(liLen>liLen-1){
					for(var i=0;i<liLen-1;i++){
						$(".hot .show li").eq(i).animate({"left":(i+1)*liWidth+"px"},function(){
							bool=true;
						});				
					}
					$(".hot .show li").eq(liLen-1).prependTo(".hot .show ul").css("left",-liWidth+"px").animate({"left":0+"px"},function(){
							bool=true;
						});
				}
			}
		})
		$(".title>.right>ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		$(".baby .list>div").eq(index).show().siblings().hide();
		$(".ladies .list>.products").eq(index).show().siblings().hide();
		$(".men .list>.products").eq(index).show().siblings().hide();
		$(".goods .show>.box>ul").eq(index).show().siblings().hide();
		})
	
		$(".latest .title>.right>span").click(function(){
			var index=$(this).index();
			$(".latest .show .box").eq(index).show().siblings().hide();
		})
		
				var  AllHet=$(window).height();
				
				var mainHet=$(".selection_top .nav").height();
			
				var fixedTop=(AllHet-mainHet)/2;
				
				$(".selection_top .nav").css({top:fixedTop+'px'})
				$(".selection_top .nav li").click(function(){
					console.log(1)
				$(this).addClass("on").siblings().removeClass("on");
				var ind=$(".selection_top .nav li:not(.selection_top .nav li:nth-child(8))").index(this)+1;
				var topArr=[ $(".hot"),$(".latest"),$(".goods"),$(".recommend"), $(".baby"),$(".ladies"),$(".men")]		
				for(var i=0;i<topArr.length;i++){
					var topVal=topArr[ind-1].offset().top
					break;
				}

				$('body,html').animate({scrollTop:topVal-80+"px"},500)
			})
				$(".selection_top .nav li a.return").click(function(){
				
					$('body,html').animate({scrollTop:0},1000);
			})
			 $(window).scroll(scrolls);

	  	 	scrolls()	
			function scrolls(){
				
			   var fixRight = $(".selection_top .nav li:not(.selection_top .nav li:nth-child(8))");
			   var blackTop = $(".selection_top .nav");
			   var blackul = $(".selection_top .nav ul");
			   var sTop = $(window).scrollTop();
			  console.log(sTop)
		
			  
				if(sTop<600){
				   blackTop.fadeOut(300).css('display','none');
				  	 }
			   else{
				   blackTop.fadeIn(300).css('display','block');
				 
				   }
			   if(sTop>=600){
			   	 fixRight.eq(0).addClass('on').siblings().removeClass('on');
			   }
			   if(sTop>=856){
				   fixRight.eq(1).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>=1335){
				   fixRight.eq(2).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>=2103){
				   fixRight.eq(3).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>=2600){
				   fixRight.eq(4).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>=3360){
				   fixRight.eq(5).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>=4038){
				   fixRight.eq(6).addClass('on').siblings().removeClass('on');
				   }
			   if(sTop>4480){
				   
				   	fixRight.eq(6).removeClass("on");
				   
			   }
	 		}
			

        })
