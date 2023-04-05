import { useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.png";
import "./WorkoutDetails.scss";

function WorkoutDetail({ workoutInfo }) {
    const navigate = useNavigate();
    
    const previousPage = () => {
        navigate(-1); // Takes user back to previous page
      }

      const handleAddMonday = () => {
        axios.post("http://localhost:8080/monday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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

      const handleAddTuesday = () => {
        axios.post("http://localhost:8080/tuesday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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
      const handleAddWednesday = () => {
        axios.post("http://localhost:8080/wednesday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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
      const handleAddThursday = () => {
        axios.post("http://localhost:8080/thursday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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
      const handleAddFriday = () => {
        axios.post("http://localhost:8080/friday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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
      const handleAddSaturday = () => {
        axios.post("http://localhost:8080/saturday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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

      const handleAddSunday = () => {
        axios.post("http://localhost:8080/Sunday", {
          name: workoutInfo.name,
          description: workoutInfo.description,
          product_img: workoutInfo.product_img,
          muscle: workoutInfo.muscle,
          difficulty: workoutInfo.difficulty
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
        <button className="workoutDetail__button" onClick={handleAddMonday}>Monday</button>
        <button className="workoutDetail__button" onClick={handleAddTuesday}>Tuesday</button>
        <button className="workoutDetail__button" onClick={handleAddWednesday}>Wednesday</button>
        <button className="workoutDetail__button" onClick={handleAddThursday}>Thursday</button>
        <button className="workoutDetail__button" onClick={handleAddFriday}>Friday</button>
        <button className="workoutDetail__button" onClick={handleAddSaturday}>Saturday</button>
        <button className="workoutDetail__button" onClick={handleAddSunday}>Sunday</button>
      </div>
    </section>
  );
}

export default WorkoutDetail;