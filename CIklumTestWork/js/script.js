$(function () {

    // STORE SUBMENUS LOGICS

    $('#store-menu').bind('click', function () {
        $('.products-submenu').slideUp(200);
        $('.store-submenu').slideToggle(200);
        $('.devices-submenu').hide(100);
        $('.soft-submenu').hide(100);
        $('.games-submenu').hide(100);
        $('.deals-submenu').hide(100);
        $('.more-submenu').hide(100);
    });

    $('#products-menu').bind('click', function () {
        $('.store-submenu').slideUp(200);
        $('.products-submenu').slideToggle(200);
        $('.devices-submenu').hide(100);
        $('.soft-submenu').hide(100);
        $('.games-submenu').hide(100);
        $('.deals-submenu').hide(100);
        $('.more-submenu').hide(100);
    });

    $('.underlayer').bind('click', function () {
        $('.store-submenu').slideUp(200);
        $('.products-submenu').slideUp(200);
        $('.devices-submenu').hide();
        $('.soft-submenu').hide();
        $('.games-submenu').hide();
        $('.deals-submenu').hide();
        $('.more-submenu').hide();
    });

    // SUB SUBMENUS STUFF
    $('.dir-link').bind('mouseover', function () {
        $('.devices-submenu').hide();
        $('.devices-menu').css('background', '#eee');
        $('.soft-submenu').hide();
        $('.soft-menu').css('background', '#eee');
        $('.games-submenu').hide();
        $('.games-menu').css('background', '#eee');
        $('.deals-submenu').hide();
        $('.deals-menu').css('background', '#eee');
        $('.more-submenu').hide();
        $('.more-menu').css('background', '#eee');
    });

    $('.devices-menu').bind('mouseover', function () {
        $(this).css('background', '#ddd');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
        $('.devices-submenu').show();
        $('.soft-submenu').hide();
        $('.games-submenu').hide();
        $('.deals-submenu').hide();
        $('.more-submenu').hide();
    });
    $('.devices-submenu').bind('mouseover', function () {
        $(this).css('display', 'block');
        $('.devices-menu').css('background', '#ddd');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
    });

    $('.soft-menu').bind('mouseover', function () {
        $(this).css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
        $('.soft-submenu').show();
        $('.devices-submenu').hide();
        $('.games-submenu').hide();
        $('.deals-submenu').hide();
        $('.more-submenu').hide();
    });
    $('.soft-submenu').bind('mouseover', function () {
        $(this).css('display', 'block');
        $('.soft-menu').css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
    });

    $('.games-menu').bind('mouseover', function () {
        $(this).css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
        $('.games-submenu').show();
        $('.devices-submenu').hide();
        $('.soft-submenu').hide();
        $('.deals-submenu').hide();
        $('.more-submenu').hide();
    });
    $('.games-submenu').bind('mouseover', function () {
        $(this).css('display', 'block');
        $('.games-menu').css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
    });

    $('.deals-menu').bind('mouseover', function () {
        $(this).css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
        $('.deals-submenu').show();
        $('.devices-submenu').hide();
        $('.soft-submenu').hide();
        $('.games-submenu').hide();
        $('.more-submenu').hide();
    });
    $('.deals-submenu').bind('mouseover', function () {
        $(this).css('display', 'block');
        $('.deals-menu').css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.more-menu').css('background', '#eee');
    });

    $('.more-menu').bind('mouseover', function () {
        $(this).css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
        $('.more-submenu').show();
        $('.devices-submenu').hide();
        $('.soft-submenu').hide();
        $('.games-submenu').hide();
        $('.deals-submenu').hide();
    });
    $('.more-submenu').bind('mouseover', function () {
        $(this).css('display', 'block');
        $('.more-menu').css('background', '#ddd');
        $('.devices-menu').css('background', '#eee');
        $('.soft-menu').css('background', '#eee');
        $('.games-menu').css('background', '#eee');
        $('.deals-menu').css('background', '#eee');
    });


/* INVISION FORM VALIDATION */

    var nameVal, emailVal, pwdVal;
    $('#form-send').bind('click', function () {
        nameVal = $('#name').val();
        emailVal = $('#email').val();
        pwdVal = $('#pwd').val();

        if ( nameVal === "") {
            console.log('empty name');
            $('#name').css("border-color", "#ff3366");
        } else {
            console.log('name validated');
            $('#name').css("border-color", "transparent");
        }

        var emailFilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        if (!emailFilter.test(emailVal)) {
            console.log('invalid email');
            $('#email').css("border-color", "#ff3366");
        } else {
            console.log('email validated');
            $('#email').css("border-color", "transparent");
        };

        var pwdFilter = /^([a-zA-Z0-9]{6,14})$/;
        if (!pwdFilter.test(pwdVal)) {
            console.log('invalid password');
            $('#pwd').css("border-color", "#ff3366");
        } else {
            console.log('pwd validated');
            $('#pwd').css("border-color", "transparent");
        };
    });


/* OCULUS SECTION ANIMATIONS */

    $('.oculus-1').bind('mouseover', function () {
        $('.dark-1').css("opacity", ".2");
        $('.bg-1').css("transform", "scale(1.1)");
    });
    $('.oculus-1').bind('mouseleave', function () {
        $('.dark-1').css("opacity", ".6");
        $('.bg-1').css("transform", "scale(1)");
    });

    $('.oculus-2').bind('mouseover', function () {
        $('.dark-2').css("opacity", ".2");
        $('.bg-2').css("transform", "scale(1.1)");
    });
    $('.oculus-2').bind('mouseleave', function () {
        $('.dark-2').css("opacity", ".6");
        $('.bg-2').css("transform", "scale(1)");
    });

    $('.oculus-3').bind('mouseover', function () {
        $('.dark-3').css("opacity", ".2");
        $('.bg-3').css("transform", "scale(1.1)");
    });
    $('.oculus-3').bind('mouseleave', function () {
        $('.dark-3').css("opacity", ".6");
        $('.bg-3').css("transform", "scale(1)");
    });

});
