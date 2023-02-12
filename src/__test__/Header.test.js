import {BrowserRouter} from "react-router-dom";
import { render, screen, fireEvent  } from '@testing-library/react';
import Header from "../components/header/Header";

describe('Header', () => {
    it('renders the header with logo, mobile and desktop navigation', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
        expect(logo.getAttribute('src')).toBe('https://designbygio.it/images/logo.png');
        expect(screen.getAllByText(/Articles/i)).toHaveLength(2);
        expect(screen.getAllByText('Users')).toHaveLength(2);
        expect(screen.getAllByText('Products')).toHaveLength(2);
        expect(screen.getAllByText('Todo')).toHaveLength(2);
    });

    it('toggles the mobile navigation menu when the hamburger icon is clicked', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const hamburgerIcon = screen.getByTestId('hamburger-icon');
        fireEvent.click(hamburgerIcon);
        expect(screen.getByTestId('mobile-menu')).toHaveClass('showMenuNav');
        fireEvent.click(hamburgerIcon);
        expect(screen.getByTestId('mobile-menu')).toHaveClass('hideMenuNav');
    });

    it('closes the mobile navigation menu when the close icon is clicked', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const hamburgerIcon = screen.getByTestId('hamburger-icon');
        fireEvent.click(hamburgerIcon);
        const closeIcon = screen.getByTestId('close-icon');
        fireEvent.click(closeIcon);
        expect(screen.getByTestId('mobile-menu')).toHaveClass('hideMenuNav');
    });
})