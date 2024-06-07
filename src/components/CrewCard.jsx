import castCardStyler from "./CastCard.module.css";
export default function ({ image, name, role }) {
  return (
    <div>
      <section className={castCardStyler.cast}>
        <img className={castCardStyler.imageStyle} src={image} />
        <div className={castCardStyler.details}>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </section>
    </div>
  );
}
