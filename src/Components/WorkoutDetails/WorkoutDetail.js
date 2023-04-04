import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow.png";
import "./WorkoutDetails.scss";

function WorkoutDetail({ workoutInfo }) {
    const navigate = useNavigate();
    
    const previousPage = () => {
        navigate(-1); // Takes user back to previous page
      }

  return (
    <section className="workoutDetail">
      <div className="workoutDetail__page">
      <img
          className="workoutDetail__arrow-icon"
          src={backArrow}
          alt="backArrow"
          onClick={previousPage}
        />
        <img
          className="workoutDetail__img"
          src={workoutInfo.product_img}
          alt={workoutInfo.name}
        />
        <div className="workoutDetail__info">
          <h2 className="workoutDetail__title">{workoutInfo.name.toUpperCase()}</h2>
          <h3 className="workoutDetail__muscle">Muscle:</h3>
          <p>{workoutInfo.muscle}</p>
          <h3 className="workoutDetail__difficulty">Difficulty:</h3>
          <p>{workoutInfo.difficulty}</p>
          <h3 className="workoutDetail__descTitle">Description</h3>
          <p className="workoutDetail__description">{workoutInfo.description}</p>
        </div>
        <button className="workoutDetail__button">SAVE TO PROFILE</button>
      </div>
    </section>
  );
}

export default WorkoutDetail;