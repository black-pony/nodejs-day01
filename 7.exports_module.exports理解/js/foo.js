define(function(require,exports,module){
	exports.a = 100;//这一行会被忽略
	module.exports.a = 200;
});