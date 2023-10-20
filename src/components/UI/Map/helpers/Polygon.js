function Polygon(mapglAPI, map, coord, color) {
    const polygon = new mapglAPI.Polygon(map, {
        coordinates: [coord],
        color: `${color}`,
        strokeWidth: 3,
        strokeColor: '#ffffff',
    })
};

export default Polygon;