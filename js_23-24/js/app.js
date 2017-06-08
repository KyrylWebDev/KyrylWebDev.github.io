window.onload = function() {

    var initToDoList = ['eat cookie', 'drink milk', 'done this task','have some rest'];
    var model = new Model(initToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);


    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = weekDays[today.getDay()];
    var currentDay = today.getDate();

    var monthArr = ["February", "March", "April", "May", "April", "May","June","July","August","September","October","November","December","January"];
    var currentMonths = today.getMonth();
    var currentMonth = monthArr[currentMonths + 1];

    $('.todo__today').html("Today is " + currentDate + ", " + currentDay + " " + currentMonth);

    $('#sortButt').bind('click', function() {
        model.data.reverse();
        view.renderList(model.data);
    });

};
