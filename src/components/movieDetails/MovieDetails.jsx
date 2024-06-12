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
          <div>{name}</div>
        </section>
        <section>
          <div className={MovieDetailsStyler.ratings}>
            <span className={MovieDetailsStyler.emoji}>&#128077;</span>
            <p>{ratings}</p>
            <button className={MovieDetailsStyler.ratingbtn}>Rate Now</button>
          </div>
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
          <button className={MovieDetailsStyler.btn}>Book Tickets</button>
        </section>
      </section>
    </div>
  );
}
