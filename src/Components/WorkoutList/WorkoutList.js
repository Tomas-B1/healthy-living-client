import { useState, useEffect } from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import axios from "axios";
import "../WorkoutList/WorkoutList.scss"

const API_URL = process.env.REACT_APP_API_URL;

function WorkoutList() {
  const [workout, setWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption]= useState("All Wokouts")
  let muscle;

  useEffect(() => {
      axios.get(`${API_URL}/workout`)
    .then((response) => {
      setWorkout(response.data);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleChange =(event) => {
    if(event.target.value === "Biceps"){
      muscle = workout.filter(
        (work) => work.muscle === "Biceps"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    }else if(event.target.value === "Calves"){
      muscle = workout.filter(
        (work) => work.muscle === "Calves"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    }else if(event.target.value === "Pectorals"){
      muscle = workout.filter(
        (work) => work.muscle === "Pectorals"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    } else if(event.target.value === "Traps"){
      muscle = workout.filter(
        (work) => work.muscle === "Traps"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    } else if(event.target.value === "Triceps"){
      muscle = workout.filter(
        (work) => work.muscle === "Triceps"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    } else if(event.target.value === "Quads"){
      muscle = workout.filter(
        (work) => work.muscle === "Quads"
      );
      setWorkout(muscle)
      setOption(event.target.value)
    } else if(event.target.value === "Upper Back"){
        muscle = workout.filter(
          (work) => work.muscle === "Upper back"
        );
        setWorkout(muscle)
        setOption(event.target.value)
    } else if(event.target.value === "Traps"){
      muscle = workout.filter(
        (work) => work.muscle === "Traps"
       );
      setWorkout(muscle)
      setOption(event.target.value)
   }  else if (event.target.value === "All"){
      window.location.reload();
  }
  }

  return (
      <main className="workouts">
        <h1 className="workouts__title">Workouts</h1>
        <select
          className="workouts__dropdown"
          name="workouts"
          id="workouts"
          value={option}
          onChange={handleChange}
        >
          <option value="All">All Workouts</option>
          <option value="Biceps">Biceps</option>
          <option value="Calves">Calves</option>
          <option value="Pectorals">Pectorals</option>
          <option value="Traps">Traps</option>
          <option value="Triceps">Triceps</option>
          <option value="Quads">Quads</option>
          <option value="Upper Back">Upper Back</option>
        </select>

        <div className="workouts__list">
        {workout.map((workout) => {
          return (    
          <WorkoutCard
          key={workout.id}
          id={workout.id}
          name={workout.name}
          img={workout.product_img}
          muscle={workout.muscle}
        />
          );
        })}
      </div>
      </main>
    );
  }
  
  export default WorkoutList;
