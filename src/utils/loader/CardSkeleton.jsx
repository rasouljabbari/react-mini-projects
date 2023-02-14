import React from 'react';
import Skeleton from "./Skeleton";

function CardSkeleton({counter}) {

    const filledArray = new Array(counter).fill(1);

    return (
        <>
            {
                counter > 0 &&
                filledArray.map((item, index) =>
                    <div data-testid={'card-skeleton'} key={`cardSkeleton${index}`} className={'bg-gray-200 rounded-md border-2 border-gray-500 p-8'}>
                        <div className={'text-xl font-medium mb-6'}>
                            <Skeleton type={'title'} count={3}/>
                        </div>

                        <div className={'text-md font-normal'}>
                            <Skeleton type={'text'} count={5}/>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default CardSkeleton;
