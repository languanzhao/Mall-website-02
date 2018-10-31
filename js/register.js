$(function(){
	$("#tel").blur(function(){
		var value=$("#tel").val();
		var reg = /^1[3|4|5|7|8][0-9]{9}$/;
		if(reg.test(value)){
			$(".tel").text("");
		}else{
			$(".tel").html("请输入正确的电话号码");
		}
	})
	$("#check").click(function(){
		altValue=$("#check").attr("alt");
		if(altValue==1){
			$("#check").attr("src","images/shop_car02.png");
			$("#check").attr("alt","0");
		}else{
			$("#check").attr("src","images/shop_car01.png");
			$("#check").attr("alt","1");
		}
	})
	$("#checkHttp>a").each(function(){
		$(this).click(function(){
			var img=$(this).parent().prev()
			var altValue=img.attr("alt");
			if(altValue==1){
				$("#check").attr("src","images/shop_car02.png");
				$("#check").attr("alt","0");
			}else{
				$("#check").attr("src","images/shop_car01.png");
				$("#check").attr("alt","1");
			}
		})
		
	})
	$("#Email").blur(function(){
		var value=$("#Email").val();
		var reg=/^\w{1,6}@[a-z0-9]{1,8}\.(com)|(cn)$/ ;
		if(reg.test(value)){
			$(".Email").text("");
		}else{
			$(".Email").html("你输入的正确邮箱");
		}
	})
	$("#password").blur(function(){
		var value=$("#password").val();
		var reg=/^(\w){6,20}$/;
		if(reg.test(value)){
			$(".password").text("");
		}else{
			$(".password").html("你输入6-20位密码");
		}
	})
	$("#recode").blur(function(){
		var value=$("#recode").val();
		
		if(value){
			$(".recode").text("");
		}else{
			$(".recode").text("请输入正确的验证码");
		}
	})
	$("#confirm").blur(function(){
		var valueP=$("#password").val();
		var valueC=$("#confirm").val();
		if(valueP==valueC){
			$(".confirm").text("");
		}else{
			$(".confirm").html("两次密码不一致<br>请输入正确的密码");
		}
	})
	
})
function submitForm(){
	var tel=document.getElementById("tel").value;
	var Email=document.getElementById("Email").value;
	var password=document.getElementById("password").value;
	var confirm=document.getElementById("confirm").value;
	var islogin=document.getElementById("check").alt;
	var recode=document.getElementById("recode").value;
	console.log(islogin)
	if(!tel || !Email || !password || !confirm ||islogin==="1" || !recode){
		alert("请先注册完整")
		return false;
	}
	
	
	var userInfo={
		tel:tel,
		Email:Email,
		password:password,
		confirm:confirm
	}
	var userData = getUserData('userInfos');
	if(!userData){
		var userInfos=[
			userInfo
		];
		localStorage.setItem("userInfos",JSON.stringify(userInfos));
	}else{
		//如果本地数据不为空
		//将数据抓换成JSON格式的数据
		var data=JSON.parse(userData);
		var bool=true;
		for (var i=0;i<data.length;i++){
			if(data[i].tel == userInfo.tel||data[i].Email ==userInfo.Email){
				alert("该用户已被注册");
				bool=false;
				return false;
				break;
			}
		}
		if(bool){
			data.push(userInfo);
			localStorage.setItem("userInfos",JSON.stringify(data));
		}
	}
	
}
function getUserData(userKey){
	return localStorage.getItem(userKey);
}











