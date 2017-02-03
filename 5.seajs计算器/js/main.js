define(function(require,exports,module){
	var calculator = require("./calculator");
	console.log(calculator);
	window.onload = function(){
			var btn = document.getElementById("btn");
			var operator = document.getElementById("operator");
			var result = document.getElementById("result");
			btn.onclick = function(){
				var a = document.getElementById("a").value;
				var b = document.getElementById("b").value;
				console.log(11);
				console.log(operator.value);
				switch(operator.value){
					case '0':
						console.log(0);
						result.value = calculator.add(a,b);
						break;
					case '1':
						console.log(2);
						result.value = calculator.substract(a,b);
						break;
					case '2':
						console.log(2);
						result.value = calculator.multiply(a,b);
						break;
					case '3':
						console.log(3);
						result.value = calculator.divide(a,b);
						break;
				}
			};
		};
});
