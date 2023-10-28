import { CircleClass } from "./Circle";

function Polygon(mapglAPI, map, coord, color) {
    const polygon = new mapglAPI.Polygon(map, {
        coordinates: [coord],
        color: `${color}`,
        strokeWidth: 3,
        strokeColor: '#ffffff',
    })
};

// export default Polygon;

export class PolygonClass{

    #mapglAPI = null;
    #map = null;
    #coord = 0;
    #color = '';
    #population = 0;

    constructor(mapglAPI, map, coord, color){
        this.#mapglAPI = mapglAPI;
        this.#map = map;
        this.#color = color;
        this.#coord = coord;
    };

    CreatePolygon(){
        const polygon = new this.#mapglAPI.Polygon(this.#map, {
            coordinates: [this.#coord],
            color: `${this.#color}`,
            strokeWidth: 3,
            strokeColor: '#ffffff',
        });
    };
};

const CreatePolygons = (polygon_num, mapglAPI, map, coord, color) =>{

    const test_json = {name: 'Cheremushki', coord: [
        [38.977857, 45.011340],
        [38.975394, 45.013911],
        [39.015504, 45.028252],
        [39.028047, 45.026756],
        [39.050274, 45.020803],
        [39.056297, 45.012595],
        [39.053766, 45.010820],
        [39.046685, 45.010505],
        [39.040007, 45.007240],
        [39.034017, 45.003451],
        [39.032199, 45.001329],
        [39.030310, 44.998585],
        [39.028401, 44.996443],
        [39.028401, 44.996644],
        [39.027221, 44.995615],
        [39.025189, 44.995128],
        [39.021282, 44.995010],
        [39.020882, 45.000878],
        [39.020080, 45.001385],
        [39.017379, 45.003031],
        [39.013392, 45.004768],
        [39.010095, 45.004906],
        [39.005319, 45.005450],
        [39.002755, 45.005006],
        [39.001969, 45.006904],
        [38.995437, 45.010648],
        [38.990175, 45.010230],
        [38.984278, 45.011466],
        [38.981242, 45.011049],
        [38.977857, 45.011340],
        [38.977857, 45.011340],
    ]};

    let testCheremushkiCoord = test_json.coord;

    const polygon = new PolygonClass(mapglAPI, map, testCheremushkiCoord, color);
    return polygon.CreatePolygon();

};

export default CreatePolygons;