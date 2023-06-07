import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Quote from './Quote';

describe('Qoute Component', () => {
  test('test render of qoute page', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });

  test('test loading message', async () => {
    render(<Quote />);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading time

    const Refresh = await screen.findByText('Refresh');
    act(() => userEvent.click(Refresh));

    const msg = await screen.findByText('Loading...');
    expect(msg).toBeInTheDocument();
  });
});
