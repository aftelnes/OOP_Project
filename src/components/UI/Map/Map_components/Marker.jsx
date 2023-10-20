import React from "react";

const Marker = ({mapglAPI, map}) => {

    const Circle = new mapglAPI.Circle(map, {
        coordinates: [38.99900, 45.024359],
        radius: 200,
        color: '#ff000055',
        maxZoom: 200,
        strokeWidth: 2,
        strokeColor: '#ffffff',
    });

    return(
        <div>
            {Circle}
        </div>
    );

}

export default Marker;