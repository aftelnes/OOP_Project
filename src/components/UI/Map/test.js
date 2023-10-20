// API key can be used on codepen.io only!
// You can get more info on https://docs.2gis.com/

const map = new mapgl.Map('container', {
    center: [55.4218, 25.3357],
    zoom: 17,
    pitch: 45,
    key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
});
const data = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                type: 'topLine',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                    [55.41612267494202, 25.3373063569028],
                    [55.418890714645386, 25.33572577372391],
                    [55.41969537734985, 25.336870001646474],
                    [55.42081117630005, 25.33621061738493],
                    [55.421626567840576, 25.337393627765234],
                    [55.42233467102051, 25.336966969617198],
                    [55.42382597923279, 25.339100245313542],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'star',
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [55.422656536102316, 25.335250625051458],
                        [55.42331099510195, 25.335570623342118],
                        [55.42392253875736, 25.33520214038817],
                        [55.423622131347685, 25.335774258177413],
                        [55.42422294616701, 25.336074861355655],
                        [55.423579216003446, 25.33610395194616],
                        [55.42338609695437, 25.336666368655063],
                        [55.42309641838077, 25.336123345669286],
                        [55.422409772872946, 25.33614273938931],
                        [55.42298913002018, 25.33580334884018],
                        [55.422656536102316, 25.335250625051458],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'star',
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [55.419437885284445, 25.334988807638815],
                        [55.42009234428408, 25.335308806621768],
                        [55.42070388793948, 25.334940322870644],
                        [55.420403480529814, 25.33551244189763],
                        [55.42100429534914, 25.335813045726233],
                        [55.42036056518557, 25.33584213637969],
                        [55.420167446136496, 25.336404554305396],
                        [55.419877767562895, 25.335861530144776],
                        [55.419191122055075, 25.335880923906757],
                        [55.419770479202306, 25.33554153262335],
                        [55.419437885284445, 25.334988807638815],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'bottomLine',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                    [55.42360067367554, 25.33460092894936],
                    [55.42147636413574, 25.335803348840205],
                    [55.42107939720153, 25.335231231188487],
                    [55.42302131652832, 25.334077290746556],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'marker',
                label: 'Star #2',
                color: 'blue',
            },
            geometry: {
                type: 'Point',
                coordinates: [55.42332172393799, 25.33587122702617],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'marker',
                label: 'Star #1',
                color: 'blue',
            },
            geometry: {
                type: 'Point',
                coordinates: [55.420124530792236, 25.335590017150714],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'marker',
                color: 'gray',
            },
            geometry: {
                type: 'Point',
                coordinates: [55.4215407371521, 25.336588794091984],
            },
        },
        {
            type: 'Feature',
            properties: {
                type: 'marker',
                color: 'gray',
            },
            geometry: {
                type: 'Point',
                coordinates: [55.42234539985657, 25.33490153504211],
            },
        },
    ],
};
const source = new mapgl.GeoJsonSource(map, {
    data,
    attributes: {
        bar: 'asd',
    },
});
map.on('styleload', () => {
    map.addLayer(
        {
            type: 'polygon',
            id: 'my-stars',
            filter: [
                'all',
                ['match', ['sourceAttr', 'bar'], ['asd'], true, false],
                ['match', ['get', 'type'], ['star'], true, false],
            ],
            style: {
                color: '#fcc9ff',
            },
        },
        '31871',
    );
    map.addLayer(
        {
            type: 'dashedLine',
            id: 'my-dashedline',
            filter: [
                'all',
                ['match', ['sourceAttr', 'bar'], ['asd'], true, false],
                ['match', ['get', 'type'], ['topLine'], true, false],
            ],
            style: {
                color: '#0baf08',
                width: 10,
                dashLength: 10,
                gapLength: 5,
            },
        },
        '973940',
    );
    map.addLayer(
        {
            type: 'line',
            id: 'my-line',
            filter: [
                'all',
                ['match', ['sourceAttr', 'bar'], ['asd'], true, false],
                ['match', ['get', 'type'], ['bottomLine'], true, false],
            ],
            style: {
                color: '#ffcd17',
                width: 7,
            },
        },
        '973940',
    );
    map.addLayer({
        type: 'point',
        id: 'my-marker',
        filter: [
            'all',
            ['match', ['sourceAttr', 'bar'], ['asd'], true, false],
            ['match', ['get', 'type'], ['marker'], true, false],
        ],
        style: {
            iconImage: ['match', ['get', 'color'], ['blue'], 'ent_i', 'ent'],
            iconWidth: 25,
            textField: ['get', 'label'],
            textFont: ['Noto_Sans'],
            textColor: '#0098ea',
            textHaloColor: '#fff',
            textHaloWidth: 1,
            iconPriority: 100,
            textPriority: 100,
        },
    });
});