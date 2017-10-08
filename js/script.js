var mapInited = false;


$(window).on('scroll', function() {
    // if (($(window).scrollTop() > $(document).height() - $(window).height() * 1.5) && !mapInited){
    //     mapInited = true;
    //     DG.then(function() {
    //         var map;
    //
    //         map = DG.map('map', {
    //             center: [55.0425, 82.9343],
    //             zoom: 16
    //         });
    //
    //         map.locate({setView: true, watch: true})
    //             .on('locationfound', function(e) {
    //                 DG.marker([e.latitude, e.longitude]).addTo(map);
    //             })
    //             .on('locationerror', function(e) {
    //                 DG.popup()
    //                     .setLatLng(map.getCenter())
    //                     .setContent('Доступ к определению местоположения отключён')
    //                     .openOn(map);
    //             });
    //
    //         DG.marker([55.041601, 82.917294]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
    //         DG.marker([54.987239, 82.902463]).addTo(map).bindPopup('Общага');
    //         DG.marker([54.983695, 82.892536]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');
    //         DG.marker([54.987746, 82.906335]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');
    //
    //     });
    // }

    var parallaxOffset = $(window).scrollTop() * -0.5;
    $('.parallax__layer--back').css({'background-position': `-86px ${parallaxOffset}px`})


})

// $( document ).ready(function() {
//     $('#rangeSlider').rangeslider({
//         polyfill: false,
//         onSlideEnd: function() {
//             console.log(1)
//         },
//         onSlide: function(position, value) {
//             $('.screen2__animation__motor').removeClass('active');
//             $('.screen2__animation__motor.take_' + value).addClass('active');
//             $('.inputRange__item').removeClass('circle__after');
//             $('.inputRange__item').each(function(index, elem) {
//                 if (index < value) {
//                     $(elem).addClass('circle__after');
//                 }
//             })
//         },
//     });
//
//
// });


$( document ).ready(function() {
        var slide = 0;
        var slideInterval;
        var slider = $('.slider-input').jRange({
        onstatechange: function (value) {
            slide = value;
            clearInterval(slideInterval);
            runTimer();
            $('.screen2__animation__img').removeClass('active');
            $('.screen2__animation__img.take_' + value).addClass('active');
            if (value%2===0) {
                $('.screen2__animation__motor').removeClass('active');
                $('.screen2__animation__motor.take_' + value).addClass('active');
                $('.inputRange__item').removeClass('circle__after');
                $('.inputRange__item').each(function(index, elem) {
                    if (index < value/2+1) {
                        $(elem).addClass('circle__after');
                    }
                })
            }

        },

        from: 0,
        to: 12,
        step: 1,
        scale: [0,1,2,3,4,5,6,7,8,9,10,11,12],
        format: '%s',
        width: 485,
        showLabels: false,
        snap: true,
        showScale: false,
    });
    function runTimer() {
        slideInterval = setInterval(function () {
            slider.jRange('setValue', slide.toString());
            if (slide === '12') {
                slide = 0;
            } else {
                slide++;
            }
        }, 3000);
    }

    var sliderInited = false;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height() && !sliderInited) {
            runTimer();
            sliderInited = true;
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        spaceBetween: 100,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationType: 'progress',
        effect: 'fade',
        fade: {
            crossFade: false
        }

    });

    $('.swiper-button-prev').click(function () {
        $('.screen3__block2').css({'opacity': '0'})
    });

    $('.swiper-button-next').click(function () {
        $('.screen3__block2').css({'opacity': '0'})
    });

    $('.range__elem1').hover(function (e) {
        var id = $(this).data('id');
        $('.range').removeClass('active');
        $('.range__elem3').removeClass('active');
        $(this).closest('.range').addClass('active');
        $('.range__elem3_' + id).addClass('active');
    });

    // function callback() {
    //     var width = $(window).width();
    //     var pageheight = $(window).height();
    //     var rate =   1.671428571428571;
    //     var height = width / rate ;
    //     $('.swiper-container').height(height);
        // $('.background').height(pageheight);
        // if (width<960) {$('body').css('font-size', '10px')};
        // if (width>1300) {$('body').css('font-size', '25px')}
    // }

    $(window).on('resize', function() {
        var width = $(window).width();
        var pageheight = $(window).height() * 0.99;
        var rate =   1.671428571428571;
        // var height = width / rate;
        var height = width / rate;
        $('.swiper-container').height(height);
    })

    // callback();

});



