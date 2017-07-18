$(document).ready(function() {
    console.log('linked');


    // $('#menu-butt').bind('mouseover', function () {
    //     $('.drop-menu').show(200);
    // })

    $('#menu-butt').bind('click', function () {
        $('.drop-menu').toggle(200);
    })

    // $('.drop-menu').bind('mouseleave', function () {
    //     $('.drop-menu').hide(200);
    // })

    $('.to-stuffs').on('click', function(event) {
        var top = $('#stuffs').offset().top;

        $('body, html').animate( {
            scrollTop: top+100
        }, 400);
    })

    $('.to-us').on('click', function(event) {
        var top = $('#about-us').offset().top;

        $('body, html').animate( {
            scrollTop: top-40
        }, 400);
    })

    $('.to-pay').on('click', function(event) {
        var top = $('#pay-delivery').offset().top;

        $('body, html').animate( {
            scrollTop: top+10
        }, 400);
    })

    $('#thumbs').delegate('img','click', function(){
    	$('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    	$('#description').html($(this).attr('alt'));
    });

    // $('.main-carousel').flickity({
    //   // options
    //   cellAlign: 'left',
    //   contain: true,
    //   autoPlay: 1500,
    //   pauseAutoPlayOnHover: true
    // });

})
