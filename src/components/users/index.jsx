import {memo, useState} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import UsersTable from "./UsersTable";
import FilterPosts from "../../utils/FilterPosts";

function Users() {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
    const [filterData, setFilterData] = useState('')

    if (loading) {
        return <div data-testid={'loading-spinner'}>Loading...</div>;
    }

    if (error) {
        return <div data-testid={'error-message'}>Error: {error.message}</div>;
    }

    return (
        <div data-testid={'users-list'}>
            <FilterPosts setFilterData={setFilterData}/>
            <UsersTable filterData={filterData} users={data}/>
        </div>
    );
}

export default memo(Users);
