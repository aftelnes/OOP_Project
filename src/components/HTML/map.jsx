import classes from './map_style/map.module.css'
import {load} from '@2gis/mapgl'



const Map = function() {
    return(
        <div className={classes.mapMain}>

            <div>
                <h4>а вот тут на фоне будет красивая размытая картинка</h4>
                
            </div>
        </div>
    )
};

export default Map;