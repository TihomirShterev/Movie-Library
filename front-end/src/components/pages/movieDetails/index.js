import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { listFavorites, searchById } from '../../../redux/actions/movieActions';
import Movie from '../../common/movie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.searchById);
  const userId = useSelector(state => state.login.userInfo?._id);

  useEffect(() => {
    dispatch(searchById(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    if (userId) {
      dispatch(listFavorites(userId));
    }
  }, [dispatch, userId]);

  return (
    <main className="details-page">
      <section className="movie-section">
        {movie && <Movie movie={movie} />}
      </section>
      <section className="reviews-section">
        {/* <ul className={styles["review-list"]}>
          <li className={styles["review-item"]}></li>
          <li className={styles["review-item"]}></li>
          <li className={styles["review-item"]}></li>
          <li className={styles["review-item"]}></li>
        </ul> */}
      </section>
    </main>
  );
};

export default MovieDetails;
