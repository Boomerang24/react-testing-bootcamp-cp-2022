/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Tests', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Footer />);

    expect(
      getByText(/Project created during Wizeline Academy React Testing Bootcamp/i)
    ).toBeInTheDocument();
  });
});
