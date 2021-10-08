import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/about';

test('renders learn react link', () => {
  const { getByText } = render(<About />);
  const element = getByText(/关于我们/i);
  expect(element).toBeInTheDocument();
});
