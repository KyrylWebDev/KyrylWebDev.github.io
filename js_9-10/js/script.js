$(function() {
    $('.jcarousel').jcarousel( {
        // basic settings
    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel').jcarouselAutoscroll({
<<<<<<< HEAD
       interval: 4000,
=======
       interval: 5000,
<<<<<<< HEAD
>>>>>>> d8d3f315ee95b044c04aa8b8ce86b58ceb31e312
       target: '+=1',
=======
       target: '+=0',
>>>>>>> dd6134301c7a08902a764d6a58f87bf8d3885525
       autostart: true
     });


    $('.selectRace').selectbox();


});
