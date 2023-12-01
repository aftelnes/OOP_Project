import classes from "./Inputs_style/Inputs.module.css";
import CoordInput from "./CoordInput";
import AreaPopulationDensityInput from "./AreaPopulationDensityInput";

const Inputs = () => {
  return (
    <div className={classes.inputsMain}>
      <CoordInput></CoordInput>
      <AreaPopulationDensityInput />
    </div>
  );
};

export default Inputs;
