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

        var slide = 0;
        var slideInterval;
        // var widthslider = $('.screen2__animation_right').css({'width': `34rem`});
        var widthslider = $('.screen2__animation_right').width('34rem');
        // console.log(widthslider);

        if (width > 1025) {
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
            $('.input').css(
                'margin', '0 auto'
            );

            $('.screen2__animation__img').css(
                'width', '80%',
            );


        } else {
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
            $('.swiper-button-next, .swiper-button-prev').css(
                // 'width', '100%',
                'top', '60%',
            );
            $('.screen2__animation__img').css(
                'width', '60%',
            );
            $('.screen4').css(
                'height', '73rem',
            );
        }

    if (width < 440) {
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'bottom', '3%'
        );
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'height', '20%'
        );
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'width', '50%'
        );
        $('.screen3__block1').css(
            'left', '10%'
        );

        $('.range__block1').css(
            'top', '0'
        );
        $('.range__block1').css(
            'left', '30%'
        );
        $('.range__block2').css(
            'top', '0'
        );
        $('.range__block2').css(
            'left', '-3%'
        );
        $('.range__block3').css(
            'top', '60%'
        );
        $('.range__block3').css(
            'left', '10%'
        );
        $('.range__block4').css(
            'top', '0'
        );
        $('.range__block4').css(
            'left', '63%'
        );
        $('.range__block5').css(
            'top', '60%'
        );
        $('.range__block5').css(
            'left', '45%'
        );
        $('.range__block6').css(
            'top', '0'
        );
        $('.screen5__caption').css(
            'margin-top', '23.86rem'
        );
    } else {
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'bottom', '5%'
        );
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'height', '10%'
        );
        $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
            'width', '47.5%'
        );
        $('.screen3__block1').css(
            'left', '15%'
        );

        $('.range__block1').css(
            'top', '0'
        );
        $('.range__block1').css(
            'left', '30%'
        );
        $('.range__block2').css(
            'top', '35%'
        );
        $('.range__block2').css(
            'left', '0'
        );
        $('.range__block3').css(
            'top', '80%'
        );
        $('.range__block3').css(
            'left', '15%'
        );
        $('.range__block4').css(
            'top', '15%'
        );
        $('.range__block4').css(
            'left', '70%'
        );
        $('.range__block5').css(
            'top', '55%'
        );
        $('.range__block5').css(
            'left', '80%'
        );
        $('.range__block6').css(
            'top', '25%'
        );
        $('.screen5__caption').css(
            'margin-top', '23.86rem'
        );
    }

    if (width > 767) {
        $('.screen2__animation__img').css(
            'width', '80%',
        );
    }


    function runTimer() {
        slideInterval = setInterval(function () {
            slider.jRange('setValue', slide.toString());
            if (slide === '14') {
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

        $('.swiper-container').css('overflow: hidden');

        if (width > 1025) {
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
            $('.screen2__animation__img').css(
                'width', '80%',
            );
        } else {
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
            $('.swiper-button-next, .swiper-button-prev').css(
                // 'width', '100%',
                'top', '60%',
            );
            $('.screen2__animation__img').css(
                'width', '60%',
            );
            $('.screen4').css(
                'height', '73rem',
            );
        };

        if (width < 769) {
            $('.range__block6').css(
                'top', '0'
            );
        } else {
            $('.range__block6').css(
                'top', '25%'
            );
        };

        if (width < 440) {
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'bottom', '3%'
            );
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'height', '20%'
            );
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'width', '50%'
            );
            $('.screen3__block1').css(
                'left', '10%'
            );

            $('.range__block1').css(
                'top', '0'
            );
            $('.range__block1').css(
                'left', '30%'
            );
            $('.range__block2').css(
                'top', '0'
            );
            $('.range__block2').css(
                'left', '-3%'
            );
            $('.range__block3').css(
                'top', '60%'
            );
            $('.range__block3').css(
                'left', '10%'
            );
            $('.range__block4').css(
                'top', '0'
            );
            $('.range__block4').css(
                'left', '63%'
            );
            $('.range__block5').css(
                'top', '60%'
            );
            $('.range__block5').css(
                'left', '45%'
            );

            $('.screen5__caption').css(
                'margin-top', '23.86rem'
            );
        } else {
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'bottom', '5%'
            );
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'height', '10%'
            );
            $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
                'width', '47.5%'
            );
            $('.screen3__block1').css(
                'left', '15%'
            );

            $('.range__block1').css(
                'top', '0'
            );
            $('.range__block1').css(
                'left', '30%'
            );
            $('.range__block2').css(
                'top', '35%'
            );
            $('.range__block2').css(
                'left', '0'
            );
            $('.range__block3').css(
                'top', '80%'
            );
            $('.range__block3').css(
                'left', '15%'
            );
            $('.range__block4').css(
                'top', '15%'
            );
            $('.range__block4').css(
                'left', '70%'
            );
            $('.range__block5').css(
                'top', '55%'
            );
            $('.range__block5').css(
                'left', '80%'
            );
            $('.screen5__caption').css(
                'margin-top', '23.86rem'
            );
        }
        if (width < 769) {
            $('.range__block6').css(
                'top', '0'
            );
        } else {
            $('.range__block6').css(
                'top', '25%'
            );
        };
    });

    // $( window ).on( "orientationchange", function( event ) {
    //     // console.log(132);
    //     if (width > 769) {
    //         var slider = $('.slider-input').jRange({
    //             onstatechange: function (value) {
    //                 slide = value;
    //                 clearInterval(slideInterval);
    //                 runTimer();
    //                 $('.screen2__animation__img').removeClass('active');
    //                 $('.screen2__animation__img.take_' + value).addClass('active');
    //                 if (value%2===0) {
    //                     $('.screen2__animation__motor').removeClass('active');
    //                     $('.screen2__animation__motor.take_' + value).addClass('active');
    //                     $('.inputRange__item').removeClass('circle__after');
    //                     $('.inputRange__item').each(function(index, elem) {
    //                         if (index < value/2+1) {
    //                             $(elem).addClass('circle__after');
    //                         }
    //                     })
    //                 }
    //             },
    //             from: 0,
    //             to: 14,
    //             step: 1,
    //             scale: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    //             format: '%s',
    //             width: 485,
    //             showLabels: false,
    //             snap: true,
    //             showScale: false,
    //         });
    //         $('.screen2__animation__img').css(
    //             'width', '80%',
    //         );
    //     } else if (width < 769) {
    //         $('.screen2__animation__img').css(
    //         'width', '60%',
    //         );
    //         console.log(999);
    //         $('.input').css('width', '207px');
    //         $('.inputRange').css('width', '207px');
    //         // var slider = $('.slider-input').jRange({
    //         //     onstatechange: function (value) {
    //         //         slide = value;
    //         //         clearInterval(slideInterval);
    //         //         runTimer();
    //         //         $('.screen2__animation__img').removeClass('active');
    //         //         $('.screen2__animation__img.take_' + value).addClass('active');
    //         //         if (value%2===0) {
    //         //             $('.screen2__animation__motor').removeClass('active');
    //         //             $('.screen2__animation__motor.take_' + value).addClass('active');
    //         //             $('.inputRange__item').removeClass('circle__after');
    //         //             $('.inputRange__item').each(function(index, elem) {
    //         //                 if (index < value/2+1) {
    //         //                     $(elem).addClass('circle__after');
    //         //                 }
    //         //             })
    //         //         }
    //         //
    //         //     },
    //         //     from: 0,
    //         //     to: 14,
    //         //     step: 1,
    //         //     scale: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    //         //     format: '%s',
    //         //     width: 207,
    //         //
    //         //     showLabels: false,
    //         //     snap: true,
    //         //     showScale: false,
    //         // });
    //         // $('.swiper-button-next, .swiper-button-prev').css(
    //         //     // 'width', '100%',
    //         //     'top', '60%',
    //         // );
    //
    //         // $('.screen4').css(
    //         //     'height', '73rem',
    //         // );
    //     }
    //
    //     if (width < 420) {
    //         $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
    //             'bottom', '3%'
    //         );
    //         $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
    //             'height', '20%'
    //         );
    //         $('.screen3__block2__slide1, .screen3__block2__slide2, .screen3__block2__slide3').css(
    //             'width', '50%'
    //         );
    //         $('.screen3__block1').css(
    //             'left', '10%'
    //         );
    //
    //         $('.range__block1').css(
    //             'top', '0'
    //         );
    //         $('.range__block1').css(
    //             'left', '30%'
    //         );
    //         $('.range__block2').css(
    //             'top', '0'
    //         );
    //         $('.range__block2').css(
    //             'left', '-3%'
    //         );
    //         $('.range__block3').css(
    //             'top', '60%'
    //         );
    //         $('.range__block3').css(
    //             'left', '10%'
    //         );
    //         $('.range__block4').css(
    //             'top', '0'
    //         );
    //         $('.range__block4').css(
    //             'left', '63%'
    //         );
    //         $('.range__block5').css(
    //             'top', '60%'
    //         );
    //         $('.range__block5').css(
    //             'left', '45%'
    //         );
    //         $('.range__block6').css(
    //             'top', '0'
    //         );
    //         $('.screen5__caption').css(
    //             'margin-top', '23.86rem'
    //         );
    //     }
    // });



    // callback();

});



