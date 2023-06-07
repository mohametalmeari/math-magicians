import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('test render of calculator page', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  test('test entering numbers', async () => {
    render(<Calculator />);
    const button8 = await screen.findByText('8');
    act(() => userEvent.click(button8));
    const button7 = await screen.findByText('7');
    act(() => userEvent.click(button7));

    const result = await screen.findByText(/87/);
    expect(result).toBeInTheDocument();
  });

  test('test performing calculations', async () => {
    render(<Calculator />);

    const button5 = await screen.findByText('5');
    act(() => userEvent.click(button5));
    const buttonPlus = await screen.findByText('+');
    act(() => userEvent.click(buttonPlus));
    const button8 = await screen.findByText('8');
    act(() => userEvent.click(button8));
    const buttonEqual = await screen.findByText('=');
    act(() => userEvent.click(buttonEqual));

    const result = await screen.findByText('13');
    expect(result).toBeInTheDocument();
  });
});
