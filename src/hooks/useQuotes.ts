import { useState, useEffect } from 'react';
import { Quote, QuoteResponse } from '../types/quote';

const API_URL = import.meta.env.VITE_QUOTES_API_URL;

export const useQuotes = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/quotes`);
      const data: QuoteResponse = await response.json();
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      setQuote(data.quotes[randomIndex]);
      setError(null);
    } catch (err) {
      setError('Failed to fetch quote');
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return { quote, loading, error, fetchRandomQuote };
}; 