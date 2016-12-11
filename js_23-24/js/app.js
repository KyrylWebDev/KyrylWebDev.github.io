requirejs.config({
    paths: {
        'jquery': "https://code.jquery.com/jquery-3.1.1.js",
        'template': "libs/tmpl",
        'model': "app/model",
        'view': "app/view",
        'controller': "app/controller"
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'template': {
            exports: "tmpl"
        }
    }
});

require (
    [
        'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
    ],
    function ($, tmpl, model, view, controller) {                               // suka dolzhno rabotat'!!!
        var initToDoList = ['eat cookie', 'drink milk', 'watch zmijuk'];
        var model = new model(initToDoList);
        var view = new view(model);
        var controller = new controller(model, view);
    }

);

var today = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDate = weekDays[today.getDay()];

$('.todo__today').html(currentDate);

});
