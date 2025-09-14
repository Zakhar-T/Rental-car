import styles from './NotFoundPage.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404 - Page not found</h1>
    </main>
  );
}
