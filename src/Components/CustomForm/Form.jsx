import React, { useState } from "react";

import Navbar from "../CustomNavBar/Navbar";

import { useNavigate } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Form.css"; // Import custom CSS file

export default function Form() {
  const navigate = useNavigate();

  const [titles, settitles] = useState("");

  const [description, setDescription] = useState("");

  const [asignee, setAsignee] = useState("");

  const [duedate, setDueDate] = useState("");

  const link = [
    { name: "Create", path: "/create" },

    { name: "View", path: "/view" },

    { name: "Logout", path: "/logout" },
  ];

  const title = " ";

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (titles === "") {
      alert("Title is empty");

      return;
    } else if (description === "") {
      alert("Description is empty");

      return;
    } else if (asignee === "") {
      alert("Assignee is empty");

      return;
    } else if (duedate === "") {
      alert("Due Date is empty");

      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const length = users.length;

    const newUser = {
      id: length.toString(),

      titles,

      description,

      asignee,

      duedate,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    // Clear input fields

    settitles("");

    setDescription("");

    navigate("/view");
  };

  return (
    <>
      <Navbar link={link} title={title}></Navbar>

      <div className="container d-flex justify-content-center">
        <div className="card mx-auto">
          <div className="card-body p-5">
            <h2 className="mb-3 text-center form-title">Add Task</h2>

            <div className="container text-start">
              <form className="custom-form" onSubmit={(e) => handleOnSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="titles">Titles:</label>

                  <input
                    type="text"
                    className="form-control"
                    id="titles"
                    value={titles}
                    onChange={(e) => settitles(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description:
                  </label>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="asignee">Assignee:</label>

                  <input
                    type="text"
                    className="form-control"
                    id="asignee"
                    value={asignee}
                    onChange={(e) => setAsignee(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dueDate">Due Date:</label>

                  <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    value={duedate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
