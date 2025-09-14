import styles from './CarDescription.module.css';

import { useSelector } from 'react-redux';
import { selectCarDetails } from '../../redux/carDetails/selectors';
import { parseMileage, parseAddress } from '../../utils/parseFunctions';

import { TfiLocationPin } from 'react-icons/tfi';

export default function CarDescription() {
  const carDetails = useSelector(selectCarDetails);
  const { brand, model, year, id = '', address = '', mileage = '', rentalPrice, description } = carDetails;

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          {brand} {model}, {year}
        </h2>
        <p className={styles.id}>id: {id.slice(0, 4)}</p>
      </div>
      <div className={styles.subtitleWrapper}>
        <div className={styles.addressWrapper}>
          <TfiLocationPin width="16" height="16" />
          <p>{parseAddress(address)}</p>
        </div>
        <p>Mileage: {parseMileage(mileage)}</p>
      </div>
      <p className={styles.price}>${rentalPrice}</p>
      <p>{description}</p>
    </div>
  );
}
