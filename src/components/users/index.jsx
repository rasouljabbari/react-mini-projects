import {memo, useState} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import UsersTable from "./UsersTable";
import FilterPosts from "../../utils/FilterPosts";

function Users() {
    const users = useFetch('https://jsonplaceholder.typicode.com/users' , 'get')
    const [filterData , setFilterData] = useState('')
    return (
        <>
            <FilterPosts setFilterData={setFilterData}/>
            <UsersTable filterData={filterData} users={users}/>
        </>
    );
}

export default memo(Users);
