import styles from './Error.module.css';

export default function Error() {
  return (
    <main>
      <p className={styles.message}>Oops... Something went wrong...</p>
    </main>
  );
}
