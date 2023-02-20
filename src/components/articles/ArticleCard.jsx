import React, {memo} from 'react';

function ArticleCard({title, body}) {
    return (
        <div data-testid={'article-card'} className={'dark:bg-slate-800 dark:border-gray-700 dark:shadow-none bg-gray-200 rounded-md border-2 border-gray-500 p-8'}>
            <h1 className={'text-xl font-medium mb-6 dark:text-slate-200'}>{title}</h1>
            <p className={'text-md font-normal dark:text-slate-300'}>{body}</p>
        </div>
    )
}

export default memo(ArticleCard);
