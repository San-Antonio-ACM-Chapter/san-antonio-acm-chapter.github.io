import NavigationLink from '../NavigationLink'
import { render, screen, fireEvent } from '@testing-library/react';

describe('NavigationLink Component', () => {
    test('should match snapshot', () => {
        const { asFragment } = render(<NavigationLink href="#test" text="Test Link" />);
        expect(asFragment()).toMatchSnapshot();
    });
});