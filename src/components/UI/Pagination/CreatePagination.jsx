import React from 'react';
import CreatePostButton from "../Button/CreatePostButton";
import {getPagesArray} from "../../../utils/pages";

const CreatePagination = ({totalPages, page, changePage}) => {
    let pageArray= getPagesArray(totalPages)
    return (

            <div style={{display:"flex", marginBottom:'20px'}}>
                { pageArray.map(p=>
                    <CreatePostButton key={p} onClick={()=> changePage(p)}> {p} </CreatePostButton>
                )}
            </div>

    );
};

export default CreatePagination;