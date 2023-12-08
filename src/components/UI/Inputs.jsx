import classes from "./Inputs_style/Inputs.module.css";
import CoordInput from "./CoordInput";
import AreaPopulationDensityInput from "./AreaPopulationDensityInput";
import InfoAfterClick from "./InfoAfterClick";

const Inputs = () => {
  return (
    <div className={classes.inputsMain}>
      <CoordInput></CoordInput>
      <InfoAfterClick />
    </div>
  );
};

export default Inputs;
