import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const submitElement = screen.getByText(/submit/i);
  expect(submitElement).toBeInTheDocument();
});
