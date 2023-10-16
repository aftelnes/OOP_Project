import { load } from '@2gis/mapgl';
import React from 'react';
import MapWrapper from './MapWrapper';
import { useEffect } from 'react';
import classes from './MapStyles/Map.module.css'
import { MapContext } from './MapContext';

//[38.971526, 45.024359]

export const Map = () => {

    const [_, setMapInstance] = React.useContext(MapContext)

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [38.971526, 45.024359],
                zoom: 13,
                key: '77661842-aa62-4345-b828-82b1be08cdb7',
                trafficControl: 'topRight',
                zoomControl: true,
                scaleControl: true,
            });

            const data = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {
                            foo: 'qwe', // Уникальное свойство
                        },
                        geometry: {
                            type: 'Polygon',
                            coordinates: [
                                [
                                    [38.98, 45.03],
                                    [39.20, 45.05],
                                    [39.22, 45.06],
                                    [39.33, 45.10],
                                    [39.44, 45.12],
                                    [38.98, 45.03],


                                ],
                            ],
                        },
                    },
                ],
            };
            const source = new mapglAPI.GeoJsonSource(map, {
                data,
                attributes: {
                    bar: 'asd',
                },
            });
            const layer = {
                id: 'my-polygons-layer', // Each layer ID must be unique

                // Data filtering logic
                filter: [
                    'match',
                    ['sourceAttr', 'bar'],
                    ['asd'],
                    true, // Result if value of bar source attribute equals "asd"
                    false, // Result if not
                ],

                // Drawing object type
                type: 'polygon',

                // Style of drawing object
                style: {
                    color: '#ff0055',
                },
            };

            // map.on('styleload', () => {
            //     map.addLayer(layer);
            // })

            const circle = new mapglAPI.Circle(map, {
                coordinates: map.getCenter(),
                radius: 200,
                color: '#ff000055',
                maxZoom: 200,
                strokeWidth: 2,
                strokeColor: '#ffffff',
            });

            circle.on('click', () => {
                alert('circleMarker click');
            });


            const polygon = new mapglAPI.Polygon(map, {
                coordinates: [
                    [
                    [38.971526, 45.024359],
                    [38.979854, 45.029999],
                    [38.995526, 45.065659],
                    [39.000000, 45.053459],
                    [38.971526, 45.024359]
                    ]
                ],
                color: '#990000',
                strokeWidth: 3,
                strokeColor: '#bb0000',
            })
            polygon.on('click', () => {
                alert('Polygon click');
            });

            

        });



        // Сохраняем ссылку на карту
        setMapInstance(map);

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div className={classes.mapDivStyle}>
            <MapWrapper />
        </div>
    );
};

export default Map;