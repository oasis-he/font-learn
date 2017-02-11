# JavaScript数组学习
JavaScript数组对象是一个用于构造数组的全局对象；它们是高级的。列表式的对象
在原型中提供了遍历以及改变其中元素的很多方法。这里主要是对常用数组方法的学习。

## Mutator 方法
下面这些方法会改变调用它们的对象自身的值：

`Array.prototype.pop`
删除数组最后一个元素并返回这个元素
```
//新建一个数组并删除最后一个
var myArr = [0,1,2,3];

console.log(myArr);//[0, 1, 2, 3]

var popped = myArr.pop();
console.log(myArr)//[0, 1, 2]
console.log(popped)//3
```
`Array.prototype.push`
push()方法添加一个或多个元素到数组末尾，并返回数组新的长度（length属性值）
```
var myArr = [0,1,2,3];
myArr.push(4);

console.log(myArr)//[0,1,2,3,4]

var pushed=myArr.push(5,7,9)

console.log(myArr)//[0, 1, 2, 3, 4, 5, 7, 9]
console.log(pushed)//8
```
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push
