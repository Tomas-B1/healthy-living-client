import "./WorkoutPlans.scss";
import { Link } from 'react-router-dom';
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import monday from "../../assets/icons/daily.png"
import tuesday from "../../assets/icons/daily.png"
import wednesday from "../../assets/icons/daily.png"
import thursday from "../../assets/icons/daily.png"
import friday from "../../assets/icons/daily.png"
import saturday from "../../assets/icons/daily.png"
import sunday from "../../assets/icons/daily.png"

function WorkoutPlans() {
    return (
        <>
            <ProfileHeader/>
            <section className="workoutlist">
                <h2 className="workoutlist__title">Select the day of the week: </h2>
                <div className="workoutlist__container">
                    <Link to="/monday" className="workoutlist__link">
                        <div className="workoutlist__day">
                        <img className="workoutlist__image" src={monday} alt="Monday"/>
                        <p className="workoutlist__date">Monday</p>
                        </div>
                    </Link>
                    <Link to="/tuesday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={tuesday} alt="Tuesday"/> 
                            <p className="workoutlist__date">Tuesday</p>
                        </div>
                    </Link>
                    <Link to="/wednesday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={wednesday} alt="Wednesday"/> 
                            <p className="workoutlist__date">Wednesday</p>
                        </div>
                    </Link>
                    <Link to="/thursday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={thursday} alt="Thursday"/> 
                            <p className="workoutlist__date">Thursday</p>
                        </div>
                    </Link>
                    <Link to="/friday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={friday} alt="Friday"/> 
                            <p className="workoutlist__date">Friday</p>
                        </div>
                    </Link>
                    <Link to="/saturday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={saturday} alt="Saturday"/> 
                            <p className="workoutlist__date">Saturday</p>
                        </div>
                    </Link>
                    <Link to="/sunday" className="workoutlist__link">
                        <div className="workoutlist__day">
                            <img className="workoutlist__image" src={sunday} alt="Sunday"/> 
                            <p className="workoutlist__date">Sunday</p>
                    </div>
                    </Link>
                </div>
            </section>
        </>   
      );
  }
  
  export default WorkoutPlans;