import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.png"
import "../../styles/schedule.scss"

function Tuesday() {
  const [workout, setWorkout] = useState(null)

  const navigate = useNavigate();
    
  const previousPage = () => {
      navigate(-1);
    }

  const userId = sessionStorage.getItem('user.id')

  useEffect(() => {
   axios
     .get(`http://localhost:8080/schedule/${userId}/tuesday`)
     .then((res) => {
       setWorkout(res.data);
     })
     .catch((err) => console.error(err));
 }, [userId]);

   if (!workout) {
     return <h2>Loading data...</h2>;
   }

    return(
      <>
      <ProfileHeader/>
      <section className="schedule">
      <img
          className="schedule__arrow-icon"
          src={backArrow}
          alt="backArrow"
          onClick={previousPage}
        />
        <h2 className="schedule__dayTitle">Tuesday</h2>
        <div className="schedule__container">
          <div className="schedule__list">
            {workout.map((workout) => {
              return (
                <ul key={workout.id} className="schedule__item">
                  <li>
                    <img
                      className="schedule__image"
                      src={workout.product_img}
                      alt={workout.name}
                    />
                  </li>
                  <li>
                      <h2 className="schedule__title">{workout.name.toUpperCase()}</h2>
                  </li>
                  <li>    
                      <p className="schedule__muscle">{workout.muscle}</p>
                  </li>
                  <li>    
                      <p className="schedule__difficulty">{workout.difficulty}</p>
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
  
  export default Tuesday;