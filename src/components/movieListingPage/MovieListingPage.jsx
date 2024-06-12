import MovieListingPageStyler from "./MovieListingPage.module.css";
import MovieSummaryCard from "../movieSummary/MovieSummaryCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieListingPage() {
  const [movieListings, setMovieListings] = useState([]);

  const getMovieListings = async () => {
    const resp = await axios.get("http://localhost:8000/movies");
    console.log(resp.data);
    setMovieListings(resp.data);
  };

  useEffect(() => {
    getMovieListings();
  }, []);

  console.log("inside movielisting render:", movieListings);

  return (
    <div>
      <div className={MovieListingPageStyler.location}>Movies in Chennai</div>
      <div className={MovieListingPageStyler.movieBlock}>
        {movieListings.map((movieDetail, idx) => (
          <MovieSummaryCard key={idx} {...movieDetail} />
        ))}
      </div>
    </div>
  );
}
