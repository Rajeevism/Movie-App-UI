import MovieDetailsStyler from "./MovieDetails.module.css";
export default function MovieDetails({
  movie_name,
  languages,
  certificate,
  imdb_rating,
  label,
  genre,
  movie_duration,
  release_date,
}) {
  return (
    <div>
      <section className={MovieDetailsStyler.movieDetailsStyle}>
        <section className={MovieDetailsStyler.header}>
          <div>{movie_name}</div>
        </section>
        <section>
          <div className={MovieDetailsStyler.ratings}>
            <span className={MovieDetailsStyler.emoji}>&#128077;</span>
            <p>{imdb_rating}</p>
            <button className={MovieDetailsStyler.ratingbtn}>Rate Now</button>
          </div>
          <div className="lablang">
            <button type="button" className={MovieDetailsStyler.labelLang}>
              {label}
            </button>
            <button type="button" className={MovieDetailsStyler.labelLang}>
              {languages}
            </button>
          </div>
          <div className={MovieDetailsStyler.remDetails}>
            <p className={MovieDetailsStyler.showTime}>{movie_duration}</p>
            <p className={MovieDetailsStyler.showTime}>{genre}</p>
            <p className={MovieDetailsStyler.showTime}>{certificate}</p>
            <p className={MovieDetailsStyler.showTime}>{release_date}</p>
          </div>
          <button className={MovieDetailsStyler.btn}>Book Tickets</button>
        </section>
      </section>
    </div>
  );
}
