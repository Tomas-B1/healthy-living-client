import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.png";
import "./WorkoutDetails.scss";

function WorkoutDetail({ workoutInfo }) {
  const [value, setValue]= useState('') 
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
          if (response.status === 200) {
            // setSuccessfulAdd(true);
          }
          })
        .catch((error) => {
          // setDuplicateItem(true);
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
          <p>{workoutInfo.muscle}</p>
          <h3 className="workoutDetail__difficulty">Difficulty:</h3>
          <p>{workoutInfo.difficulty}</p>
          <h3 className="workoutDetail__descTitle">Description</h3>
          <p className="workoutDetail__description">{workoutInfo.description}</p>
        </div>
        <h3>Pick a day:</h3>
        <select
          className="workouts__dropdown"
          name="workouts"
          id="workouts"
          onChange={handleChange}
        >
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
    </section>
  );
}

export default WorkoutDetail;