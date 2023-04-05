import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dumbbell from "../../assets/icons/white-dumbbell.png"
import workoutPlans from "../../assets/icons/workout-plans.png"
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader"
import "./UserProfile.scss"

/*
    if token doesn't exist: send user to the homepage
    if token exists: use it to get data from the backend!
        - when getting data: if token is invalid: send them to home page
        - if token works: set the response on state
    
    - using user-profile state: render user information
*/
function UserProfile() {
    const [user, setUser]= useState(null)
    const navigate = useNavigate();
    // const authToken = localStorage.authToken;
    // const jwtToken = localStorage.authToken;

    useEffect(() => {
        const jwtToken = localStorage.authToken;
       
        if (!jwtToken) {
            navigate("/");
            return ;
        }
        
        // JWT token does exist
        axios
            .get("http://localhost:8080/user/profile", {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then(response => {
                setUser(response.data.user);
                console.log(response);
            })
            .catch(error => {
                localStorage.removeItem("authToken");
                navigate("/")
            })
    }, [navigate]);

    // if (authToken) {
        return (
            <section className="home">
                <ProfileHeader/>
                <h1 className="home__title">Welcome Back!</h1>
                    <Link to="/workout">
                        <div className="home__workouts">
                            <img className="home__workouts-img" src={dumbbell} alt="Dumbbell"/>
                            <p className="home__workouts-text">View Workouts</p>
                        </div>
                    </Link>
                    <Link to="/workoutplans">
                        <div className="home__plans">
                            <img className="home__plans-img" src={workoutPlans} alt="Workout plan"/>
                            <p className="home__plans-text">View Workout Plans</p>
                        </div>
                    </Link>
                
            </section>
        );
    }

// }

export default UserProfile;