import styles from './Specifications.module.css';

import { useSelector } from 'react-redux';
import { selectCarDetails } from '../../redux/carDetails/selectors';

import { BsCalendar2Week } from 'react-icons/bs';
import { BsCarFront } from 'react-icons/bs';
import { BsFuelPump } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';

export default function Specifications() {
  const carDetails = useSelector(selectCarDetails);
  const { year, type, fuelConsumption, engineSize } = carDetails;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Car Specifications:</h3>
      <ul>
        <li className={styles.specificationWrapper}>
          <BsCalendar2Week width="16" height="16" />
          <p>Year: {year}</p>
        </li>
        <li className={styles.specificationWrapper}>
          <BsCarFront width="16" height="16" />
          <p>Type: {type}</p>
        </li>
        <li className={styles.specificationWrapper}>
          <BsFuelPump width="16" height="16" />
          <p>Fuel Consumption: {fuelConsumption}</p>
        </li>
        <li className={styles.specificationWrapper}>
          <BsGear width="16" height="16" />
          <p>Engine Size: {engineSize}</p>
        </li>
      </ul>
    </div>
  );
}
