import styles from './RentalPriceFilterField.module.css';
import clsx from 'clsx';

import { useState } from 'react';

import { useField } from 'formik';
import { SlArrowDown } from 'react-icons/sl';

const prices = ['30', '40', '50', '60', '70', '80'];

export default function RentalPriceFilterField({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(name);

  const handleSelect = (rentalPrice) => {
    helpers.setValue(rentalPrice);
    setIsOpen(false);
  };

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Price / 1 hour</p>
      <button type="button" className={styles.dropdownBtn} onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles.btnText}>{field.value || 'Choose a price'}</span>
        <SlArrowDown className={clsx(styles.icon, isOpen && styles.extended)} width="16" height="16" />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {prices.map((price, i) => (
            <li
              key={i}
              className={clsx(styles.dropdownItem, price === field.value && styles.active)}
              onClick={() => handleSelect(price)}
            >
              {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
