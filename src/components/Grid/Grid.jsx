import styles from './Grid.module.css';

export default function Grid({ children }) {
  return <ul className={styles.grid}>{children}</ul>;
}
