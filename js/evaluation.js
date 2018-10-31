//window.onload=function(){
//		var oBox=document.getElementById("star");
//		var oSpan=oBox.getElementsByTagName("a");
//		
//		for(var i=0;i<oSpan.length;i++){
//		oSpan[i].onmouseover=function(){
//		for(var j=0;j<this.id;j++){
//		oSpan[j].className="current";
//		}
//		};
//		var star=true;
//		oSpan[i].onmouseout=function(){
//		if(!star)return;
//		for(var j=0;j<this.id;j++){
//		oSpan[j].className="";
//		}
//		};
//		oSpan[i].onclick=function(){
////		if(!star){
//////		star=true;
////		for(var j=0;j<this.id;j++){
////		oSpan[j].className="";
////		}
////		}else{
////		star=false;
////		for(var j=0;j<this.id;j++){
////		oSpan[j].className="current";
////		}
////		}
//			console.log(i)
//		};
//		}
//		}


$(function(){
	$("#star a").click(function(){
		index=$(this).index()
		for(var i=0;i<=index;i++){
			
			$("#star a").eq(i).addClass("on");
		}
//		true=$("#star a").eq(index).addClass("on");
		for(var i=index;i<5;i++){
			$("#star a").eq(i+1).removeClass("on");
		}
		
	})
})
	

