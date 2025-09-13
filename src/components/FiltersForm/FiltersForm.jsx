import { useEffect, useId } from 'react';
import styles from './FiltersForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/brands/operations';
import { selectBrands } from '../../redux/brands/selectors';

const initialValues = {
  brand: '',
  price: '',
  mileage: '',
};

const prices = ['30', '40', '50', '60', '70', '80'];

export default function FiltersForm() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFieldId = useId();

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.filtersForm}>
        <div className={styles.filter}>
          <label htmlFor={brandFieldId} className={styles.filterLabel}>
            Car brand
          </label>
          <Field as="select" name="brand" id={brandFieldId} className={styles.filterField}>
            <option value="Choose a brand">Choose a brand</option>
            {brands.map((brand) => {
              return <option value={brand}>{brand}</option>;
            })}
          </Field>
        </div>
        <div className={styles.filter}>
          <label htmlFor={priceFieldId} className={styles.filterLabel}>
            Price / 1 hour
          </label>
          <Field as="select" name="price" id={priceFieldId} className={styles.filterField}>
            <option value="Choose a price">Choose a price</option>
            {prices.map((price) => {
              return <option value={price}>{price}</option>;
            })}
          </Field>
        </div>
        <div className={styles.milageFilter}>
          <label htmlFor={priceFieldId} className={styles.filterLabel}>
            Price / 1 hour
          </label>
          <div className={styles.milageFilterField} id={mileageFieldId}>
            <Field type="text" name="milageFrom" placeholder="From" />
            <Field type="text" name="milageTo" placeholder="To" />
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Search
        </button>
      </Form>
    </Formik>
  );
}
