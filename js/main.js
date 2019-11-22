$(document).ready(function () {

    $('.pointer, #map a').popover();

    $('.slider-items').slick({
        prevArrow: "#slider .arrow-prev",
        nextArrow: "#slider .arrow-next"
    });

    $('.js-reviews-slider').slick({
        arrows: false,
        dots: true
    });

    if ($('.fancy').length > 0) {
        $('.fancy').fancybox();
        $('a.fancy').on("click", function (e) {
            e.preventDefault();
        });
    }

    $('.js-hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.nav-mobile').toggleClass('open');
        $('#body').toggleClass('open');
    });
    

    $('input[name=jscode]').val('1');
    bannerLoadImg();
    initSlick();
});

$(window).resize(function () {
    bannerLoadImg();
    initSlick();
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
        if (sWidth >= 600 && el.data('tablet') != undefined) {
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
function initSlick() {
    var sWidth = $(window).width();
    if (sWidth > 500) {
        $('.js-slider-01.slick-initialized').slick("unslick");
    }
    else {
        $('.js-slider-01:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: false,
            adaptiveHeight: true
        });
    }
}