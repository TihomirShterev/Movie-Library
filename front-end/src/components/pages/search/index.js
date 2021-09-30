import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { searchByTitle } from '../../../redux/actions/movieActions';
import Movie from '../../common/movie';
import SearchBar from '../../common/searchBar';
import styles from './index.module.css';

const Search = () => {
  const { movieTitle } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.searchByTitle);
  console.log(movies);

  useEffect(() => {
    dispatch(searchByTitle(movieTitle));
  }, [dispatch, movieTitle]);

  return (
    <div className={styles["search-page"]}>
      <h1>Search</h1>
      <SearchBar />
      {movieTitle && movies.length > 0 && (
        <ul className={styles["movie-list"]}>
          {movies.map(movie => <Movie movie={movie} />)}
        </ul>
      )}
      {movieTitle && movies.length === 0 ? (
        <p style={{ color: 'red' }}>
          No results found. Please try again with a different title.
        </p>
      ) : (
        <p style={{ color: 'green' }}>
          Start searching for a movie.
        </p>
      )}
      {movies.length === 0 && (
        <img src="https://i.ibb.co/TtRbRP3/movie.jpg" alt="background-img" width={'100%'} />
      )}
    </div>
  );
};

export default Search;
