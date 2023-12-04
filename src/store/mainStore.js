import { makeAutoObservable } from "mobx";

class MainStore {
  latitude_coord = 0;
  longitude_coord = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCoords(long, lat) {
    this.latitude_coord = lat;
    this.longitude_coord = long;
    console.log(
      `Установил long = ${this.longitude_coord}, latt = ${this.latitude_coord}`
    );
  }
}

export default new MainStore();
