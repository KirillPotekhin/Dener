var mapInited = false;
var mapvalue = 0;


$(window).on('scroll', function() {
    if (($(window).scrollTop() > $(document).height() - $('.section_five').height() * 1.2) && !mapInited){
        mapInited = true;
        DG.then(function() {
            var map;

            map = DG.map('map', {
                center: [55.0425, 82.9343],
                zoom: 16
            });
            if (mapvalue === 0) {
                map.locate({setView: true})
                    .on('locationfound', function(e) {
                        DG.marker([e.latitude, e.longitude]).addTo(map);
                        mapvalue = 1;
                        console.log('готово')
                    })
                    .on('locationerror', function(e) {
                        DG.popup()
                            .setLatLng(map.getCenter())
                            .setContent('Доступ к определению местоположения отключён')
                            .openOn(map);
                            mapvalue = 1;
                    });
            }



            DG.marker([55.075230, 82.961786]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:25 лет Октября, 16/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.865871, 83.080225]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Героев Труда, 27<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.033464, 82.971812]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Б. Богаткова, 165<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.039082, 82.972095]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Б. Богаткова, 213  (Кошурникова)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.036883, 82.976422]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Б.Богаткова, 221 (Золотая Нива)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.041281, 82.983091]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Б.Богаткова, 264 (Лада)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.888912, 83.073776]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Бердское шоссе 451, Ельцовка<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.858725, 82.978011]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Гидромонтажная, 46 ОбьГэс<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.763116, 83.113885]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Бердск, Ж/д вокзал, ул.Вокзальная, 35<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.839716, 83.087080]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Жемчужная, 35<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.868119, 83.092567]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Иванова, 30<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.458491, 83.375076]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Линево, ул.Листвянская, 19а<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.764260, 83.096530]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Бердск, Первомайская, 22<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.853623, 82.973827]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Софийская, 1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.746884, 83.057969]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Бердск, ТЦ Родина, ул.Красная Сибирь, 115<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.221456, 83.372761]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Черепаново, ул.Романова, 1/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.852861, 83.044522]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Шлюзовая, 26<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.888642, 83.097471]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Экваторная 2а<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.072184, 82.946094]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Богдана  Хмельницкого, 25 (Нептун)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.074711, 82.952207]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Богдана Хмельницкого, 35 (ДК Горького)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.081003, 82.965181]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Богдана Хмельницкого, 72 (Учительская)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.007927, 82.936567]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Большевистская,12 (Речной вокзал)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.035412, 82.899271]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Вокзальная м-ль, 2<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.010965, 82.938852]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Восход, 1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.001655, 83.015347]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Выборная, 89/4<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.037944, 83.014836]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:ГБШ,64<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.042722, 82.925484]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Гоголя, 24<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.935490, 82.908101]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Громова, 16<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.048972, 82.960071]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дзержинского пр-т, 1/4 (Практик)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.054814, 82.972190]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дзержинского пр-т, 35<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.033136, 82.910553]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Димитрова пр-т, 5 (ЦУМ)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.036269, 83.001029]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Доватора, 128/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.060629, 82.912552]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дуси Ковальчук, 179/2<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.065949, 82.928575]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дуси Ковальчук, 191 (СГУПС)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.063710, 82.923824]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дуси Ковальчук, 378а<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.052488, 82.894297]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Дуси Ковальчук, 73<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.062262, 82.892392]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Жуковского, 109<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.989512, 82.815653]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Забалуева, 58<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.010408, 82.939439]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Зыряновская, 57 (Восход, 2)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.611700, 83.280059]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Искитим, Автовокзал м-он Южный, 72В<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.642609, 83.295583]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Искитим, Ж/Д вокзал, ул. Станционная 1-я, 25<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.639647, 83.304285]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Искитим, ул. Пушкина, 65<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.633083, 83.302785]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Искитим, ул. Юбилейная, 52, ост. Путепровод<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.988211, 82.905085]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:К. Маркса, 20  (м. Студенческая)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.989732, 82.906914]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:К. Маркса, 39<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.983692, 82.897387]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:К. Маркса, 6  (Башня)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.983217, 82.892345]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:К.Маркса, 2 (Версаль)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.013069, 82.952613]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Кирова, 108<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.018905, 82.939578]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Кирова, 25/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.018479, 82.939690]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Кирова, 46 (м.Октябрьская)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.941878, 83.19166]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания <br>Адрес:Кольцово пос, пр. Академика Сандахчиева, 21<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.957523, 82.961926]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Комсомольская, 16<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.992660, 82.895036]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Котовского, 2/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.020462, 82.922658]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.058414, 82.912551]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 157<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.059150, 82.913929]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 186/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.016251, 82.923532]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 2А (Автовокзал 2)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.024942, 82.922400]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 28<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.015754, 82.924407]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 4 (Автовокзал 1)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.053125, 82.913935]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 85 (ост. Кропоткина)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.050857, 82.915100]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Красный пр., 88 (Гагаринская)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.056305, 82.930882]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Кропоткина, 120/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.970268, 82.843604]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Курганская, 38/4 (Волховская/ 9-ой Гв.Див.)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.033928, 83.018753]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Лазурная, 26<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.029635, 82.914782]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Ленина, 10<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.961113, 82.935358]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Мира, 62(Оловозавод)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.042728, 82.920400]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Мичурина,25/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.011986, 82.959621]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Никитина, 62<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.097356, 82.965681]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Объединения, 27 (Юбилейный)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.996315, 82.688215]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Обь, ЖКО Аэропорта, 16<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.031852, 82.930543]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Орджоникидзе, 30<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.966541, 83.110508]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Первомайская, 100<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.941097, 82.896398]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Петухова,16/5<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.994972, 82.867659]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Пл. Труда 1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.982013, 82.890490]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Покрышкина, 6 (Кристалл)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.109558, 82.972934]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Рассветная, 6 (Снегири, 5й мкр)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.992453, 82.870505]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Станиславского, 1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.982945, 82.871856]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Станиславского, 15<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.997730, 82.865356]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Станционная, 16<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.997197, 82.852525]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Станционная, 30а<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.982025, 82.889732]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Титова, 1/1<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.982364, 82.880993]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Титова, 13<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.057623, 82.977821]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Трикотажная, 29<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.067593, 82.964771]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Трикотажная, 60 (Дом Одежды)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.989403, 82.857869]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Троллейная, 15 (Ленинский ЗАГС)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([54.964197, 82.852870]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Троллейная, 85<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.038964, 82.903730]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Челюскинцев, 15<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.034090, 82.898441]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Шамшурина, 41 (Ж/Д вокзал)<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');
            DG.marker([55.010040, 82.877482]).addTo(map).bindPopup('Дядя Дёнер<br>сеть кафе быстрого питания<br>Адрес:Энергетиков пр-зд, 17<br>Телефон предзаказа: 399-1-400<br>Режим работы: круглосуточно');

        });
    }

    var parallaxOffset = $(window).scrollTop() * -0.5;
    $('.parallax__layer--back').css({'background-position': `0 ${parallaxOffset}px`});
    var firstvalue = 0;
    var secondvalue = 0;
    var threevalue = 0;
    var fourvalue = 0;
    var fivevalue = 0;

    if ((firstvalue===0) && ($(window).scrollTop() > $('.section_first').height()) && ($(window).scrollTop() < $('.section_first').height() + $('.section_second').height())){
        yaCounter46236420.reachGoal('mainscroll'),
        ga('send', 'event', 'form', 'submit', 'gmainscroll'),
        firstvalue = 1
    }
    if ((secondvalue===0) && ($(window).scrollTop() > $('.section_first').height() + $('.section_second').height()) && ($(window).scrollTop() < $('.section_first').height() + $('.section_second').height() + $('.section_three').height())){
        yaCounter46236420.reachGoal('2croll'),
        ga('send', 'event', 'form', 'submit', 'g2scroll'),
        secondvalue = 1
    }
    if ((threevalue===0) && ($(window).scrollTop() > $('.section_first').height() + $('.section_second').height() + $('.section_three').height()) && ($(window).scrollTop() < $('.section_first').height() + $('.section_second').height() + $('.section_three').height() + $('.section_four').height())){
        yaCounter46236420.reachGoal('3croll'),
        ga('send', 'event', 'form', 'submit', 'g3scroll'),
        threevalue = 1
    }
    if ((fourvalue===0) && ($(window).scrollTop() > $('.section_first').height() + $('.section_second').height() + $('.section_three').height() + $('.section_four').height()) && ($(window).scrollTop() < $(document).height() - $('.section_five').height())){
        yaCounter46236420.reachGoal('4croll'),
        ga('send', 'event', 'form', 'submit', 'g4scroll'),
        fourvalue = 1
    }
    if ((fivevalue===0) && ($(window).scrollTop() > $(document).height() - $('.section_five').height())){
        yaCounter46236420.reachGoal('5croll'),
        ga('send', 'event', 'form', 'submit', 'g5scroll'),
        fivevalue = 1
    }
    return true;


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
                    runTimer();
                    clearInterval(slideInterval);
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
                    runTimer();
                    clearInterval(slideInterval);
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
        autoplay: 4000,
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



