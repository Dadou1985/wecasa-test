import React from 'react';
import { render, screen } from '@testing-library/react';
import Basket from '../components/basket'

test('renders header1', () => {
    render(<Basket />);
    const headingElement = screen.getByTestId("heading-1")
    expect(headingElement).toBeInTheDocument();
});

test('renders header2', () => {
    render(<Basket />);
    const headingElement = screen.getByTestId("heading-2")
    expect(headingElement).toBeInTheDocument();
});