import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import classes from "./CoordInput_style/CoordInput.module.css";

const AreaPopulationDensityInput = () => {
  const [areaPopulationDensity, setAreaPopulationDensity] = useState(null);

  async function getAreaPopulationDensity(id) {
    try {
      const response = await axios.get(
        `http://213.171.3.197:8000/api/areas/${id}`
      );
      console.log(`Response = ${response.data.peoples}`);
      setAreaPopulationDensity(response.data.peoples);
    } catch (error) {
      console.log(`ERROR = ${error}`);
    }
  }

  useEffect(() => {
    console.log(`areaPopulationDensity = ${areaPopulationDensity}`);
  }, [areaPopulationDensity]);

  return (
    <div className={classes.coordInputMain}>
      <Select
        style={{ width: 400 }}
        label="Выберите район"
        placeholder="Выберите район"
        data={[
          { value: "1", label: "Западный район" },
          { value: "2", label: "Карасунский район" },
          { value: "3", label: "Прикубанский район" },
          { value: "4", label: "Центральный район" },
        ]}
        onChange={(value) => getAreaPopulationDensity(value)}
      />
      <div className={classes.areaPopResult}>
        Кол-во жителей в районе: {areaPopulationDensity}
      </div>
    </div>
  );
};

export default AreaPopulationDensityInput;
