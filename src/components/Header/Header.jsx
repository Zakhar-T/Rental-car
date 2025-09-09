import styles from './Header.module.css';

import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link to="/" aria-label="Go to home"></Link>
      <nav className={styles.navWrapper}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
}
