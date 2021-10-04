import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = (props) => {
    return (
        <div>
            <input className={classes.myInput} type='text' {...props}  placeholder={props.placeholder}/>
        </div>
    );
};

export default MyInput;