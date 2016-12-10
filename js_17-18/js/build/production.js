// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
var cache = {};

this.tmpl = function tmpl(str, data){
// Figure out if we're getting a template, or if we need to
// load the template - and be sure to cache the result.
var fn = !/\W/.test(str) ?
  cache[str] = cache[str] ||
    tmpl(document.getElementById(str).innerHTML) :

  // Generate a reusable function that will serve as a template
  // generator (and which will be cached).
  new Function("obj",
    "var p=[],print=function(){p.push.apply(p,arguments);};" +

    // Introduce the data as local variables using with(){}
    "with(obj){p.push('" +

    // Convert the template into pure JavaScript
    str
      .replace(/[\r\t\n]/g, " ")
      .split("<%").join("\t")
      .replace(/((^|%>)[^\t]*)'/g, "$1\r")
      .replace(/\t=(.*?)%>/g, "',$1,'")
      .split("\t").join("');")
      .split("%>").join("p.push('")
      .split("\r").join("\\'")
  + "');}return p.join('');");

// Provide some basic currying to the user
return data ? fn( data ) : fn;
};
})();

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

$(function() {

    console.log('SCRIPT CONCAT WITH GRUNT!');

});
