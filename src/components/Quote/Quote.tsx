import { Quote as QuoteType } from '../../types/quote';
import styles from './Quote.module.css';

interface QuoteProps {
  quote: QuoteType;
}

export const Quote = ({ quote }: QuoteProps) => {
  return (
    <div className={styles.quoteContainer}>
      <blockquote className={styles.quote}>{quote.quote}</blockquote>
      <p className={styles.author}>- {quote.author}</p>
    </div>
  );
};
