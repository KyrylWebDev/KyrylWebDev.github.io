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
                        var count = 0;
                        $('.page-4 img').remove();
                        for(let i in data.results) {
                            if (count === 6) {
                                break;
                            }
                            console.log(data);
                            console.log(count);
                            $('.page-4').append('<img class="activity grid-item item-width-1" src='+data.results[i].itemurl+' />');
                            $('.grid').hide(1500);
                            count++;
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
        $(this).toggleClass('green-back');
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
