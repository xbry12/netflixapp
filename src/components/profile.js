import React, { Component } from "react";
import "../components/css-files/profile.css";
import "../components/css-files/profile1.css";
// import Icon from '../components/icons/styles/icons'

// const profiles = [
//   {
//     photo_url:
//       "https://m.media-amazon.com/images/I/81aCJakI4DL._AC_SL1500_.jpg",
//     name: "cat",
//   },
//   {
//     photo_url:
//       "https://m.media-amazon.com/images/I/81aCJakI4DL._AC_SL1500_.jpg",
//     name: "person",
//   },
//   {
//     photo_url:
//       "https://m.media-amazon.com/images/I/81aCJakI4DL._AC_SL1500_.jpg",
//     name: "bird",
//   },
//   {
//     photo_url:
//       "https://m.media-amazon.com/images/I/81aCJakI4DL._AC_SL1500_.jpg",
//     name: "dog",
//   },
// ];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      photo_url: "",
      name: "",
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

  handleAcc = () => {
    console.log("here");
    fetch("http://localhost:8000/profile/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Bryant", photo_url: "google.com" }),
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };

  handleClass = (e) => {
    console.log("image");
    this.setState({
      photo_url: e.target.value,
    });
    console.log(e.target.value);
  };
  handleClassName = (e) => {
    console.log("name");
    this.setState({
      name: e.target.value,
    });
    console.log(e.target.value);
  };

  handleDelete = (pk) => {
    console.log("here");
    console.log(pk);
    fetch("http://localhost:8000/profile/" + pk, {
      method: "DELETE",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
    })
      // .then((response) => response.json())
      .then((output) => console.log(output));
  };
  handleUpdate = (id) => {
    console.log("here");
    fetch("http://localhost:8000/profile/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        photo_url: this.state.photo_url,
      }),
    })
      .then((response) => response.json())
      .then((output) => console.log(output));
  };

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

                <img className="image" src={profile.photo_url}/>
                <span className="username">{profile.name}</span>
                <button
                  className="btn"
                  onClick={() => this.handleDelete(profile.id)}
                >
                  {" "}
                  DELETE PROFILE{" "}
                </button>
                <form>
                  <input
                    className="form"
                    type="text"
                    onChange={this.handleClass}
                    name="name"
                  />
                  <label className="image">
                  <i class="fas fa-camera-retro"></i>
                  </label>

                  <input
                    className="form"
                    type="text"
                    onChange={this.handleClassName}
                    name="name"
                  />
                  <label className="name">
                  <i class="fas fa-user-plus"></i>
                  </label>

                  <div>
                    <button
                      className="btn2"
                      label="updateimg"
                      onClick={() => this.handleUpdate(profile.id)}
                    >
                      UPDATE PROFILE
                    </button>
                  </div>
                </form>
              </div>
            ))}
          </div>
        ) : (
          "loading"
        )}

        <button className="btn" onClick={() => this.handleAcc()}>
          ADD PROFILE
        </button>
    
      </div>
    );
  }
}

export default Profile;
