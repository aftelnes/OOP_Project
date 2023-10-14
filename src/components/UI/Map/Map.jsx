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
                                    [38.97, 45.02],
                                    [38.98, 45.03],
                                    [38.99, 45.04],
                                    [39.20, 45.05],
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
                    color: '#0000ff',
                },
            };
            map.on('styleload', () => {
                map.addLayer(layer);
            }) 

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