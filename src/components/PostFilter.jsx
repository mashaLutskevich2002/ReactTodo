import React from 'react';
import CreateInput from "./UI/Input/CreateInput";
import CreateSelect from "./UI/Select/CreateSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <CreateInput
                value = {filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
                style={{marginTop:'20px'}}
                placeholder='Поиск' />
            <CreateSelect
                value={filter.sort }
                onChange={selectSort => setFilter({...filter, sort: selectSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]
                }/>
        </div>
    );
};

export default PostFilter;