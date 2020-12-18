// import React from "react";
import React, { Component } from "react";

import "./profile.css";

// import profiles from "../../data/profiles/profiles.json";

// import Button from "../../components/button/Button";

// interface Props {
//   onProfileClick: Function;
// }

const profiles = [
  {
    image_src: "./images/profiles/profile_2.png",
    username: "cat",
  },
  {
    image_src: "./images/profiles/profile_1.png",
    username: "person",
  },
  {
    image_src: "./images/profiles/profile_1.png",
    username: "bird",
  },
  {
    image_src:
      "https://m.media-amazon.com/images/I/81aCJakI4DL._AC_SL1500_.jpg",
    username: "dog",
  },
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles
    };
  }

//   component did mount 

  handleDelete = () => {
    fetch("http://localhost:8000/profile/", {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin":"*"
      },
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };
//   this.setState({profile: output })

  render() {
    return (
      <div className="profiles-container">
        <span className="title">Who's watching?</span>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <div
              key={index}
              onClick={(e) => console.log(profile)}
              className="profile"
            >
              <img className="image" src={profile.image_src} />
              <span className="username">{profile.username}</span>
            </div>
          ))}
        </div>
        <button>manage profile</button>
        <button className="delete" onClick={() => this.handleDelete()}>
          delete profile
        </button>

        {/* <Button ghost secondary label="MANAGE PROFILES" /> */}
      </div>
    );
  }
}

export default Profile;
