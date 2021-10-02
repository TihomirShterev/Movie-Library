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
    <main className={styles["home-page"]}>
      <section className={styles.intro}>
        <h1>Welcome!</h1>
        <p>This library can be used as a great source for movie content. It is designed
          to help fans explore the world of movies. Our searchable database includes millions of motion pictures.
          Please feel free to browse, add to favorites and review the listed movies. </p>
        <Link to="/search">Search</Link>
      </section>
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <section className={styles["favorites-section"]}>
          {favorites.map(favorite => {
            return <Movie key={favorite.id} movie={favorite} />;
          })}
        </section>
      ) : (
        <p style={{ color: 'blue', textAlign: 'center' }}>
          If you add any movies to favorites, they would be displayed here.
        </p>
      )}
    </main>
  );
};

export default Home;
