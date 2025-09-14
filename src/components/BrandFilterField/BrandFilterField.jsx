import styles from './BrandFilterField.module.css';
import clsx from 'clsx';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/brands/operations';
import { selectBrands } from '../../redux/brands/selectors';

import { useField } from 'formik';
import { SlArrowDown } from 'react-icons/sl';

export default function BrandFilterField({ name }) {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(name);

  const handleSelect = (brand) => {
    helpers.setValue(brand);
    setIsOpen(false);
  };

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Car brand</p>
      <button type="button" className={styles.dropdownBtn} onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles.btnText}>{field.value || 'Choose a brand'}</span>
        <SlArrowDown className={clsx(styles.icon, isOpen && styles.extended)} width="16" height="16" />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {brands.map((brand, i) => (
            <li
              key={i}
              className={clsx(styles.dropdownItem, brand === field.value && styles.active)}
              onClick={() => handleSelect(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
