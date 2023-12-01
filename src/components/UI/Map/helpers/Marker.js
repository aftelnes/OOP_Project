export class MarkerClass {
  #mapglAPI = null;
  #map = null;
  #coord = 0;

  constructor(mapglAPI, map, coord) {
    this.#mapglAPI = mapglAPI;
    this.#map = map;
    this.#coord = coord;
  }

  CreateMarker() {
    const marker = new this.#mapglAPI.Marker(this.#map, {
      coordinates: this.#coord,
      label: {
        text: `${this.#coord}`,
        offset: [0, 25],
        relativeAnchor: [0.5, 0],
        image: {
          url: "https://docs.2gis.com/img/mapgl/tooltip-top.svg",
          size: [100, 50],
          stretchX: [
            [10, 40],
            [60, 90],
          ],
          stretchY: [[20, 40]],
          padding: [20, 10, 10, 10],
        },
      },
    });
  }
}
