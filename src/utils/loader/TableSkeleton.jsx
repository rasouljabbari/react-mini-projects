import React from 'react';
import Skeleton from "./Skeleton";

function TableSkeleton({trCount = 1,counter = 5}) {

    const filledArray = new Array(trCount).fill(1);
    const tdArray = new Array(counter).fill(2);
    return (
        <>
            {
                trCount > 0 &&
                filledArray.map((item, index) =>(
                    <tr key={`tr${index}`} className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {
                            counter > 0 &&
                            tdArray.map((info, count) =>(
                                <td key={`td${count}`} className="px-6 py-4">
                                    <Skeleton count={1} type={'title'}/>
                                </td>
                                ))
                        }
                    </tr>
                ))
            }
        </>
    );
}

export default TableSkeleton;
