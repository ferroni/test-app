import { render, screen } from '@testing-library/react';
import TestText from './TestText';

test('renders learn react link', () => {
  render(<TestText />);

  //  const linkElement = screen.getByText('Learn React');
  const linkElement = screen.getByRole('link', {
    name: 'Learn React',
  });

  expect(linkElement).toBeInTheDocument();
});
