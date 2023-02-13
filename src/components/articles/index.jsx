import React, {useState, memo, useEffect} from 'react';
import FilterPosts from "../../utils/FilterPosts";
import {useFetch} from "../../utils/custom-hooks/useFetch";
import Posts from "./Posts";

function Articles() {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20' , 'get')
    const [filterData, setFilterData] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        setList(posts)
    }, [posts])
    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <Posts posts={list} filterData={filterData}/>
        </>
    );
}

export default memo(Articles);
