import { CardStyle } from "./styles/Card.style";

function Card({ item: { id, title, body, image } }) {
  return (
    <CardStyle layout={`${id % 2 === 0 ? "row-reverse" : ""}`}>
      <div className="card__desc">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="card__img">
        <img src={image} alt="images" />
      </div>
    </CardStyle>
  );
}

export default Card;
