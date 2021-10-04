import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import classes from "./CreateNavbar.module.css";

const CreateNavbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link className={classes.navbar__Link} to='/about'> О сайте</Link>
                <Link className={classes.navbar__Link} to='/posts'> Посты </Link>
            </div>
        </div>
    );
};

export default CreateNavbar;