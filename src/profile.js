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
      profile: [],
      photo_url: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/profile/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ profile: output }));
  }
//   handleAcc = () => {
//     // e.preventDefault();

//     fetch("https://localhost:8000/profile/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ "name": "Bryant", "photo_url": "https://static01.nyt.com/images/2020/02/02/sports/02kobe-essay-lede/merlin_93708212_ff16a83c-391b-4b25-a4d5-77eaf0cbbb20-superJumbo.jpg" }),
//     })
//       .then((response) => response.json())
//       .then((output) => console.log(output));
//   };

handleAcc = () => {
    console.log("here")
    fetch("http://localhost:8000/profile/", {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"name":"bryant", "photo_url":"google.com"}),
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };

  handleClass = (e) => {
    this.setState({
      photo_url: e.target.value,
    });
    console.log(e.target.value);
  };

  handleDelete = (pk) => {
    console.log("here");
    console.log(pk);
    fetch("http://localhost:8000/profile/" + pk, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "bryant", photo_url: "google.com" }),
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };
  handleUpdate = () => {
    console.log("here")
    fetch("http://localhost:8000/profile/5", {
      method: "PUT", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:"Hello", "photo_url":"google.com"}),
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };

  // read
  render() {
    console.log(this.state.profile);
    return (
      <div className="profiles-container">
        <span className="title">Who's watching?</span>
        {this.state.profile ? (
          <div className="profiles">
            {this.state.profile.map((profile, index) => (
              <div
                key={index}
                onClick={(e) => console.log(profile)}
                className="profile"
              >
                <img className="image" src={profile.photo_url} />
                <span className="username">{profile.name}</span>
                <button onClick={() => this.handleDelete(index)}>
                  {" "}
                  Delete{" "}
                </button>
              </div>
            ))}
          </div>
        ) : (
          "loading"
        )}

        <button onClick={() => this.handleAcc()}>manage profile</button>
        <button className="delete" onClick={() => this.handleDelete()}>
          delete profile
        </button>

        <form>
          <label>
            Choose Day
            <input type="text" onChange={this.handleClass} name="name" />
          </label>
          <div>
            <button
              className=""
              label="updateimg"
              onClick={() => this.handleUpdate()}
            >Update Image</button>
          </div>
        </form>
    
        {/* <Button ghost secondary label="MANAGE PROFILES" /> */}
      </div>
    );
  }
}

export default Profile;
