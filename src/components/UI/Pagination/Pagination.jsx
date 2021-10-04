import React from 'react';
import MyButton from "../Button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pageArray= getPagesArray(totalPages)
    return (

            <div style={{display:"flex", marginBottom:'20px'}}>
                { pageArray.map(p=>
                    <MyButton key={p} onClick={()=> changePage(p)}> {p} </MyButton>
                )}
            </div>

    );
};

export default Pagination;