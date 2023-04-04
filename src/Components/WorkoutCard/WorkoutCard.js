import { Link } from "react-router-dom";
import "./WorkoutCard.scss";

function WorkoutCard({ id, name, img, muscle }) {
  return (
    <Link to={`/workout/${id}`} className="workout-card__link">
      <div className="workout-card">
        <img
          className="workout-card__image"
          src={img}
          alt={`${name}`}
        />
        <h3 className="workout-card__name">{name}</h3>
        <p className="workout-card__muscle">{muscle}</p>
      </div>
    </Link>
  );
}

export default WorkoutCard;