import GarudanImg from "../assests/garudan.png";
import MovieStyler from "./Movie.module.css";

export default function Movies() {
  return (
    <div>
      <section className={MovieStyler.trailerSection}>
        <div className={MovieStyler.gradient}>
          <img className={MovieStyler.trailerNavImg} src={GarudanImg} />
        </div>
      </section>
      <h2 className={MovieStyler.heading}>About the Movie</h2>
      <p className={MovieStyler.about}>
        The movie revolves around how the innocent are affected when the
        minister wants to get the land belonging to a temple.
      </p>
      <hr />
    </div>
  );
}
