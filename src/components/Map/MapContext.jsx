import React from "react";

export const MapContext = React.createContext([undefined, () => {}]);
const MapProvider = (props) => {
    const [mapInstance, setMapInstance] = React.useState();

    return (
        <MapContext.Provider value={[mapInstance, setMapInstance]}>
            {props.children}
        </MapContext.Provider>
    );
};

export default MapProvider;