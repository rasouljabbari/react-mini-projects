import {useState, memo, useCallback} from 'react';

function FilterPosts({setFilterData}) {
    const [filter, setFilter] = useState('');

    const filterHandler = useCallback(
        ({target}) => {
            setFilter(target.value)
            setFilterData(target.value)
        },[setFilterData])

    return (
        <>
            <input
                className={'bg-white p-4 rounded-sm border border-gray-400 text-lg m-6 w-[320px]'}
                type="text" placeholder={'please search title of post'} value={filter} onChange={filterHandler} />
        </>
    );
}

export default memo(FilterPosts);
