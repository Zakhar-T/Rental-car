import clsx from 'clsx';
import styles from './Header.module.css';

import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const buildNavLinkClass = ({ isActive }) => {
    return clsx(styles.navLink, isActive && location.pathname === '/catalog' && styles.activeNavLink);
  };

  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.logo} aria-label="Go to home">
        Rental<span className={styles.logoPart}>Car</span>
      </Link>
      <nav className={styles.navWrapper}>
        <NavLink className={buildNavLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildNavLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
