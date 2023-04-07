import { useState, useEffect } from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import axios from "axios";
import "../WorkoutList/WorkoutList.scss"

function WorkoutList() {
  const [workout, setWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption]= useState("All Wokouts")
  let muscle;

  useEffect(() => {
      axios.get(`http://localhost:8080/workout`)
    .then((response) => {
      setWorkout(response.data);
      setIsLoading(false);
    });
  }, []);

  // let Biceps = workout.filter(function(work) {
  //   return work.muscle === "Biceps";
  //  });

  //   workout.filter(function(work) {
  //   return work.muscle === "Calves";
  //   });

  //   workout.filter(function(work) {
  //   return work.muscle === "Pectorals";
  //   });
    
  // let Traps =  workout.filter(function(work) {
  //   return work.muscle === "Traps";
  // });

  // let Triceps =  workout.filter(function(work) {
  //   return work.muscle === "Triceps";
  // });

  // let Quads =  workout.filter(function(work) {
  //   return work.muscle === "Quads";
  // });

  // let Upper =  workout.filter(function(work) {
  //   return work.muscle === "Upper Back";
  // });

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
   }  else if (event.target.value === "All Workouts"){
      muscle = workout.filter(
        (work) => work.muscle === "Biceps"||"Calves"||"Peactorals"||"Traps"||"Triceps"||"Quads"||"Upper back"
      );
      setWorkout(muscle)
      setOption(event.target.value)
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
