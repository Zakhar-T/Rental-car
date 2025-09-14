import styles from './FiltersForm.module.css';

import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';

import { Form, Formik } from 'formik';
import BrandFilterField from '../BrandFilterField/BrandFilterField';
import RentalPriceFilterField from '../RentalPriceFilterField/RentalPriceFilterField';
import MileageFilterField from '../MileageFilterField/MileageFilterField';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

export default function FiltersForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(fetchCars(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.filtersForm}>
        <BrandFilterField name="brand" />
        <RentalPriceFilterField name="rentalPrice" />
        <MileageFilterField minMileage={initialValues.minMileage} />
        <button type="submit" className={styles.submitBtn}>
          Search
        </button>
      </Form>
    </Formik>
  );
}
