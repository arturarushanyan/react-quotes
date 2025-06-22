import { useState, useEffect } from 'react';
import { Quote } from '../types/quote';

const STORAGE_KEY = 'ratedQuotes';

// Initialize state with data from localStorage
const getInitialState = (): Quote[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error parsing rated quotes from localStorage:', error);
    return [];
  }
};

export const useRatedQuotes = () => {
  const [ratedQuotes, setRatedQuotes] = useState<Quote[]>(getInitialState);

  // Save rated quotes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratedQuotes));
  }, [ratedQuotes]);

  const addRatedQuote = (quote: Quote, rating: number) => {
    const ratedQuote = { ...quote, userRating: rating };
    setRatedQuotes(prev => {
      // Remove existing quote with same ID if it exists
      const filtered = prev.filter(q => q.id !== quote.id);
      return [...filtered, ratedQuote];
    });
  };

  const removeRatedQuote = (quoteId: number) => {
    setRatedQuotes(prev => prev.filter(q => q.id !== quoteId));
  };

  const clearAllRatedQuotes = () => {
    setRatedQuotes([]);
  };

  return {
    ratedQuotes,
    addRatedQuote,
    removeRatedQuote,
    clearAllRatedQuotes,
  };
}; 