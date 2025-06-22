import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Quotes App</h1>
          <nav className={styles.navigation}>
            <Link 
              to="/" 
              className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/rated-quotes" 
              className={`${styles.navLink} ${location.pathname === '/rated-quotes' ? styles.active : ''}`}
            >
              Rated Quotes
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}; 