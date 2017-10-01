// var map;
//
// DG.then(function () {
//     map = DG.map('map', {
//         center: [55.0425, 82.9343],
//         zoom: 15
//     });
// });

DG.then(function() {
    var map;



    map = DG.map('map', {
        center: [55.0425, 82.9343],
        zoom: 16
    });

    // map.locate({setView: true, watch: true})
    //     .on('locationfound', function(e) {
    //         DG.marker([e.latitude, e.longitude]).addTo(map);
    //     })
    //     .on('locationerror', function(e) {
    //         DG.popup()
    //             .setLatLng(map.getCenter())
    //             .setContent('Доступ к определению местоположения отключён')
    //             .openOn(map);
    //     });

    DG.marker([55.041601, 82.917294]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
    DG.marker([54.987239, 82.902463]).addTo(map).bindPopup('Общага');
    DG.marker([54.983695, 82.892536]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');
    DG.marker([54.987746, 82.906335]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');

});

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

    $('.slider-input').jRange({
        onstatechange: function (value) {
            $('.screen2__animation__img').removeClass('active');
            $('.screen2__animation__img.take_' + value).addClass('active');

            if (value%2===0) {
                console.log(1)
                $('.screen2__animation__motor').removeClass('active');
                $('.screen2__animation__motor.take_' + value).addClass('active');
            }

            // $('.inputRange__item').removeClass('circle__after');
            // $('.inputRange__item').each(function(index, elem) {
            //     if (index < value) {
            //         $(elem).addClass('circle__after');
            //     }
            // })
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

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween: 100,
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    $('.range__elem1').click(function (e) {
        var id = $(this).data('id');
        $('.range').removeClass('active');
        $('.range__elem3').removeClass('active');
        $(this).closest('.range').addClass('active');
        $('.range__elem3_' + id).addClass('active');
    })

});





