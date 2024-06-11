import { useNavigate } from "react-router-dom";
import MovieCardStyler from "./MovieCard.module.css";
export default function MovieCard({ id, image, title, certificate, language }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/movies/' + id);
  };

  return (
    <div>
      <section className={MovieCardStyler.movieCard} onClick={handleClick}>
        <img src={image} />
        <h3>{title}</h3>
        <p>{certificate}</p>
        <p>{language}</p>
      </section>
    </div>
  );
}
