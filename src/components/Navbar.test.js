import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('test render of navbar', () => {
    // extract the container
    const { container } = render(
      // Wrapping <Navbar /> inside <MemoryRouter /> to simulate <BrowserRouter />
      // due to the existence of <NavLink /> inside Navbar component.
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('test render of navigation links', () => {
    const links = [
      { path: '/', text: 'Home' },
      { path: '/calculator', text: 'Calculator' },
      { path: '/quote', text: 'Quote' },
    ];

    // extract the getByText method that returns an element
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    links.forEach((link) => {
      const navLink = getByText(link.text);
      expect(navLink.getAttribute('href')).toBe(link.path);
    });
  });
});
