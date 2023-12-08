import { makeAutoObservable } from "mobx";

class MainStore {
  latitude_coord = "";
  longitude_coord = "";
  people = "";
  square = "";
  floors = "";
  live_square = "";
  area_id = "";
  address = "";

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
  setPeople(value) {
    this.people = value;
    console.log("Set people =", this.people);
  }
  setSquare(value) {
    this.square = value;
    console.log("Set square =", this.square);
  }
  setFloors(value) {
    this.floors = value;
    console.log("Set floors =", this.floors);
  }
  setLiveSquare(value) {
    this.live_square = value;
    console.log("Set live_square =", this.live_square);
  }
  setAreaId(value) {
    if (value == 1) {
      this.area_id = "Западный";
    } else if (value == 2) {
      this.area_id = "Карасунский";
    } else if (value == 3) {
      this.area_id = "Прикубанский";
    } else if (value == 4) {
      this.area_id = "Центральный";
    } else {
      this.area_id = "";
    }
    console.log("Set area_id =", this.area_id);
  }
  setAddress(value) {
    this.address = value;
    console.log("Set address =", this.address);
  }
}

export default new MainStore();
