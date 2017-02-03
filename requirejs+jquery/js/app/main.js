define(['./cal','jquery'],function(calculator,$){
	var oX = $('#x');
	var oY = $('#y');
	var oOpt = $('#opt');
	var oCal = $('#cal');
	var oResult = $('#result');
	oCal.click(function(){
		var x = oX.val();
		var y = oY.val();
		var opt = oOpt.val();
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
		oResult.val(result);
	});
});
