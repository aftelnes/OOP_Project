import axios from "axios";
import mainStore from "../../../../store/mainStore";

async function getAreaPopulationDensity(lng, latt) {
  try {
    const response = await axios.get(
      `http://213.171.3.197:8000/api/full_data`,
      {
        params: {
          lng: lng,
          latt: latt,
        },
      }
    );

    if (response.data.people != null) {
      try {
        mainStore.setPeople(response.data.people);
      } catch (error) {
        mainStore.setPeople("");
        console.log("людей нэт");
      }
    } else {
      mainStore.setPeople("");
    }

    if (response.data.square != null) {
      try {
        mainStore.setSquare(response.data.square);
      } catch (error) {
        mainStore.setSquare("");
        console.log("square нэт");
      }
    } else {
      mainStore.setSquare("");
    }

    if (response.data.floors != null) {
      try {
        mainStore.setFloors(response.data.floors);
      } catch (error) {
        mainStore.setFloors("");
        console.log("floors нэт");
      }
    } else {
      mainStore.setFloors("");
    }

    if (response.data.live_square != null) {
      try {
        mainStore.setLiveSquare(response.data.live_square);
      } catch (error) {
        mainStore.setLiveSquare("");
        console.log("live_square нэт");
      }
    } else {
      mainStore.setLiveSquare("");
    }

    if (response.data.area_id != null) {
      try {
        mainStore.setAreaId(response.data.area_id);
      } catch (error) {
        mainStore.setAreaId("");
        console.log("area_id нэт");
      }
    } else {
      mainStore.setAreaId("");
    }

    if (response.data.address != null) {
      try {
        mainStore.setAddress(response.data.address);
      } catch (error) {
        mainStore.setAddress("");
        console.log("address нэт");
      }
    } else {
      mainStore.setAddress("");
    }
  } catch (error) {
    mainStore.setPeople("");
    mainStore.setSquare("");
    mainStore.setFloors("");
    mainStore.setLiveSquare("");
    mainStore.setLiveSquare("");
    mainStore.setAreaId("");
    mainStore.setAddress("");
    console.log(`ERROR = ${error}`);
  }
}

export default getAreaPopulationDensity;
