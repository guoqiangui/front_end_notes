// 这里会暴露一些属性和方法给外部
exports.name = 'James';
exports.getDesc = function () {
	console.log('詹姆斯MVP');
};

// 没有暴露的变量, 外部不能使用
var age = 34;
