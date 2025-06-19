import styles from './Rating.module.css';

interface RatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export const Rating = ({ rating, onRatingChange }: RatingProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.stars}>
        {stars.map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.star} ${star <= rating ? styles.filled : styles.empty}`}
            onClick={() => onRatingChange(star)}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}; 