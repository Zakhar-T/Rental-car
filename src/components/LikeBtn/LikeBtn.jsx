import styles from './LikeBtn.module.css';

import { useEffect, useState } from 'react';

import { BsHeart } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectFeatured } from '../../redux/featured/selectors';
import { addToFeatured, removeFromFeatured } from '../../redux/featured/slice';
import { parseFeatured } from '../../utils/parseFunctions';

export default function LikeBtn({ id }) {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const featured = useSelector(selectFeatured);

  useEffect(() => {
    const savedFeatured = localStorage.getItem('persist:featured');
    if (!savedFeatured) return;
    const parsedFeatured = parseFeatured(savedFeatured);
    setIsLiked(parsedFeatured.includes(id));
  }, [featured, id]);

  const handleClick = () => {
    isLiked ? dispatch(removeFromFeatured(id)) : dispatch(addToFeatured(id));
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };

  return (
    <button className={styles.likeBtn} type="button" onClick={handleClick}>
      {isLiked ? (
        <BsFillHeartFill className={styles.iconLiked} width="16" height="16" />
      ) : (
        <BsHeart className={styles.icon} width="16" height="16" />
      )}
    </button>
  );
}
