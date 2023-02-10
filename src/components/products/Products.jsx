import React from 'react';
import {useFetch} from "../../utils/custom-hooks/useFetch";
import ProductsTable from "./ProductsTable";

function Products() {
    const products = useFetch('https://fakestoreapi.com/products' , 'get')

    console.log(products)

    return (
        <>

            <ProductsTable list={products}/>
        </>
    );
}

export default Products;
