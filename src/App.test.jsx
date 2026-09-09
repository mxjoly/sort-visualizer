import { render } from '@testing-library/react';
import App from './App';

test('renders the sort visualizer', () => {
  const { getByText } = render(<App />);
  expect(getByText(/sort visualizer/i)).toBeInTheDocument();
});
