import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resume', to: '/resume' },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to={links[0].to} className='navbar__container__logo'>
          <FaReact size={30} />
        </Link>
      </div>
      <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
        {links.map(link => (
          <li className='navbar__container__menu__item' key={link.label}>
            <Link
              to={link.to}
              className='navbar__container__menu__item__link'
              onClick={() => setToggleIcon(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='nav-icon' onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
