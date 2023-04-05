import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Monday.scss"

function Monday() {
    const [workout, setWorkout] = useState(null)

    useEffect(() => {
      axios
        .get(`http://localhost:8080/monday`)
        .then((res) => {
          setWorkout(res.data);
        })
        .catch((err) => console.error(err));
    }, []);
  
    if (!workout) {
      return <h2>Loading data...</h2>;
    }

    return(
      <section className="monday">
        <ProfileHeader/>
        <h2>Monday</h2>
        <div className="monday__container">
          <ul className="monday__list">
            {workout.map((workout) => {
              return (
                <li key={workout.id} className="cart__item">
                  <img
                    className="monday__image"
                    src={workout.product_img}
                    alt={workout.name}
                  />
                  <div className="monday__info-container">
                    <h2 className="monday__title">{workout.name}</h2>
                    <p className="monday__difficulty">{workout.difficulty}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section> 
    )
  }
  
  export default Monday;