import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header'

test('renders img', () => {
    render(<Header />);
    const options = screen.getByRole("img")
    expect(options).toBeInTheDocument();
});

test('renders img element', () => {
  render(<Header />);
  const imgAlt = screen.getByAltText(/wecasa-logo/i)
  expect(imgAlt).toBeInTheDocument();
});

test('renders select element', () => {
    render(<Header />);
    const selectLabel = screen.getByLabelText(/Catégorie/i)
    expect(selectLabel).toBeInTheDocument();
});


