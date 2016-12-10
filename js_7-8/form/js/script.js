$(document).ready(function() {
    var $input1 = $("#input-1");
    var $input2 = $("#input-2");
    var $input3 = $("#input-3");

    var $adv1 = $("#advice-1");
    var $adv2 = $("#advice-2");
    var $adv3 = $("#advice-3");

    var $butt = $("#submitButt");

    $($input1).on("mouseover", function(event) {
        $adv1.show(300);
    });
    $($input1).on("mouseleave", function(event) {
        $adv1.hide(300);
    });

    $($input2).on("mouseover", function(event) {
        $adv2.show('300');
    });
    $($input2).on("mouseleave", function(event) {
        $adv2.hide(300);
    });

    $($input3).on("mouseover", function(event) {
        $adv3.show(300);
    });
    $($input3).on("mouseleave", function(event) {
        $adv3.hide(300);
    });

    $($butt).on("click", function(event) {
        $adv1.show(300);
        $adv2.show(300);
        $adv3.show(300);
    });

    $($butt).on("mouseleave", function(event) {
        $adv1.hide(300);
        $adv2.hide(300);
        $adv3.hide(300);
    });
});
