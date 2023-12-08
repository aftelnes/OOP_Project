import { observer } from "mobx-react";

import classes from "../UI/CoordInput_style/CoordInput.module.css";
import mainStore from "../../store/mainStore";

const InfoAfterClick = observer(() => {
  return (
    <div className={classes.coordInputMain}>
      <div>
        <div>Адрес: {mainStore.address}</div>
        <div>Кол-во жителей: {mainStore.people}</div>
        <div>Общая площадь: {mainStore.square} кв.м</div>
        <div>Жилая площадь: {mainStore.live_square} кв.м</div>
        <div>Кол-во этажей: {mainStore.floors}</div>
        <div>Район: {mainStore.area_id}</div>
        <div>Долгота: {mainStore.longitude_coord}</div>
        <div>Широта: {mainStore.latitude_coord}</div>
      </div>
    </div>
  );
});

export default InfoAfterClick;
