import { useNavigate } from 'react-router-dom';
import axios from "axios";
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import "./Login.scss";

function Login() {
    const navigate = useNavigate();
    
    if (localStorage.authToken) {
        navigate("/userprofile");
    }

    const handleRegister = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/user/login", {
            email: event.target.email.value,
            name: event.target.name.value,
            password: event.target.password.value
        })
        .then(response => {
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
            <h1>Login Below</h1>
            <form onSubmit={handleRegister} class="login">
                <label className='login__nameLabel' htmlFor="name">Name:</label>
                <input className='login__nameInput' type="text" id="name"></input>
                <label className='login__emailLabel' htmlFor='email'>Email:</label> 
                <input className='login__emailInput' type="text" id="email"></input>
                <label className='login__passwordLabel' htmlFor='password'>Password: </label>
                <input className='login__passwordInput' type="password" id="password"></input>
                <button className='login__button'>Login</button>
            </form>
        </>
    )
}

export default Login;