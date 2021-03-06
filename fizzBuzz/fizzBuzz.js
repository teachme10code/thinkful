//var endNumber = 100;
var numbersAsStrings = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'three four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'fourty', 'fourty one', 'fourty two', 'fourty three', 'fourty four', 'fourty five', 'fourty six', 'fourty seven', 'fourty eight', 'fourty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine', 'sixty', 'sixty one', 'sixty two', 'sixty three', 'sixty four', 'sixty five', 'sixty six', 'sixty seven', 'sixty eight', 'sixty nine', 'seventy', 'seventy one', 'seventy two', 'seventy three', 'seventy four', 'seventy five', 'seventy six', 'seventy seven', 'seventy eight', 'seventy nine', 'eighty', 'eighty one', 'eighty two', 'eighty three', 'eighty four', 'eighty five', 'eighty six', 'eighty seven', 'eighty eight', 'eighty nine', 'ninety', 'ninety one', 'ninety two', 'ninety three', 'ninety four', 'ninety five', 'ninety six', 'ninety seven', 'ninety eight', 'ninety nine', 'one hundred'];

function fizzBuzz(number) {
	if (number > 0 && number <= 100 && number % 1 === 0 && !isNaN(number) && number !== null) {
		for (i = 1; i <= number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$("body").append($("<div>" + i + ' ' + "fizz buzz" + "</div>"));
			} else { 
				if (i % 3 === 0) {
					$("body").append($("<div>" + i + ' ' + "fizz" + "</div>"));
				}
				if (i % 5 === 0) {
					$("body").append($("<div>" + i + ' ' + "buzz" + "</div>"));
				}
				if (i % 3 != 0 && i % 5 != 0) {
					$("body").append($("<div>" + i + ' ' + numbersAsStrings[i] + "</div>"));
				}
			}
		}
	} else {
		fizzBuzz(prompt('Enter a number from 1 to 100'));
	}
}
