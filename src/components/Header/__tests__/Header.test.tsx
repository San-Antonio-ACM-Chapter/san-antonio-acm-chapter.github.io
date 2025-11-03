import Header from "../Header";
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
    test('should match snapshot', () => {
        const { asFragment } = render(<Header/>);
        expect(asFragment()).toMatchSnapshot();
    })
    test('renders the header with the correct title', () => {
        render(<Header/>);
        const titleElement = screen.getByText(/ACM San Antonio/i);
        expect(titleElement).toBeInTheDocument();
    });
});