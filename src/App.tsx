import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { RatedQuotesPage } from './pages/RatedQuotesPage/RatedQuotesPage';
import { RatedQuotesProvider } from './contexts/RatedQuotesContext';

function App() {
  return (
    <RatedQuotesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="rated-quotes" element={<RatedQuotesPage />} />
          </Route>
        </Routes>
      </Router>
    </RatedQuotesProvider>
  );
}

export default App;
