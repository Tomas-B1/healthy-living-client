import { Link } from "react-router-dom";
import "../MealCard/MealCard.scss"

function MealCard({ 
    id,
    name, 
    img }) {
  return (
    <Link to={`/meals/${id}`} className="meal-card__link">
      <div className="meal-card">
        <img
          className="meal-card__image"
          src={img}
          alt={`${name}`}
        />
        <h3 className="meal-card__name">{name.toUpperCase()}</h3>
      </div>
    </Link>
  );
}

export default MealCard;