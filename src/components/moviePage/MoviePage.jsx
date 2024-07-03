import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "../cast/CastCard";
import CrewCard from "../crew/CrewCard";
import MovieDetails from "../movieDetails/MovieDetails";
import MovieStyler from "./MoviePage.module.css";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();
  const getMovieById = async (movieId) => {
    const response = await axios.get("http://localhost:8000/movies/" + movieId);
    console.log(response.data);
    setMovie(response.data);
  };
  const [movie, setMovie] = useState(undefined);
  useEffect(() => {
    getMovieById(movieId);
  }, []);
  console.log("Id : " + movieId);
  console.log("Movie : " + movie);

  function getCastDetails() {
    console.log("in cast details");
    let cast = movie.artists.filter(
      (artist) => artist.role == "Actor" || artist.role == "Actress"
    );
    console.log("cast: ", cast);
    return cast;
  }

  function getCrewDetails() {
    return movie.artists.filter(
      (artist) => artist.role != "Actor" && artist.role != "Actress"
    );
  }

  return (
    movie && (
      <div>
        <div
          className={MovieStyler.trailerSection}
          style={{
            backgroundImage: "url(" + movie.background_image + ")",
          }}
        >
          <div className={MovieStyler.gradient}>
            <div className={MovieStyler.movieImageDesc}>
              <div>
                <img
                  className={MovieStyler.trailerNavImg}
                  src={movie.image_url}
                />
                <p className={MovieStyler.para}>In Cinemas</p>
              </div>
              <MovieDetails movieDetails={movie} />
            </div>
          </div>
        </div>
        <div className={MovieStyler.body}>
          <section className={MovieStyler.about}>
            <h2 className={MovieStyler.heading}>About the Movie</h2>
            <p className={MovieStyler.aboutLine}>{movie.about}</p>
          </section>
          <hr />
          <div>
            <section className={MovieStyler.castHeader}>
              <h2>Cast</h2>
            </section>
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
              <CastCard castDetails={getCastDetails()} />
            </Carousel>
          </div>
          <hr />
          <div>
            <section className={MovieStyler.castHeader}>
              <h2>Crew</h2>
            </section>
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
              <CrewCard crewDetails={getCrewDetails()} />
            </Carousel>
          </div>
        </div>
      </div>
    )
  );
}
