import { useNavigate } from "react-router-dom";
import MovieCardStyler from "./MovieSummaryCard.module.css";

export default function MovieSummaryCard({ id, image, title, certificate, language }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movies/" + id);
  };

  return (
    <div>
      <section className={MovieCardStyler.movieCard}>
        <img src={image} onClick={handleClick} />
        <h3>{title}</h3>
        <p>{certificate}</p>
        <p>{language}</p>
      </section>
    </div>
  );
}
