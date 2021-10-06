import React, {useEffect, useState} from 'react';
import classes from "./CreateAbout.module.css";
import img from "../../../img/post.gif";
import smile from "../../../img/smile.png";
import CreateLoader from "../Loader/CreateLoader";

const CreateAbout = () => {
    const [content, setContent] = useState(false)

    useEffect(()=>{
        setContent(true)
    })

    return (
        <div className={classes.main}>
            {
                content
                ? (
                    <React.Fragment>
                        <img src={img} alt='gif' className={classes.gif}/>
                        <h1 className={classes.text}>Веб-приложение для постов</h1>
                        <img className={classes.smile} src={smile} alt='smile' />
                    </React.Fragment>
                    )
                : <CreateLoader/>
            }
        </div>
    );
};

export default CreateAbout;