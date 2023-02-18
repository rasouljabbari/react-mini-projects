import { useEffect } from 'react'
import Header from "./components/header/Header";
import RouteHandler from "./components/routes/RouteHandler";
import {useDispatch} from "react-redux";
import {fetchListThunk} from "./utils/redux/functions/fetchListThunk";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchListThunk('https://jsonplaceholder.typicode.com/users'))
    }, [])

    return (
        <div className={'container mx-auto mb-8 px-8'}>
            <Header/>
            <RouteHandler/>
        </div>
    );
}

export default App;
