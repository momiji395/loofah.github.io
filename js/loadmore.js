
(function(jQuery){
(function($){
$( document ).ready(function () {
        $(".moreBox").slice(0, 6).show();
        if ($(".blogBox:hidden").length != 0) {
            $("#loadMore").show();
        }       
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 4).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
        });
    });
$( document ).ready(function () {
        $(".moreBox2").slice(0, 6).show();
        if ($(".blogBox2:hidden").length != 0) {
            $("#loadMore2").show();
        }       
        $("#loadMore2").on('click', function (e) {
            e.preventDefault();
            $(".moreBox2:hidden").slice(0, 4).slideDown();
            if ($(".moreBox2:hidden").length == 0) {
                $("#loadMore2").fadeOut('slow');
            }
        });
    });



})(jQuery_3_1_1)
})(jQuery_3_1_1);

