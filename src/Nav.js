import React, {useState, useEffect} from "react";
// import { Link } from 'react-router-dom'
import logo from "./images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png";
import avatar from "./images/profile.png";
import "./Nav.css";

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
      <img className="nav__logo" src={logo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="Netflix Avatar" />

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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/Screen Shot 2020-11-16 at 4.13.15 PM.png";
// import "./nav.css";

// function Nav(props) {
//   const [open, setOpen] = useState(false);
  // open is the variable
  // set open is the function
//   return (
//     <div>
//       <nav>
//         <div className="logo">
//           <Link to="/group-project-repo/" className="link">
//             <div className="title">BodyWorks</div>
//             <img src={logo} />
//           </Link>
//         </div>

//         <ul
//           className="nav-links"
//           // burger transform for responsiveness`
//           style={{ transform: open ? "translateX(0px)" : "" }}
//         >
//           <li>
//             <Link to="/Classes/Instructors" className="link">
//               Instructors
//             </Link>
//           </li>
//           <li>
//             <Link to="/Classes" className="link">
//               Classes
//             </Link>
//           </li>
//           <li>
//             <Link to="/Classes/Booking" className="link">
//               Bookings
//             </Link>
//           </li>
//         </ul>
//         <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
//       </nav>
//     </div>
//   );
// }

// export default Nav;
