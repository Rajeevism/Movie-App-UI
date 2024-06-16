import castCardStyler from "./CrewCard.module.css";

export default function ({ crewDetails }) {
  console.log(crewDetails);

  return crewDetails.map((crewDetail, idx) => {
    return (
      <section key={idx} className={castCardStyler.cast}>
        <img className={castCardStyler.imageStyle} src={crewDetail.image_url} />
        <div className={castCardStyler.castDetails}>
          <div className={castCardStyler.name}>{crewDetail.name}</div>
          <div>{crewDetail.role}</div>
        </div>
      </section>
    );
  });
}
