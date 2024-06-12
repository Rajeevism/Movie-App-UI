import { useNavigate } from "react-router-dom";
import MovieCardStyler from "./MovieSummaryCard.module.css";

export default function MovieSummaryCard({
  id,
  image_url,
  movie_name,
  certificate,
  languages,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movies/" + id);
  };

  return (
    <div>
      <section className={MovieCardStyler.movieCard}>
        <img src={image_url} onClick={handleClick} />
        <div className={MovieCardStyler.title}>{movie_name}</div>
        <div className={MovieCardStyler.certiAndLang}>
          <div>{certificate}</div>
          <div>{...languages}</div>
        </div>
      </section>
    </div>
  );
}
