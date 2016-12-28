window.onload = function() {

    let searchInput = document.getElementById("findInterests");
    let searchVal = $("#findInterests").val();

    let searchPictures = function() {
        let searchVal = $("#findInterests").val();
        activities = $('.activity');
        activTitle = $('.activity-title');
        console.log(activities);
            $.ajax({
                url: 'https://api.riffsy.com/v1/search?tag='+searchVal+'&key=LIVDSRZULELA',
                type: "GET",
                dataType: "json",
                success: function (data) {
                        let activities = $('.activity');
                        $.each(data.results, function (i, val) {
                            console.log(data);
                            activities.css('backgroundImage', 'url(' + val.itemurl +')');
                            activTitle.html(val.title);
                            activTitle.css('textTransform', 'uppercase');
                        });
                }
            });
    }

    searchInput.addEventListener('keydown', function (e) {
       if (e.keyCode == 13) {
           e.preventDefault();
           searchPictures();
       }
    });

    $(".find-butt").bind("click", function() {
        this.style.backgroundColor = "#3a3";
        this.style.transition = "1s";
    });
    $(".find-butt").bind("click", searchPictures());

}
