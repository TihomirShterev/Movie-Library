import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../searchBar';
import styles from './index.module.css';

const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
  };

  return (
    <header>
      <nav className={styles["nav-bar"]}>
        <ul className={styles.authentication}>
          <li><Link to="/">My Movie Collection</Link></li>
          {
            localStorage.getItem('userInfo')
              ? <>
                <li><Link to="/">Hello, user@gmail.com</Link></li>
                <li><Link to="/" onClick={logout}>Logout</Link></li>
              </>
              : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
          }
        </ul>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
