function Circle(mapglAPI, map, coord, radius, color){
        const circle = new mapglAPI.Circle(map, {
            coordinates: coord,
            radius: radius,
            color: `${color}`,
            maxZoom: 200,
            strokeWidth: 2,
            strokeColor: '#ffffff',
        });
    };

export default Circle;