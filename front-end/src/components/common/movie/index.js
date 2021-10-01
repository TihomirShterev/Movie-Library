import React from 'react';
import { Link } from 'react-router-dom';
import { imageURL } from '../../../config/config';
import { movieGenres } from '../../../utils/constants';
import styles from './index.module.css';

const Movie = ({ movie }) => {
  const { id, title, release_date, poster_path, genre_ids, genres, runtime, overview, homepage } = movie;
  const releaseDate = release_date.substring(0, 4);
  let genresStr;

  if (genre_ids) {
    genresStr = genre_ids.map(genreId => movieGenres[genreId]).join(', ');
  } else {
    genresStr = genres.map(genre => genre.name).join(', ');
  }

  return (
    <div className={styles["movie-item"]}>
      <article className={styles["movie-poster-container"]}>
        <Link to={`/movie/${id}`}>
          <img src={poster_path
            ? `${imageURL}/${poster_path}`
            : "https://i.ibb.co/m9gBwhk/image-not-found.png"
          } alt="moviePosterURL" width={220} />
        </Link>
      </article>
      <article className={styles["movie-info"]}>
        <Link to={`/movie/${id}`}><h1>{title} ({releaseDate})</h1></Link>
        <p>{genresStr}{runtime && ` | ${runtime} minutes`}</p>
        <p>{overview}</p>
        {homepage && <a href={homepage}>Visit official site</a>}
        <button className={styles["add-btn"]}>Add To Favorites</button>
        {/* <button className={styles["remove-btn"]}>Remove From Favorites</button> */}
      </article>
    </div>
  );
};

export default Movie;
