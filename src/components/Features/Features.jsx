import styles from './Features.module.css';

import { useSelector } from 'react-redux';
import { selectCarDetails } from '../../redux/carDetails/selectors';

import { BsCheckCircle } from 'react-icons/bs';

export default function Features() {
  const carDetails = useSelector(selectCarDetails);
  const { accessories, functionalities } = carDetails;
  const features = accessories.concat(functionalities);

  return (
    <div>
      <h3 className={styles.title}>Accessories and functionalities:</h3>
      <ul>
        {features.map((feature, i) => {
          return (
            <li key={i} className={styles.featureWrapper}>
              <BsCheckCircle width="16" height="16" />
              <p>{feature}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
