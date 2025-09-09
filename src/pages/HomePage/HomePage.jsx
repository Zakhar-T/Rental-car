import clsx from 'clsx';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={clsx('container', styles.container)}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>Reliable and budget-friendly rentals for any journey</p>
        <Link to="/catalog" className={styles.catalogLink}>
          View Catalog
        </Link>
      </div>
    </main>
  );
}
