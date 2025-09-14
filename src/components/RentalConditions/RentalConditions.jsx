import styles from './RentalConditions.module.css';

import { useSelector } from 'react-redux';
import { selectCarDetails } from '../../redux/carDetails/selectors';

import { BsCheckCircle } from 'react-icons/bs';

export default function RentalConditions() {
  const carDetails = useSelector(selectCarDetails);
  const { rentalConditions = [] } = carDetails;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rental Conditions:</h3>
      <ul>
        {rentalConditions.map((condition, i) => {
          return (
            <li key={i} className={styles.conditionWrapper}>
              <BsCheckCircle width="16" height="16" />
              <p>{condition}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
