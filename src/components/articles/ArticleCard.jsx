import React, {memo} from 'react';

function ArticleCard({title, body}) {
    return (
        <div className={'bg-gray-200 rounded-md border-2 border-gray-500 p-8 m-8'}>
            <h1 className={'text-xl font-medium mb-6'}>{title}</h1>
            <p className={'text-md font-normal'}>{body}</p>
        </div>
    )
}

export default memo(ArticleCard);
