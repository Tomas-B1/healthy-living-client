import { useNavigate } from 'react-router-dom';
import axios from "axios";
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import "./SignUp.scss";

const API_URL = process.env.REACT_APP_API_URL;

function Register() {
    const navigate = useNavigate();
    
    const handleRegister = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/user/register`, {
            email: event.target.email.value,
            name: event.target.name.value,
            password: event.target.password.value
        })
        .then(response => {
            localStorage.authToken = response.data.token;
             navigate("/login");
        })
        .catch(error => {
            // TODO: Handle error gracefully, probably some error message
            // alert("Unable to register");
        })
    }

    return (
        <>
            <HomeHeader/>
            <section className='signup'>
            <h1 className='signup__title'>Sign Up Below</h1>
            <form onSubmit={handleRegister} class="signup__form">
                <label className='signup__nameLabel' htmlFor="name">Name:</label>
                <input className='signup__nameInput' type="text" id="name"></input>
                <label className='signup__emailLabel' htmlFor='email'>Email:</label> 
                <input className='signup__emailInput' type="text" id="email"></input>
                <label className='signup__passwordLabel' htmlFor='password'>Password: </label>
                <input className='signup__passwordInput' type="password" id="password"></input>
                <button className='signup__button'>SIGN UP</button>
            </form>
            </section>
        </>
    )
}

export default Register;