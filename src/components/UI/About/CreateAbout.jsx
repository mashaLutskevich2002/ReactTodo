import React from 'react';
import classes from "./CreateAbout.module.css";
import img from "../../../img/post.gif";
import smile from "../../../img/smile.png";

const CreateAbout = () => {
    return (
        <div className={classes.main}>
            <img src={img} alt='gif' className={classes.gif}/>
            <h1 className={classes.text}>Веб-приложение для постов</h1>
            <img className={classes.smile} src={smile} alt='smile' />
        </div>
    );
};

export default CreateAbout;