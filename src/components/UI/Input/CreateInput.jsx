import React from 'react';
import classes from "./CreateInput.module.css";

const CreateInput = (props) => {
    return (
        <div>
            <input className={classes.myInput} type='text' {...props}  placeholder={props.placeholder}/>
        </div>
    );
};

export default CreateInput;