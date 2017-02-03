// 建议大家直接写全，名称不要写错，否则报错
define(function (require, exports, module) {
  // require 方法得到的就是指定的模块中向外暴露的接口对象 module.exports
  // var fooModule = require('./foo')

  // console.log(fooModule.foo)

  var foo = require('./foo')
  console.log(foo)
})
