import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "./CastCard";
import CrewCard from "./CrewCard";
import MovieStyler from "./Movie.module.css";
import MovieDetails from "./MovieDetails";
import { getMovieById } from "./movieData";
import { getArtistsByMovieId } from "./Artists";
import { useParams } from "react-router-dom";

export default function Movies() {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);
  console.log(movie);

  const artists = getArtistsByMovieId(movieId);
  console.log("artists: ", artists);
  const castMembers = artists.castMembers;
  const crewMembers = artists.crewMembers;

  return (
    <div>
      <div
        className={MovieStyler.trailerSection}
        style={{
          backgroundImage: "url(" + movie.backgroundImage + ")",
        }}
      >
        <div className={MovieStyler.gradient}>
          <div className={MovieStyler.movieImageDesc}>
            <div>
              <img className={MovieStyler.trailerNavImg} src={movie.image} />
              <p className={MovieStyler.para}>In Cinemas</p>
            </div>
            <MovieDetails {...movie} />
          </div>
        </div>
      </div>
      <div className={MovieStyler.body}>
        <section className={MovieStyler.about}>
          <h2 className={MovieStyler.heading}>About the Movie</h2>
          <p className={MovieStyler.aboutLine}>{movie.summary}</p>
        </section>
        <hr />
        <div>
          <section className={MovieStyler.castHeader}>
            <h2>Cast</h2>
          </section>
          <section className={MovieStyler.castCard}>
            {castMembers.map((castMember, idx) => (
              <CastCard key={idx} {...castMember} />
            ))}
          </section>
        </div>
        <hr />
        <div>
          <section className={MovieStyler.castHeader}>
            <h2>Crew</h2>
          </section>
          <section className={MovieStyler.castCard}>
            {crewMembers.map((crewMember, idx) => (
              <CrewCard key={idx} {...crewMember} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
