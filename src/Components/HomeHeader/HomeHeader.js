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
              <button className={"header__button"}>
                <a href="/">
                  <h3>Home</h3>
                </a>
              </button>
              <button className={"header__button"}>
                  <h3>Login</h3>
              </button>
              <button className={"header__button"}>
                  <h3>Sign Up</h3>
              </button>
            </div>
          </nav>
        </header>
      );
  }
  
  export default HomeHeader;