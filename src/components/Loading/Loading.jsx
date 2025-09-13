import styles from './Loading.module.css';

import { ClockLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '200px auto 30px',
};

export default function Loading() {
  return (
    <main>
      <ClockLoader color={'#3470ff'} loading={true} cssOverride={override} size={150} aria-label="Loading Spinner" />
      <h2 className={styles.caption}>Loading...</h2>
    </main>
  );
}
