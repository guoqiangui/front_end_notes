// 调用原生模块不需要路径
var httpModule = require('http');
// console.log(httpModule);

// 导入test模块，这是文件模块，需要路径
var test01 = require('./test01.js');

// 获取test01模块暴露的对象
console.log(test01);

// 没有暴露的不能使用
console.log(test01.age);

// 导入test02模块暴露的字符串
var arr = require('./test02.js');
console.log(arr);