import "./HomeHeader.scss";
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <header className="header">
          <nav className="header__navbar">
              <Link to="/"> 
                <h1 className="header__name">Healthy Living</h1>
              </Link>
            <div className="header__routes">
            <Link to="/"> 
              <button className={"header__button"}>Home</button>
            </Link>  
              <Link to={"/login"}>
                <button className={"header__button"}>Login</button>
              </Link>
              <Link to={"/SignUp"}>
                <button className={"header__button"}>Sign Up</button>
              </Link>
            </div>
          </nav>
        </header>
      );
  }
  
  export default HomeHeader;