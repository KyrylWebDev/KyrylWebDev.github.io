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
                        for(let i in data.results) {
                            console.log(data);
                            activities.css('backgroundImage', 'url(' + data.results[i].itemurl +')');
                            activTitle.html(data.results[i].title);
                            activTitle.css('textTransform', 'uppercase');
                        };
                }
            });
    }

    searchPictures();

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
    $(".find-butt").bind("click", searchPictures);


    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: 1500,
      pauseAutoPlayOnHover: true
    });
}