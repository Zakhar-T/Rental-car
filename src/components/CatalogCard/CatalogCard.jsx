import { Link } from 'react-router-dom';
import styles from './CatalogCard.module.css';

export default function CatalogCard({ car }) {
  const { year, brand, model, type, img, description, rentalPrice } = car;

  return (
    <li className={styles.card}>
      <img className={styles.cardImg} src={img} alt={description} />
      <div className={styles.titleWrapper}>
        <h2>{`${brand} ${model}, ${year}`}</h2>
        <p>{rentalPrice}</p>
      </div>
      <p className={styles.carInfo}>{type}</p>
      <Link to="/catalog/:id" className={styles.carInfoLink}>
        Read more
      </Link>
    </li>
  );
}
