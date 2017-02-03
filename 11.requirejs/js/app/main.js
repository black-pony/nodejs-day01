define(['./cal'],function(calculator){
	var oX = document.getElementById('x');
	var oY = document.getElementById('y');
	var oOpt = document.getElementById('opt');
	var oCal = document.getElementById('cal');
	var oResult = document.getElementById('result');

	oCal.addEventListener('click', function(e) {
	var x = oX.value;
	var y = oY.value;
	var opt = oOpt.value;
	var result = 0;
	switch (opt) {
	  case '0':
	    result = calculator.add(x, y);
	    break;
	  case '1':
	    result = calculator.substract(x, y);
	    break;
	  case '2':
	    result = calculator.multiply(x, y);
	    break;
	  case '3':
	    result = calculator.divide(x, y);
	    break;
	  default:
	    break;
	}
	oResult.value = result;
	});
});
