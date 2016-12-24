window.onload = function() {

    var initToDoList = ['eat cookie', 'drink milk', 'done this task'];
    var model = new Model(initToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);


    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = weekDays[today.getDay()];

    $('.todo__today').html("Today is " + currentDate + "!");

};
