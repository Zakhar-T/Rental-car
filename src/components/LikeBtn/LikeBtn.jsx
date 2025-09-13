import styles from './LikeBtn.module.css';

import { useState } from 'react';

import { BsHeart } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';

export default function LikeBtn() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
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
