$(function () {

    $('.to-page-2').on('click', function(event) {
        var top = $('#page-2').offset().top;

        $('body, html').animate( {
            scrollTop: top-70
        }, 500);
    })


    var $brand1 = $('.brand-1');
    var $br_bg_1 = $('.brand-bg-1');
    var $brand2 = $('.brand-2');
    var $br_bg_2 = $('.brand-bg-2');
    var $brand3 = $('.brand-3');
    var $br_bg_3 = $('.brand-bg-3')

    $($brand1).hover(function(event) {
        $br_bg_1.show(200);
    });
    $($br_bg_1).on('mouseleave', function(event) {
        $br_bg_1.hide(200);
    });
    $($brand2).hover(function(event) {
        $br_bg_2.show(200);
    });
    $($br_bg_2).on('mouseleave', function(event) {
        $br_bg_2.hide(200);
    });
    $($brand3).hover(function(event) {
        $br_bg_3.show(200);
    });
    $($br_bg_3).on('mouseleave', function(event) {
        $br_bg_3.hide(200);
    });

});
