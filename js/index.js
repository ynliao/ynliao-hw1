function randomNumber(lowerBound, upperBound) {
	return Math.floor(Math.random() * upperBound) + lowerBound;
}

$('#random').on('click', function() {	
	$('div .item').each(function() {
		
		// 蓋掉原本的字
		// $(this).html(randomNumber(1, 10));
		
		// 不蓋掉原本的字
		if ($(this).find('span').length <= 0) {
			$(this).append('<span>' + randomNumber(1, 10) + '</span>');
			
		} else {
			$(this).find('span').html(randomNumber(1, 10));
		}
	});
})