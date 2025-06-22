import { createContext, useContext, ReactNode } from 'react';
import { useRatedQuotes } from '../hooks/useRatedQuotes';

const RatedQuotesContext = createContext<ReturnType<typeof useRatedQuotes> | null>(null);

export const RatedQuotesProvider = ({ children }: { children: ReactNode }) => {
  const ratedQuotesData = useRatedQuotes();

  return (
    <RatedQuotesContext.Provider value={ratedQuotesData}>
      {children}
    </RatedQuotesContext.Provider>
  );
};

export const useRatedQuotesContext = () => {
  const context = useContext(RatedQuotesContext);
  if (!context) {
    throw new Error('useRatedQuotesContext must be used within a RatedQuotesProvider');
  }
  return context;
}; 