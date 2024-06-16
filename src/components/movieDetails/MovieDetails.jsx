import MovieDetailsStyler from "./MovieDetails.module.css";

export default function MovieDetails({ movieDetails }) {
  return (
    movieDetails && (
      <div>
        <section className={MovieDetailsStyler.movieDetailsStyle}>
          <section className={MovieDetailsStyler.header}>
            <div>{movieDetails.movie_name}</div>
          </section>
          <section>
            <div className={MovieDetailsStyler.ratings}>
              <span className={MovieDetailsStyler.emoji}>&#128077;</span>
              <p>{movieDetails.imdb_rating}</p>
              <button className={MovieDetailsStyler.ratingbtn}>Rate Now</button>
            </div>
            <div className="lablang">
              <button type="button" className={MovieDetailsStyler.labelLang}>
                {movieDetails.label}
              </button>
              <button type="button" className={MovieDetailsStyler.labelLang}>
                {movieDetails.languages.map((lang) => lang.language)}
              </button>
            </div>
            <div className={MovieDetailsStyler.remDetails}>
              <p className={MovieDetailsStyler.showTime}>
                {movieDetails.movie_duration}
              </p>
              <p className={MovieDetailsStyler.showTime}>
                {movieDetails.genre}
              </p>
              <p className={MovieDetailsStyler.showTime}>
                {movieDetails.certificate}
              </p>
              <p className={MovieDetailsStyler.showTime}>
                {movieDetails.release_date}
              </p>
            </div>
            <button className={MovieDetailsStyler.btn}>Book Tickets</button>
          </section>
        </section>
      </div>
    )
  );
}
