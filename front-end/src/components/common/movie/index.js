import React from 'react';
import { Link } from 'react-router-dom';
import { imageURL } from '../../../config/config';
import { movieGenres } from '../../../utils/constants';
import styles from './index.module.css';

const Movie = ({ movie }) => {
  const { id, title, release_date, poster_path, genre_ids, overview } = movie;
  return (
    <li key={id} className={styles["movie-item"]}>
      <article className={styles["movie-poster-container"]}>
        <Link to={`/search/${id}`}>
          <img src={poster_path
            ? `${imageURL}/${poster_path}`
            : "https://i.ibb.co/m9gBwhk/image-not-found.png"
          } alt="moviePosterURL" width={220} />
        </Link>
      </article>
      <article className={styles["movie-info"]}>
        <Link to={`/search/${id}`}><h1>{title} ({release_date.substring(0, 4)})</h1></Link>
        <p>{genre_ids.map(genreId => movieGenres[genreId]).join(', ')}</p>
        <p>{overview}</p>
        <Link to={`/search/${id}`}>Visit official site</Link>
        <button className={styles["add-btn"]}>Add To Favorites</button>
        {/* <button className={styles["remove-btn"]}>Remove From Favorites</button> */}
      </article>
    </li>
  );
};

export default Movie;
