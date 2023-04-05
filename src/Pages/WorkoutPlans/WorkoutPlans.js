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
        <>
            <ProfileHeader/>
            <section className="workoutlist">
                <Link to="/monday" className="workoutlist__link">
                    <div className="workoutlist__day">
                    <img className="workoutlist__image" src={monday} alt="Monday"/> 
                    </div>
                </Link>
                <Link to="/tuesday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={tuesday} alt="Tuesday"/> 
                    </div>
                </Link>
                <Link to="/wednesday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={wednesday} alt="Wednesday"/> 
                    </div>
                </Link>
                <Link to="/thursday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={thursday} alt="Thursday"/> 
                    </div>
                </Link>
                <Link to="/friday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={friday} alt="Friday"/> 
                    </div>
                </Link>
                <Link to="/saturday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={saturday} alt="Saturday"/> 
                    </div>
                </Link>
                <Link to="/sunday" className="workoutlist__link">
                    <div className="workoutlist__day">
                        <img className="workoutlist__image" src={sunday} alt="Sunday"/> 
                    </div>
                </Link>
            </section>
        </>   
      );
  }
  
  export default WorkoutPlans;