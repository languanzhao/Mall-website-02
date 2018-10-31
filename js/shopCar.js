var keyName="shopCar"
function addShopCar(product){
	var productData = getCar();
	if(!productData){
		var proData=[
			product
		]
		addCar(proData)
	}else{
		var carData=JSON.parse(productData);
		var bool=true;
		for(var i=0;i<carData.length;i++){
			if(carData[i].id==product.id){
				carData[i].num=parseInt(carData[i].num)+parseInt(product.num);
				carData[i].totalPrice=(parseFloat(carData[i].totalPrice)+parseFloat(product.totalPrice))+".00";
				bool=false;
				break;
			}
		}
		if(bool){
			carData.push(product)
		}
		addCar(carData);
	}
}
function getCar(){
	return localStorage.getItem(keyName); 
}
function addCar(productData){
	localStorage.setItem(keyName,JSON.stringify(productData))
}
function delProduce(id){
	var carData=JSON.parse(getCar());
	var arrData=[];
	for(var i=0;i<carData.length;i++){
		if(carData[i].id==id){
			continue;
		}else{
			arrData.push(carData[i])
		}
	}
	
	addCar(arrData);
	getCarNum();
	
}
function getCarNum(){
		var dataProduct=getCar();
		if(!dataProduct){
			$(".badge").text("0");
			$("#checkNum").text("0");
			$("#checkAll").find("img").attr({"src":"images/shop_car01.png","alt":"0"});
			$("#uncheck").find("img").attr({"src":"images/shop_car01.png","alt":"0"});
		}else{
			var carData=JSON.parse(dataProduct);
			carDataLenth=carData.length;
			
			$(".badge").text(carDataLenth);
			$("#checkNum").text(carDataLenth);
		}
	}
function clearCar(){
	localStorage.removeItem(keyName);
}
function clearProAll(){
clearCar();
var ul=$("#product_ul");
if(ul){
		var li=$("#product_ul>li");
		var liLength=li.length;
		for(var i=0;i<liLength;i++){
			ul.remove(i)
		}
	}

}
