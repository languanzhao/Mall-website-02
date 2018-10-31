$(function(){
	
	$("#password").blur(function(){
		var value=$("#password").val();
		var reg=/^(\w){6,20}$/;
		if(reg.test(value)){
			$(".password").text("");
		}else{
			$(".password").text("你输入正确的密码");
		}
	})
	$("#user").blur(function(){
		var value=$("#user").val();
		var reg1=/^1[3|4|5|7|8][0-9]{9}$/;
		var reg2=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
		var reg3=/^[\u4e00-\u9fa5 ]{2,20}$/;
		var reg4=/^[a-z\/ ]{2,20}$/i;
		if(reg1.test(value)||reg2.test(value)||reg3.test(value)||reg4.test(value)){
			$(".user").text("");
		}else{
			$(".user").text("请输入正确的会员名或者邮箱或者手机号")
		}
	})
	$("#autoCheck").click(function(){
		var altNum=$(this).prev().attr("alt");
		console.log(altNum)
		if(altNum==1){
			$("#check").attr("src","images/shop_car01.png");
			$("#check").attr("alt","0");
		}else{
			$("#check").attr("src","images/shop_car02.png");
			$("#check").attr("alt","1");
		}
	})
})

function submitInput(){
		var user=document.getElementById("user").value;
		var password=document.getElementById("password").value;
		if(user==""||password==""){
			alert("请先填写用户信息");
			return false;
		}
		//通过key获取本地里面的用户信息
		var userInfos=getUserLoginInfo("userInfos");
		
		if(!userInfos){
			alert("该用户还没有被注册，请先注册");
			return false;
		}else{
			var userData = JSON.parse(userInfos);
			var bool=true;
			for(var i=0;i<userData.length;i++){
				if(userData[i].tel==user||userData[i].Email==user){
					if(userData[i].password==password){		
						bool=false;
						var isLogin=document.getElementById("check").alt;
						setStorage(user,password,isLogin)
						return true;
						break;
					}else{
						alert("你输入的密码不正确");
						return false;
						break;
					}
				}
		
			if(bool){
				alert("该用户还没有被注册！请先注册");
				return false;
				
			}
				
		}
		
	}
}
	function setStorage(user,password,isLogin){
		var userLoginInfo={
			user:user,
			password:password,
			isLogin:isLogin
		}

		if(isLogin==="1"){
			localStorage.setItem("userLoginInfo",JSON.stringify(userLoginInfo));
		}else{
			localStorage.removeItem("userLoginInfo");
		}
		
	}
	function getStorage(){
		var data=localStorage.getItem("userLoginInfo");
		if(data){
			var storageData=JSON.parse(data);
			document.getElementById("user").value = storageData.user;
			document.getElementById("password").value = storageData.password;	
			
			if(storageData.isLogin === "1"){
				document.getElementById("check").alt = storageData.isLogin;
				document.getElementById("check").src="./images/shop_car02.png";
				document.getElementById("check").setAttribute("alt","0");
			}else{
				document.getElementById("check").alt = storageData.isLogin;
				document.getElementById("check").src="./images/shop_car02.png";
				document.getElementById("check").setAttribute("alt","1");
			}
		}
	}
	function getUserLoginInfo(userKey){
		return localStorage.getItem(userKey);
	}
	function  isLoginImg(loginObj){
    	var altNum =loginObj.alt;
		showLogin(altNum,loginObj);
		console.log(loginObj)
		function showLogin(altNum,checkImg){
			if(altNum === "0"){
				checkImg.src="./images/shop_car02.png";
				checkImg.setAttribute("alt","1");
			}else{
				checkImg.src="./images/shop_car01.png";
				checkImg.setAttribute("alt","0");
			}
		}
    }
	
