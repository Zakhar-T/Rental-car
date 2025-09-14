import styles from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectCarsError,
  selectCarsIsLoading,
  selectCarsPage,
  selectCarsTotalPages,
} from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';

import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Grid from '../../components/Grid/Grid';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectCarsPage);
  const totalPages = useSelector(selectCarsTotalPages);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectCarsIsLoading);
  const error = useSelector(selectCarsError);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [dispatch, filters]);

  if (isLoading || !cars) return <Loading />;
  if (error) return <Error />;
  return (
    <main className="container">
      <section className="section">
        <FiltersForm />
        {totalPages === 0 && <p className={styles.noMatches}>Sorry, there are no cars matching your query.</p>}
        <Grid>
          {cars.map((car) => {
            return <CatalogCard key={car.id} car={car} />;
          })}
        </Grid>
        {page < totalPages && <LoadMoreBtn />}
      </section>
    </main>
  );
}
