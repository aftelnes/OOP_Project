import classes from './preface_style/preface.module.css'


const Preface = function() {
    return(
        <div className={classes.prefaceMain}>
            <div>
                <h4>а вот тут на фоне будет красивая размытая картинка</h4>
            </div>
            <div className={classes.prefaceText}>
                <h3>Вот тут будет пояснительный текст</h3>
            </div>
        </div>
    )
};

export default Preface;