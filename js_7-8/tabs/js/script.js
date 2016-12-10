$(function() {
    var $tab1 = $("#tab1");
    var $tab2 = $("#tab2");
    var $tab3 = $("#tab3");
    var $l1 = $("#l1");
    var $l2 = $("#l2");
    var $l3 = $("#l3");

    $($l1).on("click", function(event) {
        $tab1.show(600);
        $tab2.hide();
        $tab3.hide();
        $($l1.css("background", "#17f"));
        $($l1.css("color", "#fff"));
        $($l2.css("background", "#fff"));
        $($l2.css("color", "#000"));
        $($l2.css("borderTopLeftRadius", "10px"));
        $($l2.css("borderTopRightRadius", "10px"));
        $($l3.css("background", "#fff"));
        $($l3.css("color", "#000"));
        $($l3.css("borderTopLeftRadius", "10px"));
        $($l3.css("borderTopRightRadius", "10px"));
    });

    $($l2).on("click", function(event) {
        $tab2.show();
        $tab1.hide();
        $tab3.hide();
        $($l2.css("background", "#17f"));
        $($l2.css("borderTopLeftRadius", "10px"));
        $($l2.css("borderTopRightRadius", "10px"));
        $($l2.css("color", "#fff"));
        $($l1.css("background", "#fff"));
        $($l1.css("color", "#000"));
        $($l1.css("borderTopLeftRadius", "10px"));
        $($l1.css("borderTopRightRadius", "10px"));
        $($l3.css("background", "#fff"));
        $($l3.css("color", "#000"));
        $($l3.css("borderTopLeftRadius", "10px"));
        $($l3.css("borderTopRightRadius", "10px"));
    });

    $($l3).on("click", function(event) {
        $tab3.show();
        $tab2.hide();
        $tab1.hide();
        $($l3.css("background", "#17f"));
        $($l3.css("borderTopLeftRadius", "10px"));
        $($l3.css("borderTopRightRadius", "10px"));
        $($l3.css("color", "#fff"));
        $($l1.css("background", "#fff"));
        $($l1.css("color", "#000"));
        $($l1.css("borderTopLeftRadius", "10px"));
        $($l1.css("borderTopRightRadius", "10px"));
        $($l2.css("background", "#fff"));
        $($l2.css("color", "#000"));
        $($l2.css("borderTopLeftRadius", "10px"));
        $($l2.css("borderTopRightRadius", "10px"));
    }); 
});
