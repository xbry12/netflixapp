import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
// import logo from "./images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png";
import logo from "../images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png";
// import avatar from "./images/profile.png";
import avatar from "../images/profile.png"
import "../components/css-files/Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    // have code run once, when the navbar component loads

    useEffect(() => {
        // when you are 100pixels down from the Y axis, the conditional renders
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to = "/home">
      <img className="nav__logo" src={logo} alt="Netflix logo"  />
      </Link>
      <Link to ="profile">
      <img className="nav__avatar" src={avatar} alt="Netflix Avatar" />
      </Link>
      {/* <nav>
        <ul>
          <li>
      <Link to ="/" className="home">Home</Link>
      </li>
      <li>
      <Link to ="/" className="shows">Tv Shows</Link>
      </li>
      <li>
      <Link to ="/" className="movies">Movies</Link>
      </li>
      <li>
      <Link to ="/" className="mylist">My List</Link>
      </li>
      </ul>
      </nav> */}
    </div>
  );
}

export default Nav;

