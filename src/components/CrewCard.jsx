import castCardStyler from "./CastCard.module.css";
export default function ({ image, name, role }) {
  return (
    <section className={castCardStyler.cast}>
      <img className={castCardStyler.imageStyle} src={image} />
      <div className={castCardStyler.castDetails}>
        <div className={castCardStyler.name}>{name}</div>
        <div>{role}</div>
      </div>
    </section>
  );
}
