import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('Testando se o componente não aparece caso o campo e-mail esteja vazio.', () => {
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('id-is-email-valid');
  expect(isValidText).not.toBeInTheDocument();
});
