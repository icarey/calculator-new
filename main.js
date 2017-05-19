$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();

		var operation = $("input[name='operation']:checked").val();
		var number1 = parseFloat($("#shower").val());
		var number2 = parseFloat($("#toilet").val());
		var number3 = parseFloat($("#teeth").val());
		var number4 = parseFloat($("#hands").val());
		var number5 = parseFloat($("#dishes").val());
		var number6 = parseFloat($("#dishwasher").val());
		var number7 = parseFloat($("#cooking").val());
		var number8 = parseFloat($("#clothes").val());
		var number9 = parseFloat($("#car").val());
		var number10 = parseFloat($("#lawn").val());
		var number11 = parseFloat($("#cups").val());
		var average = 700;

		var sum = addition(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11);


		$("#sum").val(sum);

		$(".results").text(writeText(sum));


		function writeText(sum) {
			if (sum > average) {
				return "The average American uses around 700 gallons of water a week. You're using more water than that! Check out the tips to cut down below."
			} else if (sum < average) {
				return "Good job! The average American uses around 700 gallons of water a week. You're using less than that. Check out some extra water-saving tips below."
			} else if (sum == average) {
				return "You're average! Most Americans use around 700 gallons of water a week. Check out the tips to cut down below."
			};

		};
	});
});

function addition(shower, toilet, teeth, hands, dishes, dishwasher, cooking, clothes, car, lawn, cups) {
	var sum = (shower * 21) + (toilet * 3.5) + (teeth * .5) + (hands * 2) + (dishes * 4.4) + (dishwasher * 10) + (cooking * 2) + (clothes * 40) + (car * 32) + (lawn * 32) + (cups * .1);
	return sum;
}
