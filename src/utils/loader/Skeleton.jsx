import React from 'react';

function Skeleton({type,count = 1}) {

    const filledArray = new Array(count).fill(2);
    return (
        <div role="status" className="animate-pulse">
            {
                count > 0 &&
                filledArray.map(item =>
                    <div key={item} className={`${type === 'title' ? 'bg-emerald-100' : 'bg-teal-100'} h-4 rounded-md w-full mb-3`}></div>
                )
            }
        </div>
    );
}

export default Skeleton;
