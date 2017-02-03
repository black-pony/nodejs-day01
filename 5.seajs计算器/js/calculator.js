define(function(require,exports,module){
	function add(x, y) {
	  return parseFloat(x) + parseFloat(y)
	}

	function substract(x, y) {
	  return parseFloat(x) - parseFloat(y)
	}

	function multiply(x, y) {
	  return parseFloat(x) * parseFloat(y)
	}

	function divide(x, y) {
	  return parseFloat(x) / parseFloat(y)
	}

	module.exports = {
		add:add,
		substract:substract,
		multiply:multiply,
		divide:divide
	};
});