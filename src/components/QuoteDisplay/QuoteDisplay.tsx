import { useState, useEffect } from 'react';
import { useQuotes } from '../../hooks/useQuotes';
import { Quote } from '../Quote/Quote';
import { Rating } from '../Rating/Rating';
import styles from './QuoteDisplay.module.css';

export const QuoteDisplay = () => {
  const { quote, loading, error, fetchRandomQuote, isOffline } = useQuotes();
  const [currentRating, setCurrentRating] = useState(0);

  // Reset rating when a new quote is loaded
  useEffect(() => {
    setCurrentRating(0);
  }, [quote?.id]);

  const handleRatingChange = (rating: number) => {
    setCurrentRating(rating);
  };

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}
      {quote && (
        <>
          <Quote quote={quote} />
          <Rating
            rating={currentRating}
            onRatingChange={handleRatingChange}
          />
          <button onClick={fetchRandomQuote} className={styles.button}>
            {isOffline ? 'New Fallback Quote' : 'New Quote'}
          </button>
        </>
      )}
    </div>
  );
};
