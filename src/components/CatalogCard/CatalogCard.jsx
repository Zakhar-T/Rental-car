import { Link } from 'react-router-dom';
import styles from './CatalogCard.module.css';
import { parseAddress } from '../../utils/parseAddress';

export default function CatalogCard({ car }) {
  const { year, brand, model, type, img, description, rentalPrice, rentalCompany, address, mileage } = car;

  return (
    <li className={styles.card}>
      <img className={styles.cardImg} src={img} alt={description} />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          {brand} <span className={styles.titlePart}>{model}</span>, {year}
        </h2>
        <p>${rentalPrice}</p>
      </div>
      <p className={styles.carInfo}>
        {parseAddress(address)} | {rentalCompany} |<br />
        {type} | {mileage}
      </p>
      <Link to="/catalog/:id" className={styles.carInfoLink}>
        Read more
      </Link>
    </li>
  );
}
