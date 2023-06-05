import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];
const Navbar = () => (
  <nav>
    <h1>
      Math Magicians
    </h1>
    <ul className="menu">
      {links.map((link) => (
        <li className="page-link" key={link.text}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
