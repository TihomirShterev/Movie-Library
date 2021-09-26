import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search by movie title..." />
      <Link to="/search">Search</Link>
    </div>
  );
};

export default SearchBar;
