import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find your perfect rental car</h1>
      <p className={styles.subtitle}>Reliable and budget-friendly rentals for any journey</p>
    </div>
  );
}
