import {useEffect, useState} from 'react';
import axios from "axios";

function UsePosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(data)
        }

        getPosts()
    }, [])

    return [posts];
}

export default UsePosts;
