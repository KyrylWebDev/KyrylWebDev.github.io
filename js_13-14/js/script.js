'use strict;'

$(function() {

		var item1 = {
			title: '1. Что обозначает директива use strict?',
			variants: [
			'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.',
			'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.',
			'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'
			],
			correctVar: 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.'
		};
		var correct1 = item1.correctVar;

		var item2 = {
			title: '2. К какому участку скрипта применяется строгие правила ‘use strict’?',
			variants: [
			 'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.',
			 'Либо во всем скрипте, либо в отдельной функции.',
			 'Во всем скрипте.'
		 	],
			correctVar: 'Либо во всем скрипте, либо в отдельной функции.'
		};
		var correct2 = item2.correctVar;

		var item3 = {
			title: '3. Для чего используется конструкция try-catch в javascript?',
			variants: [
			 'Для генерирования ошибок.',
			 'В строгом режиме весь код необходимо оборачивать в try-catch.',
			 'Для обработки возможных ошибок',
		 	],
			correctVar: 'Для обработки возможных ошибок'
		};
		var correct3 = item3.correctVar;

		var item4 = {
			title: '4. Для чего необходим блок finally? ',
			variants: [
			 'Код внутри этого блока будет выполнен, если код внутри блока catch выполнен без ошибок',
			 'Код внутри этого блока будет в любом случае выполнен',
			 'Код внутри этого блока будет выполнен, если внутри блока try возникли ошибки'
		 	],
			correctVar: 'Код внутри этого блока будет в любом случае выполнен'
		};
		var correct4 = item4.correctVar;


	var choice1;
	var choice2;
	var choice3;
	var choice4;

	$('input[name=variant1]').click(function() {
		choice1 = (this.value);
		console.log(choice1);
	});

	$('input[name=variant2]').click(function() {
		choice2 = (this.value);
		console.log(choice2);
	});

	$('input[name=variant3]').click(function() {
		choice3 = (this.value);
		console.log(choice3);
	});

	$('input[name=variant4]').click(function() {
		choice4 = (this.value);
		console.log(choice4);
	});

	$('body').append('<div id="modal"> '+
								'<img id="closeImg" src="img/close.png">' +
								'<div id="inModal">' +
								'</div>' +
								'</div>');
	$('#modal').css('width', '300px');
	$('#modal').css('height', '220px');
	$('#modal').css('position', 'fixed');
	$('#modal').css('top', '10%');
	$('#modal').css('left', '40%');
	$('#modal').css('background', '#ffa');
	$('#modal').css('border-radius', '20px');
	$('#modal').css('text-align', 'center');
	$('#modal').css('display', 'none');
	$('#closeImg').css('width', '40px');
	$('#closeImg').css('height', '40px');
	$('#closeImg').css('float', 'right');
	$('#closeImg').css('top', '5px');
	$('#closeImg').css('cursor', 'pointer');


	$("#checkResult").bind('click', function() {
		if (choice1 === correct1) {
			var result1 = ('Первый вопрос - правильно');
		}  else {
			var result1 = ('Первый - неправильно');
		}

		if (choice2 === correct2) {
			var result2 = ('Второй вопрос - правильно');
		}  else {
			var result2 = ('Второй вопрос - неправильно');
		}
		if (choice3 === correct3) {
			var result3 = ('Третий вопрос - правильно');
		}  else {
			var result3 = ('Третий вопрос - неправильно');
		}
		if (choice4 === correct4) {
			var result4 = ('Четвертый вопрос - правильно');
		}  else {
			var result4 = ('Четвертый вопрос - неправильно');
		}


		$('#inModal').html("<h3>Результаты таковы...</h3><hr><p>" + result1 + "</p>" + "<p>" + result2 + "</p>" + "<p>" + result3 + "</p>" + "<p>" + result4 + "</p>");
		$("#modal").show(200);

		$(document).on("click", "#closeImg", function() {
			$("#modal").hide(400);
			$("input:radio").prop('checked', false);
		});

	});

});
