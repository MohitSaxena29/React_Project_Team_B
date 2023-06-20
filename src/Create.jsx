import React, { useState } from "react";

// import "../../../node_modules/boot"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

export default function Home() {

  //   const [data, setdata] = useState({});

  const navigate = useNavigate();

 

  const [title, setTitle] = useState("");




  const [description, setDescription] = useState("");




  const [asignee, setAsignee] = useState("");




  const [duedate, setDueDate] = useState("");




  // const navigate = useNavigate();

  //   const handleOnChange = (event, field) => {

  //     // if (field === "file") {

  //     //   setdata({ ...data, [field]: event.target.files[0] });

  //     // } else {

  //     // setdata({ ...data, [field]: event.target.value });

  //   };




  const handleOnSubmit = (event) => {

    event.preventDefault();

    if (title === "") {

      alert("Title is empty");

      return;

    } else if (description === "") {

      alert("Description is empty");

      return;

    } else if (asignee === "") {

      alert("Asignee is empty");

      return;

    } else if (duedate === "") {

      alert("Due Date is empty");

      return;

    }

    // const existingData=JSON.parse(localStorage.getItem('formData'))||[];

    //console.log("1");

    // const updatedData = [...existingData, data];

    // //console.log("2");

    // const updatedDataString=JSON.stringify(updatedData);

    // //console.log("3");

    // localStorage.setItem("formData",updatedDataString);

    // //console.log("4");




    const users = JSON.parse(localStorage.getItem("users")) || [];

    const length = users.length;

    const newUser = {

      id: length.toString(),

      title,

      description,

      asignee,

      duedate,

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    // Clear input fields

    setTitle("");

    setDescription("");

    navigate("/view");

  };




  return (

    <>

      <div className="mt-3">

        <div

          className="bg-image-vertical h-100"

          //   style=

          //     {{backgroundColor: "#efd3e4",

          //     backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fblue-background&psig=AOvVaw0uxzdqcQuPW1_J48QN20QD&ust=1687316360628000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOC2xLTt0P8CFQAAAAAdAAAAABAE')"

          //   }}

        >

          {/* https://mdbootstrap.com/img/Photos/new-templates/search-box/img1.jpg */}

          <div className="mask d-flex align-items-center h-100 text-start">

            <div className="container w-55" >

              <div className="row justify-content-center" >

                <div className="col-12 col-lg-10" >

                  <div className="card" style={{ borderRadius: "1rem" }}>

                    <div className="card-body p-5 cardsstyle" >

                      <h2

                        className="mb-5 text-center"

                        style={{ color: "rgb(94 122 147)" }}

                      >

                        Create Card

                      </h2>

                      <div

                        className="container text-start "

                        style={{ width: "100%" }}

                      >

                        <form

                          style={{ color: "rgb(94 122 147)" }}

                          onSubmit={(e) => {

                            handleOnSubmit(e);

                          }}

                        >

                          <div className="mb-3 ">

                            <label htmlFor="title" className="form-label">

                              Title:

                            </label>

                            <input

                              type="text"

                              className="form-control"

                              id="title"

                              onChange={(e) => setTitle(e.target.value)}

                            />

                          </div>

                          <div className="mb-3">

                            <label

                              htmlFor="exampleFormControlTextarea1"

                              className="form-label"

                            >

                              Description:

                            </label>

                            <textarea

                              className="form-control"

                              id="exampleFormControlTextarea1"

                              rows="3"

                              onChange={(e) => setDescription(e.target.value)}

                            ></textarea>

                          </div>

                          <div className="mb-3 ">

                            <label htmlFor="asignee" className="form-label">

                              Asignee:

                            </label>

                            <input

                              type="text"

                              className="form-control"

                              id="asignee"

                              onChange={(e) => setAsignee(e.target.value)}

                            />

                          </div>

                          <div className="mb-3 ">

                            <label htmlFor="dueDate" className="form-label">

                              Due Date:

                            </label>

                            <input

                              type="date"

                              className="form-control"

                              id="dueDate"

                              onChange={(e) => {

                                setDueDate(e.target.value);

                                // console.log(title);

                              }}

                            />

                          </div>

                          {/* <div className="input-group mb-3">

            <div className="input-group-prepend mb-3">

              <label className="custom-file-label" htmlFor="inputGroupFile01">

                Choose file:

              </label>

              <div className="custom-file">

                <input

                  type="file"

                  className="custom-file-input"

                  id="inputGroupFile01"

                  aria-describedby="inputGroupFileAddon01"

                  onChange={(e) => {

                    handleOnChange(e, "file");

                  }}

                />

              </div>

            </div>

          </div> */}




                          <button type="submit" className="btn btn-primary ">

                            Submit

                          </button>

                        </form>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}