import {useState, memo, useCallback} from 'react';
import {inputClass} from "./stateList";

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
                data-testid={'FilterPosts'}
                className={inputClass}
                type="text" placeholder={'search ...'} value={filter} onChange={filterHandler} />
        </>
    );
}

export default memo(FilterPosts);
