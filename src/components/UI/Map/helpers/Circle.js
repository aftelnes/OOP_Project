function Circle(mapglAPI, map, coord, radius, color){
        const circle = new mapglAPI.Circle(map, {
            coordinates: coord,
            radius: radius,
            color: `${color}`,
            maxZoom: 200,
            strokeWidth: 2,
            strokeColor: `${color}`,
            userData: `hello`,
        });
    };

export default Circle;

export class CircleClass{

    #mapglAPI = null;
    #map = null;
    #coord = 0;
    #radius = 0;
    #color = '';
    #population = 0;

    constructor(mapglAPI, map, coord, radius, color){
        this.#mapglAPI = mapglAPI;
        this.#map = map;
        this.#coord = coord;
        this.#radius = radius;
        this.#color = color;
    };

    CreateCircle(){
        const circle = new this.#mapglAPI.Circle(this.#map, {
            coordinates: this.#coord,
            radius: this.#radius,
            color: `${this.#color}`,
            maxZoom: 200,
            strokeWidth: 2,
            strokeColor: `${this.#color}`,
        });
    };
};
