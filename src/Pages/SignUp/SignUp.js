// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import "./SignUp.scss";

function Register() {
    // const navigate = useNavigate();
    
    if (localStorage.authToken) {
        // navigate("/user-profile");
    }

    const handleRegister = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/register", {
            email: event.target.email.value,
            name: event.target.name.value,
            password: event.target.password.value
        })
        .then(response => {
            localStorage.authToken = response.data.token;
            // navigate("/user-profile");
        })
        .catch(error => {
            // TODO: Handle error gracefully, probably some error message
            // alert("Unable to register");
        })
    }

    return (
        <>
            <HomeHeader/>
            <h1>Sign Up Below</h1>
            <form onSubmit={handleRegister} class="signup">
                <label className='signup__nameLabel' htmlFor="name">Name:</label>
                <input className='signup__nameInput' type="text" id="name"></input>
                <label className='signup__emailLabel' htmlFor='email'>Email:</label> 
                <input className='signup__emailInput' type="text" id="email"></input>
                <label className='signup__passwordLabel' htmlFor='password'>Password: </label>
                <input className='signup__passwordInput' type="password" id="password"></input>
                <button className='signup__button'>SIGN UP</button>
            </form>
        </>
    )
}

export default Register;