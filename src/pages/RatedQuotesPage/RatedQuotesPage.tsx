import { useRatedQuotesContext } from '../../contexts/RatedQuotesContext';
import { Quote } from '../../components/Quote/Quote';
import { Rating } from '../../components/Rating/Rating';
import styles from './RatedQuotesPage.module.css';

export const RatedQuotesPage = () => {
  const { ratedQuotes, addRatedQuote, removeRatedQuote, clearAllRatedQuotes } = useRatedQuotesContext();

  const handleRatingChange = (quoteId: number, rating: number) => {
    if (rating === 0) {
      removeRatedQuote(quoteId);
    } else {
      const quoteToUpdate = ratedQuotes.find(q => q.id === quoteId);
      if (quoteToUpdate) {
        addRatedQuote(quoteToUpdate, rating);
      }
    }
  };

  if (ratedQuotes.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>No rated quotes yet. Start rating quotes to see them here!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Rated Quotes ({ratedQuotes.length})</h2>
        <button onClick={clearAllRatedQuotes} className={styles.clearAllButton}>
          Clear All
        </button>
      </div>
      <div className={styles.quotesList}>
        {ratedQuotes.map((quote) => (
          <div key={quote.id} className={styles.quoteItem}>
            <div className={styles.quoteContent}>
              <Quote quote={quote} />
              <Rating
                rating={quote.userRating || 0}
                onRatingChange={(rating) => handleRatingChange(quote.id, rating)}
              />
            </div>
            <button
              onClick={() => removeRatedQuote(quote.id)}
              className={styles.removeButton}
              aria-label="Remove quote"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 