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
                data-testId={'FilterPosts'}
                className={'mx-auto bg-white p-4 rounded-sm border border-gray-400 text-lg m-6 w-[320px]'}
                type="text" placeholder={'search ...'} value={filter} onChange={filterHandler} />
        </>
    );
}

export default memo(FilterPosts);
