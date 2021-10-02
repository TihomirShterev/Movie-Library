import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listFavorites } from '../../../redux/actions/movieActions';
import Movie from '../../common/movie';
import styles from './index.module.css';

const Home = () => {
  const userId = useSelector(state => state.login.userInfo?._id);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(listFavorites(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <h1>Welcome!</h1>
        <p>This library can be used as a great source for movie content. It is designed
          to help fans explore the world of movies. Our searchable database includes millions of motion pictures.
          Please feel free to browse, add to favorites and review the listed movies. </p>
        <Link to="/search">Search</Link>
      </section>
      <section className={styles["favorites-section"]}>
        {favorites.length > 0 && favorites.map(favorite => {
          return <Movie key={favorite.id} movie={favorite} />;
        })}
        {/* {movieTitle && favoriteList.length > 0 && favoriteList.map(favorite => {
          return <Movie key={movie.id} movie={favorite} />;
        })}
        {movieTitle && favoriteList.length === 0 ? (
          <p style={{ color: 'red' }}>
            No results found. Please try again with a different title.
          </p>
        ) : (
          <p style={{ color: 'green' }}>
            Start searching for a movie.
          </p>
        )}
        {favoriteList.length === 0 && (
          <img src="https://i.ibb.co/TtRbRP3/movie.jpg" alt="background-img" width={'100%'} />
        )} */}
      </section>
    </div>
  );
};

export default Home;
