import React from "react";
import classes from './MapStyles/MapWrapper.module.css'

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" className={classes.mapWrapper}></div>;
    },
    () => true,
);

export default MapWrapper;