import {fireEvent, render, screen} from '@testing-library/react';
import App from "../App";
import {BrowserRouter} from "react-router-dom";
import {useFetch} from "../utils/custom-hooks/useFetch";

jest.mock('../utils/custom-hooks/useFetch');

const posts = [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
    { id: 3, title: 'Post 3', body: 'Body 3' }
]
describe('App', function () {

    const setUp = () => {
        useFetch.mockReturnValue({
            data: posts,
            loading: null,
            error: null,
        });
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }

    test('renders a Link component with a proper URL' , () => {
        setUp()
        const linkElement = screen.getAllByText(/Articles/i);
        expect(linkElement[0]).toBeInTheDocument();
        expect(linkElement[0]).toHaveAttribute('href', '/articles');
    })

    test('navigates to the correct page when clicked' , async () => {
        setUp()
        const linkElement = screen.getAllByText(/Articles/i);
        fireEvent.click(linkElement[0])
        const pageContentElement = await screen.findByTestId(/article-list/i);
        expect(pageContentElement).toBeInTheDocument();
    })
});