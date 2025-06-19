export interface Quote {
  id: number;
  quote: string;
  author: string;
  rating?: number;
  userRating?: number;
}

export interface QuoteResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}
