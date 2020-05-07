$(document).ready(function()
{
	$('.phone').css('fontSize', 10);
	$('.company').hide();
	var number = $('.phone').text();
	var newNum = '';
	var index = 0;
	while (index < number.length) 
	{
		if (number[index + 1] == '-')
			newNum = newNum + '-' + number[index];
		else if (number[index] != '-')
			newNum = newNum + number[index];
		index++;
	}
	$('.phone').text(newNum);
	$('.border').css({'border': '1px solid pink',
					  'width': '150px',
					  'text-align': 'center'});
	$('.green').css('color', 'green');
});

