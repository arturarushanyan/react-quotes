import { QuoteDisplay } from './components/QuoteDisplay/QuoteDisplay';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Random Quotes</h1>
      <QuoteDisplay />
    </div>
  );
}

export default App;
