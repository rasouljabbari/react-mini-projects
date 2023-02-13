import {memo, useEffect, useState} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import ProductsTable from "./ProductsTable";
import {useRemove} from "../../utils/custom-hooks/useRemove";

function Products() {
    const [products, setProducts] = useState([])
    const [items, removeObject] = useRemove()
    const list = useFetch('https://fakestoreapi.com/products', 'get')

    useEffect(() => {
        if (list?.length > 0) setProducts([...list])
    }, [list])

    useEffect(() => {
        if(items?.length > 0 ) setProducts([...items])
    }, [items])

    const removeHandler = (id) => {
        removeObject(products, id)
    }

    return (
        <ProductsTable removeHandler={removeHandler} list={products}/>
    );
}

export default memo(Products);
