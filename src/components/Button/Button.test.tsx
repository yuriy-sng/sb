import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';


test('Renders a Button without label', () => {
  const LABEL = 'Primary';

  const { getByText } = render(<Button>{LABEL}</Button>);
  const linkElement = getByText(LABEL);

  expect(linkElement).toBeInTheDocument();
});
