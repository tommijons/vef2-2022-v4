import { render, screen } from '@testing-library/react';
import App from './App';

test('renders signup link', () => {
  render(<App />);
  const Login = screen.getByText(/Nýskráning/i);
  expect(Login).toBeInTheDocument();
});
