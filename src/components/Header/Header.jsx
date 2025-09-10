import clsx from 'clsx';
import styles from './Header.module.css';

import { Link, NavLink } from 'react-router-dom';

const buildNavLinkClass = ({ isActive }) => {
  return clsx(styles.navLink, isActive && styles.activeNavLink);
};

export default function Header() {
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
