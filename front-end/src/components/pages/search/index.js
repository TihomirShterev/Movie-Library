import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../../redux/actions/movieActions';
import Movie from '../../common/movie';
import SearchBar from '../../common/searchBar';
import styles from './index.module.css';

const Search = () => {
  const { movieTitle } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.searchByTitle);

  useEffect(() => {
    dispatch(searchByTitle(movieTitle));
  }, [dispatch, movieTitle]);

  return (
    <main className={styles["search-page"]}>
      <h1>Search</h1>
      <section className={styles["search-section"]}>
        <SearchBar />
      </section>
      <section className={styles["movies-section"]}>
        {movieTitle && movies.length > 0 && movies.map(movie => {
          return <Movie key={movie.id} movie={movie} />;
        })}
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
      </section>
    </main>
  );
};

export default Search;
