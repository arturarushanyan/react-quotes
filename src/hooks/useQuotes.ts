import { useState, useEffect } from 'react';
import { Quote, QuoteResponse } from '../types/quote';
import { fallbackQuotes } from '../data/fallbackQuotes';

const API_URL = import.meta.env.VITE_QUOTES_API_URL;

export const useQuotes = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);

  const getRandomQuote = (quotes: Quote[]) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/quotes`);
      const data: QuoteResponse = await response.json();
      setQuote(getRandomQuote(data.quotes));
      setError(null);
      setIsOffline(false);
    } catch (err) {
      console.error('Error fetching quote:', err);
      setQuote(getRandomQuote(fallbackQuotes));
      setError('You are offline. Showing fallback quotes.');
      setIsOffline(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return { quote, loading, error, fetchRandomQuote, isOffline };
};
