import {memo, useEffect, useState} from 'react';
import UsersTable from "./UsersTable";
import FilterPosts from "../../utils/FilterPosts";
import { useSelector } from "react-redux";
// import {fetchListThunk} from "../../utils/redux/functions/fetchListThunk";

function Users() {
    // const {data, loading, error} = fetchList('https://jsonplaceholder.typicode.com/users')
    const [filterData, setFilterData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [users, setUsers] = useState([])
    const asyncData = useSelector(state => state.asyncReducer)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchListThunk('https://jsonplaceholder.typicode.com/users'))
    // }, [])

    useEffect(() => {

        if (users !== asyncData.list) {
            setUsers(asyncData.list)
        }
        if (loading !== asyncData.loading) {
            setLoading(asyncData.loading)
        }
        if (error !== asyncData.error) {
            setError(asyncData.error)
        }
    }, [asyncData])

    if (loading) {
        return <div data-testid={'loading-spinner'}>Loading...</div>;
    }

    if (error) {
        return <div data-testid={'error-message'}>Error: {error}</div>;
    }

    return (
        <div data-testid={'users-list'}>
            <FilterPosts setFilterData={setFilterData}/>
            <UsersTable filterData={filterData} users={users}/>
        </div>
    );
}

export default memo(Users);
