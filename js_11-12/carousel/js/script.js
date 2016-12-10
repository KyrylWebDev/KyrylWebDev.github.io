$(function() {

    var leftArr = $('.carousel-prev');
    var rightArr = $('.carousel-next');
    var caroList = $('.carousel--list');
    var caroCats = caroList.find('.carousel--item');

    var currentCat = 1;
    var width = 400;
    var animateSpeed = 1000;
    var pause = 50;

    var minimumOffset = -1800;
    var maximumOffset = 0;


    leftArr.click(function() {
        if (currentLeftValue < maximumOffset) {
           caroList.animate({ 'margin-left': '+=' + width }, animateSpeed);
       }
    });

    rightArr.click(function() {
        if (currentLeftValue > minimumOffset) {
             caroList.animate({ 'margin-left': '-=' + width }, animateSpeed);
       }

    });

    setInterval(function() {
        caroList.animate({ 'margin-left' : '-=' + width }, animateSpeed, function() {
             currentCat++;
                if (currentCat === caroCats.length) {
                    currentCat = 1;
                    caroList.css('margin-left', 150);
                }
            });
        console.log(currentCat);
    }, pause);
