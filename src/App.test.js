import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new form button', () => {
  render(<App />);
  const newForm = screen.getByText(/^New Form$/i);
  expect(newForm).toBeInTheDocument();
});
