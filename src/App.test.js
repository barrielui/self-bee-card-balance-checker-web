import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Bee homepage link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bee Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
