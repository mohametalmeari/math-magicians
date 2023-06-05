import { render } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('test render of calculator page', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
