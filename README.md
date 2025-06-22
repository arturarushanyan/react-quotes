# React Quotes App

A simple React application that displays random quotes from an API. Users can rate quotes and view their collection of rated quotes.

## Features

- Display random quotes from the DummyJSON API
- Rate quotes using a 5-star rating system
- View all rated quotes in a separate page
- Offline support with fallback quotes
- Persistent storage using localStorage
- Responsive design

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Main layout with header and navigation
│   ├── Quote/          # Individual quote display component
│   └── Rating/         # Star rating component
├── contexts/           # React context providers
│   └── RatedQuotesContext.tsx
├── hooks/              # Custom React hooks
│   ├── useQuotes.ts    # API quote fetching logic
│   └── useRatedQuotes.ts # Rated quotes state management
├── pages/              # Page components
│   ├── HomePage/       # Main page with random quotes
│   └── RatedQuotesPage/ # Page showing rated quotes
├── types/              # TypeScript type definitions
│   └── quote.ts
├── data/               # Static data
│   └── fallbackQuotes.ts
└── App.tsx             # Main app component with routing
```

## Technologies Used

- React 19
- TypeScript
- React Router for navigation
- CSS Modules for styling
- Vite for build tooling
- ESLint for code linting

## API

The app uses the DummyJSON quotes API (`https://dummyjson.com/quotes`) to fetch random quotes. When offline, it falls back to a set of predefined quotes stored locally.
