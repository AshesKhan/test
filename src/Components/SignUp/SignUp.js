import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = userData;
    if(firstName && lastName && email && password && confirmPassword ){

   

    const res = fetch(
      "https://reactproject-ab89c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      }
    );
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Data Stored");
      navigate.push("/signin");
    } else {
      alert("plz fill the data");
    }
}
  };

  const [userErr, setUserErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [compErr, setCompErr] = useState(false);

  function SignUpHandle(e) {
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }
  function lastnameHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
  }

  function emailHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }
  function compHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setCompErr(true);
    } else {
      setCompErr(false);
    }
  }

  return (
    <div>
      <div className="signUpForm">
        <h1>Sign Up</h1>
        <form method="POST" onSubmit={SignUpHandle}>
          <div className="inner-wrap">
            <label>
              First Name{" "}
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={postUserData}
                onBlur={userHandler}
              />
              {userErr ? (
                <span className="valid">First Name Not Valid</span>
              ) : (
                ""
              )}
            </label>
            <label>
              Last Name{" "}
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={postUserData}
                onBlur={lastnameHandler}
              />
              {lastNameErr ? (
                <span className="valid">last Name Not Valid</span>
              ) : (
                ""
              )}
            </label>
            <label>
              Email{" "}
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={postUserData}
                onBlur={emailHandler}
              />
              {emailErr ? <span className="valid">email Not Valid</span> : ""}
            </label>
            <label>
              Password{" "}
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={postUserData}
                onBlur={passwordHandler}
              />
              {passErr ? <span className="valid">password Not Valid</span> : ""}
            </label>
            <label>
              Confirm Password{" "}
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={postUserData}
                onBlur={compHandler}
              />
              {compErr ? (
                <span className="valid">password Not Valid or Same</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="button-section">
            <Link to="/login">
              {" "}
              <button
                className="btn"
                type="submit"
                name="Sign Up"
                onClick={submitData}
              >
                SignUp
              </button>
            </Link>
      
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
