import React, {useState, memo} from 'react';
import FilterPosts from "../../utils/FilterPosts";
import {useFetch} from "../../utils/custom-hooks/useFetch";
import Posts from "./Posts";

function Articles() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    const [filterData, setFilterData] = useState('')

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <Posts posts={data} filterData={filterData}/>
        </>
    );
}

export default memo(Articles);
