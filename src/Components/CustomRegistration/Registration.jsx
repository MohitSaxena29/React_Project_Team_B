import React, { useState } from "react";
import Navbar from "../CustomNavBar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [nameError, setNameError] = useState("");

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError("");

    if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setUsernameError("Username should contain only letters and numbers");
    } else if (value.length < 5) {
      setUsernameError("Username should be atleast 5 characters long");
    } else if (value.length > 20) {
      setUsernameError("Username should not exceed 20 characters");
    }
  };

  const handlePasswordChange = (e) => {

    const value = e.target.value;

    setPassword(value);

    setPasswordError("");

    if (value.length < 5) {
      setPasswordError("Password should be atleast 5 characters long");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);

    setNameError("");

    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setNameError("Name should contain only letters and spaces");
    } else if (value.length < 3) {
      setNameError("Name should be atleast 3 characters long");
    } else if (value.length > 30) {
      setNameError("Name should not exceed 30 characters");
    }
  };

  const handleRegister = (e) => {

    if (nameError || usernameError || passwordError) {
      return;
    }

    // Check if user already exists

    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    const existingUser = usersData.find((user) => user.username === username);

    if (existingUser) {
      alert("User already exists. Please login.");
      navigate("/login");

      return;
    }

    const newUser = {
      username: username,

      password: password,

      name: name,
    };

    usersData.push(newUser);

    localStorage.setItem("usersData", JSON.stringify(usersData));

    console.log(username);
    console.log(password);

    alert("Registration successful. Please login.");

    setUsername("");

    setPassword("");

    setName("");
    navigate("/");
  };

  const link = [
    { name: "Login", path: "/" },

    { name: "Register", path: "/register" },
  ];

  const title = " ";

  return (
    <>
      <Navbar link={link} title={title} />

      <section class="gradient-custom">
        <div class="container py-2">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white">
                <div class="card-body text-center">
                  <div>
                    <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                    <p class="text-white-50 mb-5">Please enter your details!</p>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" htmlFor="typeNameX">
                        Name
                      </label>
                      <input
                        type="name"
                        id="typeNameX"
                        class="form-control form-control-lg "
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter Name*"
                      />
                      {nameError && (
                        <div className="error  text-danger">*{nameError}</div>
                      )}
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" htmlFor="typeEmailX">
                        UserName
                      </label>
                      <input
                        type="name"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter User Name*"
                      />
                      {usernameError && (
                        <div className="error  text-danger">
                          *{usernameError}
                        </div>
                      )}
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter Password*"
                      />
                      {passwordError && (
                        <div className="error  text-danger">
                          *{passwordError}
                        </div>
                      )}
                    </div>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                    <div>
                      <p class="mb-0">
                        Already a user ?{" "}
                        <a
                          class="text-white-50 fw-bold"
                          className="nottedLink"
                          href="/"
                        >
                          LogIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
