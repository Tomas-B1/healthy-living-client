import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.png";
import "./WorkoutDetails.scss";

function WorkoutDetail({ workoutInfo }) {
  const [value, setValue]= useState('') 
  const [successfulAdd, setSuccessfulAdd] = useState(false);
  const navigate = useNavigate();
    
    const previousPage = () => {
        navigate(-1);
      }

      const handleChange =(event) => {
        setValue(event.target.value)
      }

      const userId = sessionStorage.getItem('user.id')


      const handleAddWorkout = () => {
        axios.post("http://localhost:8080/schedule", {
          workout_id: workoutInfo.id,
          user_id: userId,
          DayOfWeek: value
        })
        .then((response) => {
          if (response.status === 201) {
             setSuccessfulAdd(true);
          }
          })
        .catch((error) => {
        });
      };

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
          <p className="workoutDetail__muscleText">{workoutInfo.muscle}</p>
          <h3 className="workoutDetail__difficulty">Difficulty:</h3>
          <p className="workoutDetail__diffText">{workoutInfo.difficulty}</p>
          <h3 className="workoutDetail__descTitle">Description</h3>
          <p className="workoutDetail__description">{workoutInfo.description}</p>
        </div>
        <h3 className="workoutDetail__aDay">Select a day:</h3>
        <select
          className="workoutDetail__dropdown"
          name="workouts"
          id="workouts"
          onChange={handleChange}
        >
          <option>Choose Day:</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <button className="workoutDetail__button" onClick={handleAddWorkout}>Add Workout</button>
      </div>
      <h2 className={`workoutDetail__message-success ${successfulAdd ? "workoutDetail__message-success--show" : ""}`}>
          This workout was sucessfully added to your schedule
        </h2>
    </section>
  );
}

export default WorkoutDetail;