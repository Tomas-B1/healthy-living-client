import "./HowItWorks.scss";
import checkmark from "../../assets/icons/check-symbol.png"
import dumbbell from "../../assets/icons/dumbbell-symbol.png"
import profile from "../../assets/icons/profile-symbol.png"
import recipe from "../../assets/icons/recipes.png"
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <section className="info">
            <h2 className="info__title">HOW IT WORKS</h2>
          <div className="info__container">  
            <div className="info__signup">
                <img className="info__icon" src={checkmark} alt="checkmark"/>
                <p className="info__text">Create your profile now to get started today!</p>
                <Link to="/signup" className="info__link"><button className="info__button">SIGN UP</button></Link>
            </div>
            <div className="info__workouts">
                <img className="info__icon" src={dumbbell} alt="dumbbell"/>
                <p className="info__text">Find new workouts</p>
            </div>
            <div className="info__profile">
                <img className="info__icon" src={profile} alt="profile"/>
                <p className="info__text info__profileText">Save workouts to your personal profile</p>
            </div>
            <div className="info__profile">
                <img className="info__icon" src={recipe} alt="profile"/>
                <p className="info__text info__profileText">Find new healthy recipes</p>
            </div>
          </div>  
            <div className="whyChoose">
                <h2 className="whyChoose__title">WHY CHOOSE HEALTHY LIVING?</h2>
                <div className="whyChoose__container">
                    <p className="whyChoose__text">Joining the Healthy Living community will grant you access and the ability to save workouts to your user profile and find new delicous healthy meals. Making it easier for you to obtain your fitness goals.</p>
                </div>
            </div>   
        </section>
      );
  }
  
  export default HomeHeader;