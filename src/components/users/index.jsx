import {memo, useState} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import UsersTable from "./UsersTable";
import FilterPosts from "../../utils/FilterPosts";

function Users() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
    const [filterData , setFilterData] = useState('')
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <UsersTable filterData={filterData} users={data}/>
        </>
    );
}

export default memo(Users);
