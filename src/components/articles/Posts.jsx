import React from 'react';
import ArticleCard from "./ArticleCard";
import CardSkeleton from "../../utils/loader/CardSkeleton";

function Posts({posts,filterData }) {
    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
            {
                posts ?
                posts
                    .filter(({title}) => title.toLowerCase().includes(filterData.toLowerCase()))
                    .map(({id,title,body}) => <ArticleCard key={id} title={title} body={body} />) :
                    <CardSkeleton counter={8}/>
            }
        </div>
    );
}

export default Posts;
