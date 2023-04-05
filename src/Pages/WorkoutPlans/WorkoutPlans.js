import "./WorkoutPlans.scss";
import { Link } from 'react-router-dom';
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import monday from "../../assets/icons/mon.png"
import tuesday from "../../assets/icons/tuesday.png"
import wednesday from "../../assets/icons/wed.png"
import thursday from "../../assets/icons/thurs.png"
import friday from "../../assets/icons/friday.png"
import saturday from "../../assets/icons/sat.png"
import sunday from "../../assets/icons/sunday.png"

function WorkoutPlans() {
    return (
        <section className="workoutlist">
            <ProfileHeader/>
            <Link to="/monday">
                <div className="workoutlist__day">
                  <img className="workoutlist__image" src={monday} alt="Monday"/> 
                </div>
            </Link>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={tuesday} alt="Tuesday"/> 
            </div>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={wednesday} alt="Wednesday"/> 
            </div>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={thursday} alt="Thursday"/> 
            </div>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={friday} alt="Friday"/> 
            </div>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={saturday} alt="Saturday"/> 
            </div>
            <div className="workoutlist__day">
                <img className="workoutlist__image" src={sunday} alt="Sunday"/> 
            </div>
        </section>
      );
  }
  
  export default WorkoutPlans;