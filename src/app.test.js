import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders the heading', () => {
//   render(<App />);
//   const element = screen.getByText("Add Todo");
//   expect(element).toBeInTheDocument();
// });

test('renders the heading', () => {
  render(<App />);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});


