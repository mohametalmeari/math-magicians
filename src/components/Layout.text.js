import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('test render of Layout', () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
