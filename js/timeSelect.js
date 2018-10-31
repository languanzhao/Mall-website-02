window.onload = function(){  
	stryear_ = document.userForm.year_.outerHTML;  
	strMonth = document.userForm.Month.outerHTML;  
	strDay = document.userForm.Day.outerHTML;  
	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
  
	//先给年下拉框赋内容  
	var y = new Date().getFullYear();  
	var str = stryear_.substring(0, stryear_.length - 9);  
	for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年  
	{  
		str += "<option value='" + i + "'> " + i + "</option>\r\n";  
	}  
	document.userForm.year_.outerHTML = str +"</select>";  
	  
	//赋月份的下拉框  
	var str = strMonth.substring(0, strMonth.length - 9);  
	for (var i = 1; i < 13; i++)  
	{  
		str += "<option value='" + i + "'> " + i + "</option>\r\n";  
	}  
	document.userForm.Month.outerHTML = str +"</select>";  
	  
	
	
	var n = MonHead[new Date().getMonth()];  
	if (new Date().getMonth() ==1 && IsPinYear(year_value)) n++;  
	writeDay(n); //赋日期下拉框  
	
	}  
		function year_Month(str) //年发生变化时日期发生变化(主要是判断闰平年)  
	{  
	var Monthvalue = document.userForm.Month.options[document.userForm.Month.selectedIndex].value;  
	if (Monthvalue == ""){Day.outerHTML = strDay; return;}  
	var n = MonHead[Monthvalue - 1];  
	if (Monthvalue ==2 && IsPinYear(str)) n++;  
		writeDay(n)  
	}  
	function MonthDay(str) //月发生变化时日期联动  
	{  
	var year_value = document.userForm.year_.options[document.userForm.year_.selectedIndex].value;  
	if (str == ""){Day.outerHTML = strDay; return;}  
	var n = MonHead[str - 1];  
	if (str ==2 && IsPinYear(year_value)) n++;  
		writeDay(n)  
	}  
	function writeDay(n) //据条件写日期的下拉框  
	{  
		var s = strDay.substring(0, strDay.length - 9);  
		for (var i=1; i<(n+1); i++)  
		s += "<option value='" + i + "'> " + i + "</option>\r\n";  
		document.userForm.Day.outerHTML = s +"</select>";  
	}  
	function IsPinYear(year)//判断是否闰平年  
	{ return(0 == year%4 && (year%100 !=0 || year%400 == 0))} 