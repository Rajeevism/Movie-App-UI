import castCardStyler from "./CastCard.module.css";
export default function CastCard({ image, name, role }) {
  return (
    <div>
      <section className={castCardStyler.cast}>
        <img className={castCardStyler.imageStyle} src={image} />
        <h4>{name}</h4>
        <p>{role}</p>
      </section>
    </div>
  );
}
