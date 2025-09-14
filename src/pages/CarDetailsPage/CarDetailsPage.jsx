import styles from './CarDetailsPage.module.css';
import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarDetails, selectCarDetailsError, selectCarDetailsIsLoading } from '../../redux/carDetails/selectors';
import { useEffect } from 'react';
import { fetchCarDetails } from '../../redux/carDetails/operations';
import { useParams } from 'react-router-dom';

import CarDescription from '../../components/CarDescription/CarDescription';
import RentalConditions from '../../components/RentalConditions/RentalConditions';
import Features from '../../components/Features/Features';
import Specifications from '../../components/Specifications/Specifications';
import BookingForm from '../../components/BookingForm/BookingForm';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function CarDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const carDetails = useSelector(selectCarDetails);
  const isLoading = useSelector(selectCarDetailsIsLoading);
  const error = useSelector(selectCarDetailsError);

  useEffect(() => {
    dispatch(fetchCarDetails(params.id));
  }, [dispatch, params]);

  const { img, brand } = carDetails;

  if (isLoading || !carDetails) return <Loading />;
  if (error) return <Error />;
  return (
    <main className="container">
      <section className={clsx('section', styles.contentWrapper)}>
        <div>
          <img className={styles.img} src={img} alt={brand} width="640" height="512" />
          <BookingForm />
        </div>
        <div>
          <CarDescription />
          <RentalConditions />
          <Specifications />
          <Features />
        </div>
      </section>
    </main>
  );
}
