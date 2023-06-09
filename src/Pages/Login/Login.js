import { useNavigate } from 'react-router-dom';
import axios from "axios";
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import "./Login.scss";

const API_URL = process.env.REACT_APP_API_URL;

function Login() {
    const navigate = useNavigate();
    
    if (localStorage.authToken) {
        navigate("/userprofile");
    }

    const handleRegister = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/user/login`, {
            email: event.target.email.value,
            name: event.target.name.value,
            password: event.target.password.value
        })
        .then(response => {
            res.setHeader("Access-Control-Allow-Origin", "https://healthylivingtoday.netlify.app");
            localStorage.authToken = response.data.token;
            navigate("/userprofile");
        })
        .catch(error => {
            // TODO: Handle error gracefully, probably some error message
            // alert("Unable to register");
        })
    }

    return (
        <>
            <HomeHeader/>
            <section className='login'>
            <h1 className='login__title'>Login Below</h1>
            <form onSubmit={handleRegister} class="login__form">
                <label className='login__nameLabel' htmlFor="name">Name:</label>
                <input className='login__nameInput' type="text" id="name"></input>
                <label className='login__emailLabel' htmlFor='email'>Email:</label> 
                <input className='login__emailInput' type="text" id="email"></input>
                <label className='login__passwordLabel' htmlFor='password'>Password: </label>
                <input className='login__passwordInput' type="password" id="password"></input>
                <button className='login__button'>Login</button>
            </form>
            </section>
        </>
    )
}

export default Login;