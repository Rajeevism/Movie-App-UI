import MovieDetailsStyler from "./MovieDetails.module.css";
export default function MovieDetails({
  name,
  ratings,
  label,
  language,
  showTime,
  genre,
  certificate,
  releaseDate,
}) {
  return (
    <div>
      <section className={MovieDetailsStyler.movieDetailsStyle}>
        <section className={MovieDetailsStyler.header}>
          <h2>{name}</h2>
        </section>
        <section>
          <p className={MovieDetailsStyler.ratings}>{ratings}</p>
          <div className="lablang">
            <button type="button" className={MovieDetailsStyler.labelLang}>
              {label}
            </button>
            <button type="button" className={MovieDetailsStyler.labelLang}>
              {language}
            </button>
          </div>
          <div className={MovieDetailsStyler.remDetails}>
            <p className={MovieDetailsStyler.showTime}>{showTime}</p>
            <p className={MovieDetailsStyler.showTime}>{genre}</p>
            <p className={MovieDetailsStyler.showTime}>{certificate}</p>
            <p className={MovieDetailsStyler.showTime}>{releaseDate}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
