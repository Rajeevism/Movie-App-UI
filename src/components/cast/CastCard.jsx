import castCardStyler from "./CastCard.module.css";

export default function CastCard({ castDetails }) {
  console.log(castDetails);

  return castDetails.map((castDetail, idx) => {
    return (
      <div key={idx}>
        <section className={castCardStyler.cast}>
          <img
            className={castCardStyler.imageStyle}
            src={castDetail.image_url}
          />
          <div className={castCardStyler.castDetails}>
            <div className={castCardStyler.name}>{castDetail.name}</div>
            <div>{castDetail.role}</div>
          </div>
        </section>
      </div>
    );
  });
}
