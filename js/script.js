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
    $('.parallax__layer--back').css({'background-position': `0 ${parallaxOffset}px`})


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
        var width = $(window).width();
        var width1024 = 1024;
        var heighton = $(window).height();
        var heightvalue = width / heighton;
        var rate1 = 2.1;
        // var rate1 = 2.76657060518732;
        var height1 = width / rate1;
        if (heightvalue > 2) {
            console.log(2);
            $('.screen1').css({'height': `100vh`});
            $('.section_first').css({'height': `100vh`});
        } else {
            console.log(1);
            $('.screen1').height(height1);
            $('.section_first').height(height1);
        }

        var rate = 2.1;
        var height = width / rate;
        $('.swiper-container').height(height);
        // $('.section_three').height(height);

        var slide = 0;
        var slideInterval;
        // var widthslider = $('.screen2__animation_right').css({'width': `34rem`});
        var widthslider = $('.screen2__animation_right').width('34rem');
        // console.log(widthslider);

        if (width > 1025) {
            console.log('B');
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
                to: 14,
                step: 1,
                scale: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                format: '%s',
                width: 485,
                showLabels: false,
                snap: true,
                showScale: false,
            });
        } else {
            console.log('M');
            $('.input').css('width', '207px');
            $('.inputRange').css('width', '207px');
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
                to: 14,
                step: 1,
                scale: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                format: '%s',
                width: 207,

                showLabels: false,
                snap: true,
                showScale: false,
            });
        }

    function runTimer() {
        slideInterval = setInterval(function () {
            slider.jRange('setValue', slide.toString());
            if (slide === '14') {
                slide = 0;
            } else {
                slide++;
            }
        }, 2000);
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
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationType: 'progress',
        effect: 'fade',
        fade: {
            crossFade: false
        }

    });

    $('.range__elem1').hover(function (e) {
        var id = $(this).data('id');
        $('.range').removeClass('active');
        $('.range__elem3').removeClass('active');
        $(this).closest('.range').addClass('active');
        $('.range__elem3_' + id).addClass('active');
    });

    $(window).on('resize', function() {
        console.log($('html').css('font-size'));
        var width = $(window).width();
        var heighton = $(window).height();
        var heightvalue = width / heighton;
        var rate1 = 2.1;
        // var rate1 = 2.76657060518732;
        var height1 = width / rate1;
        if (heightvalue > 2) {
            console.log(2);
            $('.screen1').css({'height': `100vh`});
            $('.section_first').css({'height': `100vh`});

        } else {
            console.log(1);
            $('.screen1').height(height1);
            $('.section_first').height(height1);
        }

        var rate = 2.1;
        var height = width / rate;
        $('.swiper-container').height(height);
        // $('.section_three').height(height);

        // $('.swiper-container').css('overflow: hidden');

    })
});



