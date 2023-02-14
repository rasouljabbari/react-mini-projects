import { render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import RouteHandler from "../components/routes/RouteHandler";
import {useFetch} from "../utils/custom-hooks/useFetch";

jest.mock('../utils/custom-hooks/useFetch');
describe('ReactRouter', function () {

    const setUp = () => {
        useFetch.mockReturnValue({
            data: [],
            loading: null,
            error: null,
        });
        render(
            <BrowserRouter>
                <RouteHandler/>
            </BrowserRouter>
        )
    }

    test('render the index page' , () => {
        setUp()
        const articlesElement = screen.getByTestId('article-list');
        expect(articlesElement).toBeInTheDocument();
    })
});