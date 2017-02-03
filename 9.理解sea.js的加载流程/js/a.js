define(function(require,exports,module){
    console.log("a.js模块被加载");
    var c = require("./c");
    module.exports.m = 100;
});