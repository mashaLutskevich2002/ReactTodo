import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, onClick}) => {
    return (
        <div >
            <button className={classes.but} onClick={onClick}> {children}  </button>
        </div>
    );
};

export default MyButton;