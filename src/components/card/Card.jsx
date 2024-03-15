import "./card.css";
import "../buttons/buttons.css";
import productPic from "../../images/dress1.png";

const Card = (props) => {
    const {name, image, price} = props.item;
  return (
    <div className="card">
      <img src={image} alt="card-image" />
      <div className="elements-container">
      <p className="card-title">{name}</p>
      <p className="card-price">Price: Rs.{price}</p>
      <button className="secondary-button">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
