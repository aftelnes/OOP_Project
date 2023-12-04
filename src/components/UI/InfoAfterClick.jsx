import { observer } from "mobx-react";

import classes from "../UI/CoordInput_style/CoordInput.module.css";
import mainStore from "../../store/mainStore";

const InfoAfterClick = observer(() => {
  return (
    <div className={classes.coordInputMain}>
      {mainStore.latitude_coord != 0 && mainStore.longitude_coord != 0 ? (
        <div>
          Long: {mainStore.longitude_coord} | Latt {mainStore.latitude_coord}
        </div>
      ) : (
        <div>CATS</div>
      )}
    </div>
  );
});

export default InfoAfterClick;
