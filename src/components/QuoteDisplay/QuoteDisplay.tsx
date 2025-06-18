import { useQuotes } from '../../hooks/useQuotes';
import { Quote } from '../Quote/Quote';
import styles from './QuoteDisplay.module.css';

export const QuoteDisplay = () => {
  const { quote, loading, error, fetchRandomQuote } = useQuotes();

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      {quote && (
        <>
          <Quote quote={quote} />
          <button onClick={fetchRandomQuote} className={styles.button}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
};
