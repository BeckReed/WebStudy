/**
 * Created by Beck on 6/22/2016.
 */

//js Array数组操作方法学习

/*
   创建数组的方式：
    1.使用 Array 构造函数
    2.使用字面量表示法
* */
var colorArrays=new Array("red","black","green");
var numberArrays=[1,2,3];

//栈 后进先出的数据结构  队列  先进先出的数据结构
var arrayCount=numberArrays.push(5);
console.log('push返回的count是： '+arrayCount);
var popItem=numberArrays.pop();
console.log('pop返回的最后一项是： '+popItem);

arrayCount=colorArrays.unshift("yellow","purpuse","dark");
console.log('unshift返回的count是： '+arrayCount);
var shiftItem=colorArrays.shift();
console.log('shift返回的第一项是： '+shiftItem);


