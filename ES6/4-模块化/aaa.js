var name = "小明"
var flag = true

function sum(num1, num2) {
	return num1 + num2;
}

export{
	flag,sum
}

// 导出变量时,可以这样写
// export let name = 'why'
// export flag = true

// 导出函数
export function mul(num1,num2){
	return num1+num2
}

// 导入函数
import {mul} from"./aaa.js"
console.log(mul(20,10));

导出类
补知识点类
ES5中:
function Person(){
	
}
ES6中:
class Person{
	
}

export class Person{
	run(){
		console.log("在奔跑")
	}
}

导入类
import {Person} from"./aaa.js"
const p = new Person();
p.run()

