$(function(){
	$.getScript("js/city.js",function(data){
		//得到的是浏览器字符串形式的保存起来的数据，先将它转换成数组形式
		var result=JSON.parse(data);
		//创建一个空数组存城市的数据
		var cityArr=[];
		//创建一个空数组存乡村的数据
		var countyArr=[];
		for(var i=0;i<result.length;i++){
			//ProSort分离他们
			if(result[i].ProSort){
				//通过省份的ProID,获取省份的name
				$(".province").append("<option value='"+result[i].ProID+"'>"+result[i].name+"</option>");
			}else if(result[i].CitySort){
				//把数组格式的数据通过push传到城市的空数组里CitySort分离他们
				cityArr.push(result[i]);
			}else if(result[i].DisSort==null){
				//把数组格式的数据通过push传到乡村的空数组里DisSort==null分离他们选择
				countyArr.push(result[i]);
			}
		}
		$(".province").change(function(){
			var value=$(this).val();
			console.log(value);
			$(".city option").eq(0).siblings().remove();
			for(var i=0;i<cityArr.length;i++){
				if(cityArr[i].ProID==value){
					$(".city").append("<option value='"+cityArr[i].CityID+"'>"+cityArr[i].name+"</option>")
				}
			}
		})
		$(".city").change(function(){
			var value = $(this).val();
			$(".county option").eq(0).siblings().remove();
			for(var i=0;i<countyArr.length;i++){
				if(value == countyArr[i].CityID){
					$(".county").append("<option>"+countyArr[i].DisName+"</option>")
				} 
			}
		})
	})
})
