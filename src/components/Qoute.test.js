import { render } from '@testing-library/react';
import Quote from './Quote';

describe('Qoute Component', () => {
  test('test render of qoute page', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
