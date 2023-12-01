import { observer } from "mobx-react-lite";
import { TextInput } from '@mantine/core';
import { Button } from "@mantine/core";
import classes from './CoordInput_style/CoordInput.module.css'
import UserCoords from '../../store/coordData'

const CoordInput = observer(() => {
    return (
        <div className={classes.coordInputMain}>
            <TextInput
                className={classes.textInput}
                label="Введите широту"
                description="Пример: 45.024359"
                placeholder="Широта"
                onChange={(event) => UserCoords.setLatitudeCoord(event.currentTarget.value)}
            />
            <TextInput
                className={classes.textInput}

                label="Введите долготу"
                description="Пример: 38.971526"
                placeholder="Долгота"
                onChange={(event) => UserCoords.setLongitudeCoord(event.currentTarget.value)}
            />
            <TextInput
                className={classes.textInput}
                label="Введите радиус"
                description="Пример в метрах: 100"
                placeholder="Радиус"
                onChange={(event) => UserCoords.setRadius(event.currentTarget.value)}
            />
            <Button
                className={classes.button}
                variant="gradient"
                gradient={{ from: 'rgb(0, 33, 45)', to: 'rgb(52, 118, 189)', deg: 125 }}
                onClick={() => {
                    UserCoords.showAll();
                    UserCoords.findBtnWasClicked();
            }}
            >
                Отправить
            </Button>
        </div>
    )
})

export default CoordInput;