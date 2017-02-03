define(function (require, exports, module) {
  // 每个文件模块都是一个模块作用域，外部是无法直接拿到的里面的东西的
  var foo = 'bar'
  // 默认情况下 module.exports 就是一个空对象
  // module.exports.foo = foo


  module.exports = 'bar'
})
