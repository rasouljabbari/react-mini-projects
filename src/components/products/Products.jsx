import {memo} from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import ProductsTable from "./ProductsTable";

function Products() {
    const products = useFetch('https://fakestoreapi.com/products' , 'get')

    return (
        <ProductsTable list={products}/>
    );
}

export default memo(Products);
