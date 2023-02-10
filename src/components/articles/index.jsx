import React, {useState, memo} from 'react';
import usePosts from "./usePosts";
import ArticleCard from "./ArticleCard";
import FilterPosts from "./FilterPosts";

function Articles() {
    const [posts] = usePosts()
    const [filterData, setFilterData] = useState('')

    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
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
