import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WorkoutDetails from "../../Components/WorkoutDetails/WorkoutDetail"

function WorkoutInfo() {
  const [workoutInfo, setWorkoutInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/workout/${id}`)
      .then((res) => {
        setWorkoutInfo(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!workoutInfo) {
    return <h2>Loading workout data...</h2>;
  }

  return (
    <main className="page">
      <WorkoutDetails workoutInfo={workoutInfo} />
    </main>
  );
}

export default WorkoutInfo;