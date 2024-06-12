import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "../cast/CastCard";
import CrewCard from "../crew/CrewCard";
import MovieDetails from "../movieDetails/MovieDetails";

import MovieStyler from "./MoviePage.module.css";
import "react-multi-carousel/lib/styles.css";

import { getMovieById } from "../../data/moviesDetails";
import { getArtistsByMovieId } from "../../data/movieArtists";

export default function MoviePage() {
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
          <div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
              {castMembers.map((castMember, idx) => (
                <CastCard key={idx} {...castMember} />
              ))}
            </Carousel>
          </div>
        </div>
        <hr />
        <div>
          <section className={MovieStyler.castHeader}>
            <h2>Crew</h2>
          </section>
          <div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
              {crewMembers.map((crewMember, idx) => (
                <CrewCard key={idx} {...crewMember} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
