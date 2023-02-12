import {screen, render, fireEvent} from '@testing-library/react'
import ProductsTable from "../components/products/ProductsTable";

describe('ProductsTable', function () {
    const products = [
        {id: 1, title: 'Product 1', price: 100, category: 'Category 1', rating: {rate: 4}, image: 'product1.jpg'},
        {id: 2, title: 'Product 2', price: 200, category: 'Category 2', rating: {rate: 3}, image: 'product2.jpg'},
        {id: 3, title: 'Product 3', price: 150, category: 'Category 3', rating: {rate: 5}, image: 'product3.jpg'},
    ];

    it('sorts products by price in ascending order when sort price is clicked', () => {

        render(<ProductsTable list={products}/>);
        const sortPriceBtn = screen.getByTestId('sortPrice');

        fireEvent.click(sortPriceBtn);

        const productRows = screen.getAllByTestId('productRow');
        const productPrices = Array.from(productRows).map(row => row.children[1].textContent);
        expect(productPrices).toEqual(['200', '150', '100']);
    });

    it('sorts products by price in descending order when sort price is clicked again', () => {
        render(<ProductsTable list={products}/>);
        const sortPriceBtn = screen.getByTestId('sortPrice');

        fireEvent.click(sortPriceBtn);
        fireEvent.click(sortPriceBtn);

        const productRows = screen.getAllByTestId('productRow');
        const productPrices = Array.from(productRows).map(row => row.children[1].textContent);
        expect(productPrices).toEqual(['100', '150', '200']);
    });
});