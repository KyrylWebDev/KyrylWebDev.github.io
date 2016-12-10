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
        let initToDoList = ['eat cookie', 'drink milk', 'watch zmijuk'];
        let model = new model(initToDoList);
        let view = new view(model);
        let controller = new controller(model, view);
    }

);

let today = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDate = weekDays[today.getDay()];

$('.todo__today').html(currentDate);

});
