import React from 'react';
import classes from "./CreateSelect.module.css";

const CreateSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div style={{marginTop:'20px'}}>
            <select className={classes.select} value={value} onChange={e=> onChange(e.target.value)}>
                <option disabled value='' > {defaultValue} </option>
                {options.map((option =>
                        <option key={option.value} value={option.value}> {option.name} </option>
                ))}
            </select>
        </div>
    );
};

export default CreateSelect;