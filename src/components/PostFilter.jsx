import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value = {filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
                style={{marginTop:'20px'}}
                placeholder='Поиск' />
            <MySelect
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