import { useState, useEffect } from 'react';
import { useQuotes } from '../../hooks/useQuotes';
import { useRatedQuotesContext } from '../../contexts/RatedQuotesContext';
import { Quote } from '../../components/Quote/Quote';
import { Rating } from '../../components/Rating/Rating';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { quote, loading, error, fetchRandomQuote, isOffline } = useQuotes();
  const { addRatedQuote } = useRatedQuotesContext();
  const [currentRating, setCurrentRating] = useState(0);

  // Reset rating when a new quote is loaded
  useEffect(() => {
    setCurrentRating(0);
  }, [quote?.id]);

  const handleRatingChange = (rating: number) => {
    setCurrentRating(rating);
    if (quote && rating > 0) {
      addRatedQuote(quote, rating);
    }
  };

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Quotes That Might Inspire You</h2>
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