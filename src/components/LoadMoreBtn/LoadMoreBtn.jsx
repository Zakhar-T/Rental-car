import { useDispatch, useSelector } from 'react-redux';
import styles from './LoadMoreBtn.module.css';
import { selectCarsPage } from '../../redux/cars/selectors';
import { fetchCars } from '../../redux/cars/operations';

export default function LoadMoreBtn() {
  const dispatch = useDispatch();
  const page = useSelector(selectCarsPage);

  const handleClick = () => {
    dispatch(fetchCars(page + 1));
  };

  return (
    <button className={styles.btn} type="button" onClick={handleClick}>
      Load more
    </button>
  );
}
