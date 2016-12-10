$(function() {

var arcticles = [
    {
        title: 'Ивашин Кирилл',
        content: 'Бывалый барабанщик/рокер, по совместительству студент НАУ',
        content2: 'Учу фронтенд...',
        content3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
        source: 'img/img-1.jpg'

    },
    {
        title: 'Гомер Симпсон',
        content: 'блаблабла лорем',
        content2: 'Учу фронтенд...',
        content3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
        source: 'img/img-2.jpg'

    }
];
var html = $('#output').html();

var result = tmpl(html, { data:  arcticles } );

$('body').append(result);

});
