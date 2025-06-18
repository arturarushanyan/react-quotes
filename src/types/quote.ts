export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface QuoteResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
} 