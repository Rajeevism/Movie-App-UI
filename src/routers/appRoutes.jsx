import React from "react";
import { Routes, Route } from "react-router-dom";

import MoviePage from "../components/moviePage/MoviePage";
import MovieListingPage from "../components/movieListingPage/MovieListingPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MovieListingPage />} />
    <Route path="/movies/:movieId" element={<MoviePage />} />
  </Routes>
);

export default AppRoutes;
