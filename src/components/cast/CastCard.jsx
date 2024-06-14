import castCardStyler from "./CastCard.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function CastCard() {
  const { movieId } = useParams();
  const getCastDetails = async (movieId) => {
    const response = await axios.get("http://localhost:8000/movies/" + movieId);
    console.log(response.data);
    setCastDetails(response.data);
  };
  const [CastDetails, setCastDetails] = useState([]);
  useEffect(() => {
    getCastDetails(movieId);
  }, []);
  console.log("Id : " + movieId);
  console.log("Movie : " + CastDetails);
  return (
    <div>
      <section className={castCardStyler.cast}>
        <img
          className={castCardStyler.imageStyle}
          src={CastDetails.image_url}
        />
        <div className={castCardStyler.castDetails}>
          <div className={castCardStyler.name}>{CastDetails.name}</div>
          <div>{CastDetails.role}</div>
        </div>
      </section>
    </div>
  );
}
