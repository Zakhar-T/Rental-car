import styles from './CatalogPage.module.css';

import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Grid from '../../components/Grid/Grid';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import clsx from 'clsx';

export default function CatalogPage() {
  return (
    <main className={clsx('container', styles.main)}>
      <Grid>
        <CatalogCard />
      </Grid>
      <LoadMoreBtn />
    </main>
  );
}
