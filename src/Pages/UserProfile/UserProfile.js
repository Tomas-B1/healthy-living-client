import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dumbbell from "../../assets/icons/white-dumbbell.png"
import workoutPlans from "../../assets/icons/workout-plans.png"
import meals from "../../assets/icons/meals.png"
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader"
import "./UserProfile.scss"

const API_URL = process.env.REACT_APP_API_URL;

function UserProfile() {
    const [user, setUser]= useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = localStorage.authToken;
       
        if (!jwtToken) {
            navigate("/");
            return ;
        }

        axios
            .get(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then(response => {
                setUser(response.data);
                sessionStorage.setItem("user.id", response.data[0].id)
            })
            .catch(error => {
                localStorage.removeItem("authToken");
                navigate("/")
            })
    }, [navigate]);

    if(!user){
        return<h1>Loading</h1>
    }

        return (
            <>
            <ProfileHeader/>
            <section className="home">
                <h1 className="home__title">Welcome Back {user[0].name}!</h1>
                <div className="home__container">
                    <Link to="/workout" className="home__links">
                        <div className="home__workouts">
                            <img className="home__workouts-img" src={dumbbell} alt="Dumbbell"/>
                            <p className="home__workouts-text">View Workouts</p>
                        </div>
                    </Link>
                    <Link to="/workoutplans" className="home__links">
                        <div className="home__plans">
                            <img className="home__plans-img" src={workoutPlans} alt="Workout plan"/>
                            <p className="home__plans-text">View Workout Plans</p>
                        </div>
                    </Link>
                    <Link to="/meals" className="home__links">
                        <div className="home__plans">
                            <img className="home__plans-img" src={meals} alt="Workout plan"/>
                            <p className="home__plans-text">View Meals</p>
                        </div>
                    </Link>
                </div>    
            </section>
            </>
        );
    }


export default UserProfile;