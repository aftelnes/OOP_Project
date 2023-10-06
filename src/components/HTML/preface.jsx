import classes from './preface_style/preface.module.css'
import PrefaceText from './preface_style/preface_text';

const Preface = function() {
    return(
        <div className={classes.prefaceMain}>
            <div>
                {/* <div className={classes.prefaceBackgroundFoto}><PrefaceBackgroundFoto></PrefaceBackgroundFoto></div> */}
                <div className={classes.prefaceText}>
                    <h3>fgfdg</h3>
                    {/* <PrefaceText>kldmfvflk</PrefaceText> */}
            </div>
                {/* <h4>а вот тут на фоне будет красивая размытая картинка</h4> */}
            </div>
            
        </div>
    )
};

export default Preface;