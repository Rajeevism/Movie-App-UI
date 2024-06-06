import GarudanImg from "../assests/garudan.png";
import { CastDetails } from "./Cast";
import CastCard from "./CastCard";
import MovieStyler from "./Movie.module.css";

export default function Movies() {
  console.log("in movie");
  return (
    <div>
      <section className={MovieStyler.trailerSection}>
        <div className={MovieStyler.gradient}>
          <img className={MovieStyler.trailerNavImg} src={GarudanImg} />
        </div>
      </section>
      <section className={MovieStyler.about}>
        <h2 className={MovieStyler.heading}>About the Movie</h2>
        <p className={MovieStyler.aboutLine}>
          The movie revolves around how the innocent are affected when the
          minister wants to get the land belonging to a temple.
        </p>
      </section>
      <hr />
      <div>
        <section className={MovieStyler.castHeader}>
          <h2>Cast</h2>
        </section>
        <section className={MovieStyler.castCard}>
          <CastCard {...CastDetails[0]} />
          <CastCard {...CastDetails[1]} />
          <CastCard {...CastDetails[2]} />
          <CastCard {...CastDetails[3]} />
          <CastCard {...CastDetails[4]} />
          <CastCard {...CastDetails[5]} />
        </section>
      </div>
    </div>
  );
}
