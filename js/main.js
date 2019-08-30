$(document).ready(function(){

    $('.pointer, #map a').popover();

	$('nav#menu').mmenu();

        $('#testimony').rhinoslider({
		effect: 'fade',
		controlsKeyboard: false,
		controlsPrevNext: false,
		controlsPlayPause: false,
		autoPlay: true,
		pauseOnHover: false,
		showBullets: 'never',
		showControls: 'never',
                showTime : 5000
	});

	$('.slide').rhinoslider({
		effect: 'fade',
		controlsKeyboard: false,
		controlsPrevNext: false,
		controlsPlayPause: false,
		autoPlay: true,
		pauseOnHover: false,
		showBullets: 'never',
		showControls: 'never',
                showTime : 5000
    });
    

    $('.slider-items').slick({
        prevArrow : "#slider .arrow-prev",
        nextArrow : "#slider .arrow-next"
    });

    if($('.fancy').size() > 0) {
    	$('.fancy').fancybox();
    	$('a.fancy').on("click", function(e){
    		e.preventDefault();
    	});
    }

    if($("#sequence").size() > 0)
    {
        var options = {
            nextButton: false,
            prevButton: false,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 5000,
            preloader: true,
            preloadTheseFrames: [1],
            preloadTheseImages: [
                "img/slider/tn-model1.png",
                "img/slider/tn-model2.png",
                "img/slider/tn-model3.png"
            ]
        };
        var mySequence = $("#sequence").sequence(options).data("sequence");
    }

    $('input[name=jscode]').val('1');
    bannerLoadImg();
});



function bannerLoadImg() {
    var sWidth = $(window).width();
    var dRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    var dataProp;

    $('.lzy').each(function (index) {
        var el = $(this);

        if (sWidth > 0) { dataProp = 'mobile'; }
        if (sWidth > 360 && el.data('tablet') != undefined) { dataProp = 'tablet'; }
        if (sWidth > 767 && el.data('desktop') != undefined) { dataProp = 'desktop'; }
        if (el.attr('src') != el.data(dataProp) && el.data(dataProp)) {
            el.attr('src', el.data(dataProp));
        }
    });
}
$(window).resize(function () {
    bannerLoadImg();
});