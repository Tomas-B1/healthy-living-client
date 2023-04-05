import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import { useState, useEffect } from "react";
import axios from "axios";

function Wednesday() {
    const [workout, setWorkout] = useState(null)

    useEffect(() => {
      axios
        .get(`http://localhost:8080/wednesday`)
        .then((res) => {
          setWorkout(res.data);
        })
        .catch((err) => console.error(err));
    }, []);
  
    if (!workout) {
      return <h2>Loading data...</h2>;
    }

    return(
      <>
      <ProfileHeader/>
      <section className="monday">
        <h2>Wednesday</h2>
        <div className="monday__container">
          <div className="monday__list">
            {workout.map((workout) => {
              return (
                <ul key={workout.id} className="monday__item">
                  <li>
                    <img
                      className="monday__image"
                      src={workout.product_img}
                      alt={workout.name}
                    />
                  </li>
                  <li>
                      <h2 className="monday__title">{workout.name.toUpperCase()}</h2>
                  </li>
                  <li>    
                      <p className="monday__muscle">{workout.muscle}</p>
                  </li>
                  <li>    
                      <p className="monday__difficulty">{workout.difficulty}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section> 
      </>
    )
  }
  
  export default Wednesday;