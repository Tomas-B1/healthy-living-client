import { useState, useEffect } from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import axios from "axios";
import "../WorkoutList/WorkoutList.scss"

function WorkoutList() {
  const [workout, setWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption] = useState("All");

  useEffect(() => {
      axios.get(`http://localhost:8080/workout`)
    .then((response) => {
      console.log(response.data)
      setWorkout(response.data);
      setIsLoading(false);
    });
  }, []);


  function handleSelectChange(event) {
    setOption(event.target.value);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
      <main className="workouts">
        <h1 className="workouts__title">Workouts</h1>
        <select
          className="workouts__dropdown"
          name="workouts"
          id="workouts"
          value={option}
          onChange={handleSelectChange}
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

        <ul className="workouts__list">
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
      </ul>
      </main>
    );
  }
  
  export default WorkoutList;
