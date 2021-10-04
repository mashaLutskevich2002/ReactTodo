import React from 'react';
import classes from './CreatePostButton.module.css'

const CreatePostButton = ({children, onClick}) => {
    return (
        <div >
            <button className={classes.but} onClick={onClick}> {children}  </button>
        </div>
    );
};

export default CreatePostButton;