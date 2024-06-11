import GarudanImg from "../assests/garudan.png";
import { CastDetails } from "./Cast";
import CastCard from "./CastCard";
import { CrewDetails } from "./Crew";
import CrewCard from "./CrewCard";
import MovieStyler from "./Movie.module.css";
import MovieDetails from "./MovieDetails";
import { getMovieById } from "./movieData";

import { useParams } from 'react-router-dom';


export default function Movies() {
  const { movieId } = useParams();
  const movie = getMovieById(movieId)
  return (
    <div>
      <section className={MovieStyler.trailerSection}>
        <div className={MovieStyler.gradient}>
          <div className={MovieStyler.movieImageDesc}>
            <div>
              <img className={MovieStyler.trailerNavImg} src={movie.image} />
              <p className={MovieStyler.para}>In Cinemas</p>
            </div>
            <MovieDetails {...movie} />
          </div>
        </div>
      </section>
      <div className={MovieStyler.body}>
        <section className={MovieStyler.about}>
          <h2 className={MovieStyler.heading}>About the Movie</h2>
          <p className={MovieStyler.aboutLine}>
            {movie.summary}
          </p>
        </section>
        <hr />
        <div>
          <section className={MovieStyler.castHeader}>
            <h2>Cast</h2>
          </section>
          <section className={MovieStyler.castCard}>
            <CastCard {...CastDetails[0]} />
            <CastCard {...CastDetails[1]} />
            <CastCard {...CastDetails[2]} />
            <CastCard {...CastDetails[3]} />
            <CastCard {...CastDetails[4]} />
            <CastCard {...CastDetails[5]} />
          </section>
        </div>
        <hr />
        <div>
          <section className={MovieStyler.castHeader}>
            <h2>Crew</h2>
          </section>
          <section className={MovieStyler.castCard}>
            <CrewCard {...CrewDetails[0]} />
            <CrewCard {...CrewDetails[1]} />
            <CrewCard {...CrewDetails[2]} />
            <CrewCard {...CrewDetails[3]} />
          </section>
        </div>
      </div>
    </div>
  );
}
