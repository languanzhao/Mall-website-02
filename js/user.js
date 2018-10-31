function userCheck(value){
	reg=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
	if(reg.test(value)){
	
		document.getElementById("alertUser").innerHTML="";
	}else{
		document.getElementById("alertUser").innerHTML="你输入的昵称不合法";
	}
}
function yearCheck(){
	value=document.getElementsByTagName("select")[0].value;
	if(value){
		document.getElementById("alertYear").innerHTML="";
	}else{
		document.getElementById("alertYear").innerHTML="你还没有输入年份";
	}
}

function monthCheck(){
	value=document.getElementsByTagName("select")[1].value;
	if(value){
		document.getElementById("alertMonth").innerHTML="";
	}else{
		document.getElementById("alertMonth").innerHTML="你还没有输入月份";
	}
}
function dayCheck(){
	value=document.getElementsByTagName("select")[2].value;
	if(value){
		document.getElementById("alertDay").innerHTML="";
	}else{
		document.getElementById("alertDay").innerHTML="你还没有输入日";
	}
}
function emailCheck(value){
	var reg=/^\w{1,6}@[a-z0-9]{1,8}\.(com)|(cn)$/ ;
	if(reg.test(value)){
		document.getElementById("alertEmail").innerHTML="";
	}else{
		document.getElementById("alertEmail").innerHTML="你输入的邮箱不合法";
	}
}
function nameCheck(value){

	var reg = /^[\u4e00-\u9fa5 ]{2,20}$/;
	var eng=/^[a-z\/ ]{2,20}$/i
	if(reg.test(value)||eng.test(value)){
		document.getElementById("alertName").innerHTML="";
	}else{
		document.getElementById("alertName").innerHTML="请输入合法姓名";
	}
}

$(function(){
	
	$("#sub").click(function(event){
		event.defaultPrevented;
	})
	$(".province").blur(function(){
		value=$(".province").val();
		if(value){
			$("#alertProvince").text("");
		}else{
			$("#alertProvince").text("请输入你所在的省份");
		}
	})
	$(".city").blur(function(){
		value=$(".city").val();
		if(value){
			$("#alertCity").text("");
		}else{
			$("#alertCity").text("请输入你所在的市");
		}
	})
	$(".county").blur(function(){
		value=$(".county").val();
		if(value){
			$("#alertCounty").text("");
		}else{
			$("#alertCounty").text("请输入你所在的县");
		}
	})

	$("form").submit(function(e){
		e.preventDefault();
		
	})
	$("#sub").click(function(){
		if(!$("#user").val()){
			alert("请输入昵称");
			return;
		}else if(!$(".year").val()){
			alert("请输入你的生日");
			return;
		}else if(!$(".month").val()){
			alert("请输入你的生日");
			return;		
		}else if(!$(".day").val()){
			alert("请输入你的生日");
			return;		
		}else if(!$("#email").val()){
			alert("请输入你的邮箱");
			return;
		}else if(!$("#name").val()){
			alert("请输你的姓名");
			return;
		}else if(!$(".province").val()){
			alert("请输入你的地址");
			return;
		}else if(!$(".city").val()){
			alert("请输入你的地址");
			return;		
		}else if(!$(".county").val()){
			alert("请输入你的地址");
			return;		
		}else{
			location.href="index.html";
		}
		
	})
	$("#study>em").each(function(){
		
		$(this).click(function(){
			var id=$(this).attr("data-id");
			console.log(id)
			if(id==0){
				$(this).css("background","yellowgreen")
				$(this).attr("data-id","1")
			}else{
				$(this).css({"background":"#FFFFFF"})
				$(this).attr("data-id","0")
			}
		})
	})
})











