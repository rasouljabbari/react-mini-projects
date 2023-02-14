import {useFetch} from "../utils/custom-hooks/useFetch";
import {render, screen} from "@testing-library/react";
import Users from "../components/users";
import Products from "../components/products/Products";
import Articles from "../components/articles";

jest.mock('../utils/custom-hooks/useFetch');

describe('useFetch', () => {
    test('shows user loading spinner while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        render(<Users/>);
        expect(screen.getByTestId('loading-spinner')).not.toBeNull();
    });
    test('shows user error message while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: null,
            error: true,
        });
        render(<Users/>);
        expect(screen.getByTestId('error-message')).not.toBeNull();
    });

    test('shows products loading spinner while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        render(<Products/>);
        expect(screen.getByTestId('loading-spinner')).not.toBeNull();
    });
    test('shows products error message while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: null,
            error: true,
        });
        render(<Products/>);
        expect(screen.getByTestId('error-message')).not.toBeNull();
    });

    test('shows posts loading spinner while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        render(<Articles/>);
        expect(screen.getByTestId('loading-spinner')).not.toBeNull();
    });
    test('shows posts error message while data is being fetched', async () => {
        useFetch.mockReturnValue({
            data: null,
            loading: null,
            error: true,
        });
        render(<Articles/>);
        expect(screen.getByTestId('error-message')).not.toBeNull();
    });
});