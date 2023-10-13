import { load } from '@2gis/mapgl';
import React from 'react';
import MapWrapper from './MapWrapper';
import { useEffect } from 'react';
import classes from './MapStyles/Map.module.css'
import { MapContext } from './MapContext';


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
        });
        
        


        // Сохраняем ссылку на карту
        setMapInstance(map);

        // Удаляем карту при размонтировании компонента
        // return () => map && map.destroy();
    }, []);

    return (
        <div className={classes.mapDivStyle}>
            <MapWrapper />
        </div>
    );
};

export default Map;