$(document).ready(function () {

    $('.pointer, #map a').popover();

    $('.slider-items').slick({
        prevArrow: "#slider .arrow-prev",
        nextArrow: "#slider .arrow-next"
    });

    if ($('.fancy').length > 0) {
        $('.fancy').fancybox();
        $('a.fancy').on("click", function (e) {
            e.preventDefault();
        });
    }

    $('.js-hamburger').on('click', function(){
        $(this).toggleClass('is-active');
    });
    

    $('input[name=jscode]').val('1');
    bannerLoadImg();
});



function bannerLoadImg() {
    var sWidth = $(window).width();
    var dRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    var dataProp;

    $('.lzy').each(function (index) {
        var el = $(this);

        if (sWidth > 0) {
            dataProp = 'mobile';
        }
        if (sWidth >= 767 && el.data('tablet') != undefined) {
            dataProp = 'tablet';
        }
        if (sWidth >= 875 && el.data('desktop') != undefined) {
            dataProp = 'desktop';
        }
        if (el.attr('src') != el.data(dataProp) && el.data(dataProp)) {
            el.attr('src', el.data(dataProp));
        }
    });
}
$(window).resize(function () {
    bannerLoadImg();
});