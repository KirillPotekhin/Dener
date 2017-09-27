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

    map.locate({setView: true, watch: true})
        .on('locationfound', function(e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })
        .on('locationerror', function(e) {
            DG.popup()
                .setLatLng(map.getCenter())
                .setContent('Доступ к определению местоположения отключён')
                .openOn(map);
        });

    DG.marker([54.98, 82.89]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');
    DG.marker([54.98723956970163, 82.90246349999997]).addTo(map).bindPopup('Общага');
    DG.marker([54.96, 82.89]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');
    DG.marker([54.95, 82.89]).addTo(map).bindPopup('Дядя денер <br> работаем круглосуточно');

});

$( document ).ready(function() {
    $('#rangeSlider').rangeslider({
        polyfill: false,
        onSlideEnd: function() {
            console.log(1)
        },
        onSlide: function(position, value) {
            $('.screen2__animation__motor').removeClass('active');
            $('.screen2__animation__motor.take_' + value).addClass('active');
            $('.inputRange__item').removeClass('circle__after');
            $('.inputRange__item').each(function(index, elem) {
                if (index < value) {
                    $(elem).addClass('circle__after');
                }
            })
        },
    });


});

