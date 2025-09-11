import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors';

import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Grid from '../../components/Grid/Grid';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <main className="container">
      <Grid>
        {cars.map((car) => {
          return <CatalogCard key={car.id} car={car} />;
        })}
      </Grid>
      <LoadMoreBtn />
    </main>
  );
}
