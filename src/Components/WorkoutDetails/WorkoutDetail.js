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
          className="product__arrow-icon"
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
          <h2 className="workoutDetail__title">{workoutInfo.name}</h2>
          <h3 className="workoutDetail__muscle">{workoutInfo.muscle}</h3>
          <h3 className="workoutDetail__difficulty">{workoutInfo.difficulty}</h3>
          <p className="workoutDetail__descTitle">Description</p>
          <p className="workoutDetail__description">{workoutInfo.description}</p>
        </div>
      </div>
    </section>
  );
}

export default WorkoutDetail;