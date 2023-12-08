import { makeAutoObservable } from "mobx";

class UserCoords {
  latitude_coord = 45.024359;
  longitude_coord = 38.971526;
  radius = 10;

  findBtnClicked = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLatitudeCoord(value) {
    this.latitude_coord = value;
    console.log(`this.latitude_coord = ${this.latitude_coord}`);
  }
  setLongitudeCoord(value) {
    this.longitude_coord = value;
    console.log(`this.longitude_coord = ${this.longitude_coord}`);
  }
  setRadius(value) {
    this.radius = value;
  }

  findBtnWasClicked() {
    this.findBtnClicked = true;
    console.log("Changed btn value");
  }

  showAll() {
    console.log(this.latitude_coord, this.longitude_coord, this.radius);
  }
}

export default new UserCoords();
