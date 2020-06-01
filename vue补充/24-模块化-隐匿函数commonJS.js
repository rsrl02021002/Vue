// 小明的aaa.js文件:
var name="小明"
var flag="true"
function  sum(num1,num2){
	return num1+num2;
}

// 小红的bbb.js文件:
var name="小红"
var flag="false"
function  sum(num1,num2){
	return num1+num2;
}

// ccc.js文件
// main.js文件

// index.html文件


// 问题
// 多人开发 全局变量冲突

// 解决办法1：匿名函数
(
	var name="小明"
	var flag="true"
	function  sum(num1,num2){
		return num1+num2;
	}
)()
// 优点:利用了函数有作用域,
// 缺点:不能复用

// 解决办法2:
// 此处moudelA全局变量 可以在引用了aaa.js文件的地方使用moudelA.name moudelA.sum(xxx,xxx)
var moduleA=(function(
	// 导入对象
	var obj={}
	var name="小明"
	var flag="true"
	function  sum(num1,num2){
		return num1+num2;
	}
	
	obj.name=name;
	obj.sum=sum;
	return obj;
)
)()


// 解决办法:commonJS,
// 核心:导出和导入
// 导出:

	var name="小明"
	var flag="true"
	function  sum(num1,num2){
		return num1+num2;
	}
	module.exports={
		name:name;
		flag:flag;
		sum:sum;
	}
	// 注意:需要webpack引入某文件,才能解析module.exports文件
	
// 导入:	
var {name,flag,sum} = require(./aaa.js);
// 或
// var aaa = require(./aaa.js);
// var name = aaa.name;
// boolean flag=aaa.flag;
// var sum=aaa.sum()