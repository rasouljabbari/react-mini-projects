import {memo, useEffect, useState} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import ProductsTable from "./ProductsTable";
import {useRemove} from "../../utils/custom-hooks/useRemove";

function Products() {
    const [products, setProducts] = useState([])
    const [items, removeObject] = useRemove()
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products')

    useEffect(() => {
        if (data?.length > 0) setProducts([...data])
    }, [data])

    useEffect(() => {
        if(items?.length > 0 ) setProducts([...items])
    }, [items])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const removeHandler = (id) => {
        removeObject(products, id)
    }

    return (
        <ProductsTable removeHandler={removeHandler} list={products}/>
    );
}

export default memo(Products);
