import {screen, render, fireEvent, act, renderHook} from '@testing-library/react'
import ProductsTable from "../components/products/ProductsTable";
import {useFetch} from "../utils/custom-hooks/useFetch";
import Products from "../components/products/Products";

const products = [
    {id: 1, title: 'Product 1', price: 100, category: 'Category 1', rating: {rate: 4}, image: 'product1.jpg'},
    {id: 2, title: 'Product 2', price: 200, category: 'Category 2', rating: {rate: 3}, image: 'product2.jpg'},
    {id: 3, title: 'Product 3', price: 150, category: 'Category 3', rating: {rate: 5}, image: 'product3.jpg'},
];
jest.mock('../utils/custom-hooks/useFetch');
describe('ProductsTable', function () {

    test('shows users list while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: products,
            loading: null,
            error: null,
        });
        render(<Products/>);
        expect(screen.getByTestId('products-list')).toBeInTheDocument();
    });

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

    it('should change the isLoaded state to true after the image is loaded', () => {
        const imageSrc = 'https://example.com/image.png';
        const product = {
            id: 1,
            title: 'product 1',
            price: 9.99,
            category: 'electronics',
            rating: { rate: 4.5 },
            image: imageSrc,
        };
        render(<ProductsTable list={[product]} removeHandler={() => {}}/> )
        const imgElement = screen.getByAltText(product.title);
        expect(imgElement).toHaveClass('animate-pulse');

        act(() => {
            fireEvent.load(imgElement)
        })

        expect(imgElement).not.toHaveClass('animate-pulse');

    })

    it('remove product when delete button is clicked', () => {
        const removeHandler = jest.fn()
        render(<ProductsTable list={products} removeHandler={removeHandler}/> )

        const removeButton = screen.getAllByTestId('remove')[0];
        fireEvent.click(removeButton);

        expect(removeHandler).toBeCalledTimes(1)
    })

    test('should render card skeleton', async () => {
        render(<ProductsTable list={null} removeHandler={() => {}} />);
        const cardSkeleton = screen.getAllByTestId('skeleton-loader')
        expect(cardSkeleton).toHaveLength(4)
    });

});