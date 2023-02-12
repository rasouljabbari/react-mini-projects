import React from 'react';
import ArticleCard from "./ArticleCard";

function Posts({posts,filterData }) {
    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
            {
                posts &&
                posts
                    .filter(({title}) => title.toLowerCase().includes(filterData.toLowerCase()))
                    .map(({id,title,body}) => <ArticleCard key={id} title={title} body={body} />)
            }
        </div>
    );
}

export default Posts;