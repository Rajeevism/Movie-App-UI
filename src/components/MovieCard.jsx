import MovieCardStyler from "./MovieCard.module.css";
export default function MovieCard({ image, title, certificate, language }) {
  return (
    <div>
      <section className={MovieCardStyler.movieCard}>
        <img src={image} />
        <h3>{title}</h3>
        <p>{certificate}</p>
        <p>{language}</p>
      </section>
    </div>
  );
}
