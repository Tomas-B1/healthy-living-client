import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.png";
import "./WorkoutDetails.scss";

function WorkoutDetail({ workoutInfo }) {
  const [value, setValue]= useState('') 
  const [user, setUser]= useState(null)
  const navigate = useNavigate();
    
    const previousPage = () => {
        navigate(-1); // Takes user back to previous page
      }

      const handleChange =(event) => {
        setValue(event.target.value)
      }

      useEffect(() => {
        const jwtToken = localStorage.authToken;
       
        if (!jwtToken) {
            navigate("/");
            return ;
        }

        axios
            .get("http://localhost:8080/user", {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then(response => {
                setUser(response.data);
            })
          })

    if(!user){
        return<h1>Loading</h1>
    }

      const handleAddWorkout = () => {
        axios.post("http://localhost:8080/schedule", {
          workout_id: workoutInfo.id,
          user_id: user[0].id,
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
        {/* <button className="workoutDetail__button" onClick={handleAddTuesday}>Tuesday</button>
        <button className="workoutDetail__button" onClick={handleAddWednesday}>Wednesday</button>
        <button className="workoutDetail__button" onClick={handleAddThursday}>Thursday</button>
        <button className="workoutDetail__button" onClick={handleAddFriday}>Friday</button>
        <button className="workoutDetail__button" onClick={handleAddSaturday}>Saturday</button>
        <button className="workoutDetail__button" onClick={handleAddSunday}>Sunday</button> */}
      </div>
    </section>
  );
}

export default WorkoutDetail;