$(document).ready(function() {
	$('.button').on('click', function() {
		var randomNumber = Math.floor(Math.random() * 4);
		switch (randomNumber) {
		case 0:
			$('body').css('background-color', 'red');
			break;
		case 1:
			$('body').css('background-color', 'blue');
			break;
		case 2:
			$('body').css('background-color', 'yellow');
			break;
		case 3:
			$('body').css('background-color', 'green');
			break;
		};
	});
});

// $(document).ready(function() {
// 	$('.button').on('click', function() {
// 		var randomNumber = Math.floor(Math.random() * 4);
// 		if (randomNumber === 0) {
// 			$('body').css('background-color', 'red')
// 		} else if (randomNumber === 1) {
// 			$('body').css('background-color', 'blue')
// 		} else if (randomNumber === 2) {
// 			$('body').css('background-color', 'yellow')
// 		} else {
// 			$('body').css('background-color', 'green')
// 		};
// 	});
// });