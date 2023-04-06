import "./ProfileHeader.scss";
import { Link } from 'react-router-dom';

function ProfileHeader() {
    return (
        <header className="profile-header">
          <nav className="profile-header__navbar">
              <Link to="/"> 
                <h1 className="profile-header__name">Healthy Living</h1>
              </Link>
            <div className="profile-header__routes">
            <Link to={"/workout"}>
                <button className="profile-header__button">Workouts</button>
              </Link>
              <Link to={"/workoutplans"}>
                <button className="profile-header__button">Workout Plans</button>
              </Link>
              <Link to={"/"}>
                <button className="profile-header__button">Logout</button>
              </Link>
            </div>
          </nav>
        </header>
      );
  }
  
  export default ProfileHeader;