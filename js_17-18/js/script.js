$(function () {

    var searchForm = document.querySelector('#searchForm');

    searchForm.addEventListener('keydown', function (e) {
       if (e.keyCode == 13) {
           e.preventDefault();
           SearchFunc();
       }
    });

    $("#search--button").bind("click", function() {

        var searchVal = $(".search--input").val();
        console.log(searchVal);

        if (searchVal !== "") {
            $.ajax({
                url: 'https://api.riffsy.com/v1/search?tag='+searchVal+'&key=LIVDSRZULELA',
                type: "GET",
                dataType: "json",
                beforeSend: loadAnimation(),
                success: function (data) {
                        $.each(data.results, function(i, val) {
                            console.log(data);
                            $('<img />').attr('src', val.itemurl).append('#searchResult');
                            $(".cssload-preloader").css('display', 'none');
                        });
                }
            });
        };

    });

    function SearchFunc() {
        var searchVal = $(".search--input").val();
        console.log(searchVal);

        if (searchVal !== "") {
            $.ajax({
                url: 'https://api.riffsy.com/v1/search?tag='+searchVal+'&key=LIVDSRZULELA',
                type: "POST",
                dataType: "json",
                beforeSend: loadAnimation(),
                success: function (data) {
                        $.each(data.results, function(i, val) {
                            console.log(data);
                            $('<img />').attr('src', val.itemurl).appendTo('#searchResult');
                            $(".cssload-preloader").css('display', 'none');
                        });
                }
            });
        };
    }

    function loadAnimation() {
        $(".cssload-preloader").css('display', 'block');
        setTimeout( function() {
             $(".cssload-preloader").css('display', 'none');
        }, 3000);
    };

});
