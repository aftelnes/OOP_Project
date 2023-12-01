import React from "react";
import classes from './MyButton_style/MyButton.module.css'

const Btn = ({children}) => {
    return(
        <button className={classes.myBtn}>
            {children}
        </button>
    );
};

export default Btn;