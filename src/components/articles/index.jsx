import React, {useState, memo} from 'react';
import ArticleCard from "./ArticleCard";
import FilterPosts from "../../utils/FilterPosts";
import {useFetch} from "../../utils/custom-hooks/useFetch";

function Articles() {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20' , 'get')
    const [filterData, setFilterData] = useState('')

    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
                {
                    posts &&
                    posts
                        .filter(({title}) => title.toLowerCase().includes(filterData.toLowerCase()))
                        .map(({id,title,body}) => <ArticleCard key={id} title={title} body={body} />)
                }
            </div>
        </>
    );
}

export default memo(Articles);
