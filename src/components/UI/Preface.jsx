import classes from './Preface_style/Preface.module.css'

const Preface = function() {
    return(
        <div className={classes.prefaceMain}>
            <div>
                <div className={classes.prefaceText}>
                    <h3>Сервис для анализа и прогнозирования нагрузки коммунальных сетей на основе "города".</h3>
                </div>
            </div>
            
        </div>
    )
};

export default Preface;