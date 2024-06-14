import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "../cast/CastCard";
import CrewCard from "../crew/CrewCard";
import MovieDetails from "../movieDetails/MovieDetails";
import MovieStyler from "./MoviePage.module.css";
import "react-multi-carousel/lib/styles.css";

export default function MoviePage({ about, image_url, background_image }) {
  const movieID = ({ id }) => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const getMovieById = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/movies/${id}`
          );
          console.log("Get Movie By Id : " + id);
          console.log("Movie Data : " + response.data);
          setMovie(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      getMovieById();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!movie) return <p>No movie found</p>;

    return (
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
                <img className={MovieStyler.trailerNavImg} src={image_url} />
                <p className={MovieStyler.para}>In Cinemas</p>
              </div>
              {movie.map((movieDetails, idx) => (
                <MovieDetails key={idx} {...movieDetails} />
              ))}
            </div>
          </div>
        </div>
        <div className={MovieStyler.body}>
          <section className={MovieStyler.about}>
            <h2 className={MovieStyler.heading}>About the Movie</h2>
            <p className={MovieStyler.aboutLine}>{about}</p>
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
                {movie.map((castMember, idx) => (
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
                {movie.map((crewMember, idx) => (
                  <CrewCard key={idx} {...crewMember} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
