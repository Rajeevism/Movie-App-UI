// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieHome from '../components/MovieHome';
import Movies from '../components/Movie';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MovieHome />} />
    <Route path="/movies/:movieId" element={<Movies />} />
  </Routes>
);

export default AppRoutes;
