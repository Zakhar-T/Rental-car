import styles from './CatalogCard.module.css';

import { parseAddress, parseMileage } from '../../utils/parseFunctions';

import { Link } from 'react-router-dom';
import LikeBtn from '../LikeBtn/LikeBtn';

export default function CatalogCard({ car }) {
  const { id, year, brand, model, type, img, rentalPrice, rentalCompany, address, mileage } = car;

  return (
    <li className={styles.card}>
      <LikeBtn />
      <img className={styles.cardImg} src={img} alt={brand} width="276" height="268" />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          {brand} <span className={styles.titlePart}>{model}</span>, {year}
        </h2>
        <p>${rentalPrice}</p>
      </div>
      <p className={styles.carInfo}>
        {parseAddress(address, ' | ')} | {rentalCompany} |<br />
        {type} | {parseMileage(mileage)}
      </p>
      <Link to={id} className={styles.carInfoLink}>
        Read more
      </Link>
    </li>
  );
}
