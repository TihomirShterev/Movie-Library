import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const SearchBar = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const handleClick = () => {
    setMovieTitle('');
  };

  return (
    <div className={styles["search-bar"]}>
      <input
        value={movieTitle}
        onChange={ev => setMovieTitle(ev.target.value)}
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search by movie title..." />
      <Link to={`/search/${movieTitle}`} onClick={handleClick}>Search</Link>
    </div>
  );
};

export default SearchBar;
