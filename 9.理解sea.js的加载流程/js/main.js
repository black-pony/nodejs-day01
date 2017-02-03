define(function (require, exports, module) {
  var a = require('./a');
  var b = require("./b");
  console.log(a.m + b.n);
  console.log(a);
});
