import MovieDetailsStyler from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MovieDetails() {
  const { movieId } = useParams();
  const getMovieDetails = async (movieId) => {
    const response = await axios.get("http://localhost:8000/movies/" + movieId);
    console.log(response.data);
    setMovieDetails(response.data);
  };
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId);
  }, []);
  console.log("Id : " + movieId);
  console.log("Movie : " + movieDetails);
  return (
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
            <p className={MovieDetailsStyler.showTime}>{movieDetails.genre}</p>
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
  );
}
