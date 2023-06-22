

import React from "react";
import Navbar from "../CustomNavBar/Navbar";
import "./LandingPage.css";

function LandingPage() {
  const link = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const title = " ";

  return (
    <>
      <Navbar link={link} title={title} />
      <div className="d-flex mt-5 justify-content-center align-items-center landing-page-container">
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5 className="card-title">Hi there, users!</h5>
            <h6 className="card-subtitle mb-2 text-muted">Welcome to the Configurable Board</h6>
            <p className="card-text">
              <ul>
                <h3>
                  Our configurable board provides various functionalities that encompass all the task management activities:
                </h3>
                <li>Login/Register</li>
                <li>Task Creation</li>
                <li>CRUD Operations</li>
                <li>Friendly Interface</li>
                <li>Reordering Tasks</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="bgImage"></div>
    </>
  );
}

export default LandingPage;
