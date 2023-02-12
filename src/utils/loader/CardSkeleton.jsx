import React from 'react';
import Skeleton from "./Skeleton";

function CardSkeleton({counter}) {

    const filledArray = new Array(counter).fill(1);

    return (
        <>
            {
                counter > 0 &&
                filledArray.map(item =>
                    <div key={item} className={'bg-gray-200 rounded-md border-2 border-gray-500 p-8'}>
                        <h1 className={'text-xl font-medium mb-6'}>
                            <Skeleton type={'title'} count={3}/>
                        </h1>

                        <p className={'text-md font-normal'}>
                            <Skeleton type={'text'} count={5}/>
                        </p>
                    </div>
                )
            }
        </>
    );
}

export default CardSkeleton;
