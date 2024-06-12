import GarudanImg from "../assets/garudan.png";
import PTSirImg from "../assets/PTsir.png";

export const moviesDetails = [
  {
    id: 1,
    name: "Garudan",
    ratings: "9.1/10",
    label: "2D",
    language: "Tamil",
    showTime: "2h 14m",
    genre: "Action,Drama",
    certificate: "U/A",
    releaseDate: "31-05-2024",
    summary:
      "The movie revolves around how the innocent are affected when the minister wants to get the land belonging to a temple.",
    image: GarudanImg,
    backgroundImage: "garudan-bg.avif",
  },
  {
    id: 2,
    name: "PT Sir",
    ratings: "8.9/10",
    label: "2D",
    language: "Tamil",
    showTime: "2h 10m",
    genre: "Comedy,Drama",
    certificate: "U",
    releaseDate: "24-05-2024",
    summary:
      "PT Sir is a Tamil movie starring Hiphop Tamizha, Kashmira Pardeshi, Anikha Surendran and Munishkanth in prominent roles. It is written and directed by Karthik Venugopalan.",
    image: PTSirImg,
    backgroundImage: "pt-sir-bg.avif",
  },
];

export function getMovieById(id) {
  console.log("in get movie by id: ", id);
  let movie = moviesDetails.filter((data) => data.id == id);
  console.log("movie:", movie);
  return movie.length > 0 ? movie[0] : undefined;
}
