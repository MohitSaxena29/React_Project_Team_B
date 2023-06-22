// import React,{useState} from 'react'
// import Navbar from '../CustomNavBar/Navbar'
// import { useNavigate } from "react-router-dom";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// export default function Form() {
//   const navigate = useNavigate();
//   const [titles, settitles] = useState("");
//   const [description, setDescription] = useState("");
//   const [asignee, setAsignee] = useState("");
//   const [duedate, setDueDate] = useState("");
//   const link = [
//     { name: "Create", path: "/create" },
//     { name: "View", path: "/view" },
//     { name: "Logout", path: "/logout" }
//   ];

//   const title = " "
//   const handleOnSubmit = (event) => {

//     event.preventDefault();

//     if (titles === "") {

//       alert("title is empty");

//       return;

//     } else if (description === "") {

//       alert("Description is empty");

//       return;

//     } else if (asignee === "") {

//       alert("Asignee is empty");

//       return;

//     } else if (duedate === "") {

//       alert("Due Date is empty");

//       return;

//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const length = users.length;

//     const newUser = {

//       id: length.toString(),

//       titles,

//       description,

//       asignee,

//       duedate,

//     };

//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));

//     // Clear input fields

//     settitles("");

//     setDescription("");

//     navigate("/view");

//   };


//   return (



// <>
// <Navbar link={link} title={title} ></Navbar>

// <div className="m-0">

//   <div

//     className="bg-image-vertical h-100"


//   >



//     <div className="mask d-flex align-items-center h-100">

//       <div className="container w-55">

//         <div className="row justify-content-center">

//           <div className="col-12 col-lg-10">

//             <div className="card" style={{ borderRadius: "1rem" }}>

//               <div className="card-body p-5">

//                 <h2

//                   className="mb-5 text-center"

//                   style={{ color: "rgb(94 122 147)" }}

//                 >


//                 </h2>

//                 <div

//                   className="container text-start "

//                   style={{ width: "100%" }}

//                 >

//                   <form

//                     style={{ color: "rgb(94 122 147)" }}

//                     onSubmit={(e) => {

//                       handleOnSubmit(e);

//                     }}

//                   >

//                     <div className="mb-3 ">

//                       <label htmlFor="titles" className="form-label">

//                         Titles:

//                       </label>

//                       <input

//                         type="text"

//                         className="form-control"

//                         id="titles"

//                         onChange={(e) => settitles(e.target.value)}

//                       />

//                     </div>

//                     <div className="mb-3">

//                       <label

//                         htmlFor="exampleFormControlTextarea1"

//                         className="form-label"

//                       >

//                         Description:

//                       </label>

//                       <textarea

//                         className="form-control"

//                         id="exampleFormControlTextarea1"

//                         rows="3"

//                         onChange={(e) => setDescription(e.target.value)}

//                       ></textarea>

//                     </div>

//                     <div className="mb-3 ">

//                       <label htmlFor="asignee" className="form-label">

//                         Asignee:

//                       </label>

//                       <input

//                         type="text"

//                         className="form-control"

//                         id="asignee"

//                         onChange={(e) => setAsignee(e.target.value)}

//                       />

//                     </div>

//                     <div className="mb-3 ">

//                       <label htmlFor="dueDate" className="form-label">

//                         Due Date:

//                       </label>

//                       <input

//                         type="date"

//                         className="form-control"

//                         id="dueDate"

//                         onChange={(e) => {

//                           setDueDate(e.target.value);

//                           // console.log(titles);

//                         }}

//                       />

//                     </div>

//                     {/* <div className="input-group mb-3">

//       <div className="input-group-prepend mb-3">

//         <label className="custom-file-label" htmlFor="inputGroupFile01">

//           Choose file:

//         </label>

//         <div className="custom-file">

//           <input

//             type="file"

//             className="custom-file-input"

//             id="inputGroupFile01"

//             aria-describedby="inputGroupFileAddon01"

//             onChange={(e) => {

//               handleOnChange(e, "file");

//             }}

//           />

//         </div>

//       </div>

//     </div> */}




//                     <button type="submit" className="btn btn-primary ">

//                       Submit

//                     </button>

//                   </form>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   </div>

// </div>

// </>

     

//   )

// }











import React, { useState } from 'react';

import Navbar from '../CustomNavBar/Navbar';

import { useNavigate } from "react-router-dom";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Form.css'; // Import custom CSS file




export default function Form() {

  const navigate = useNavigate();

  const [titles, settitles] = useState("");

  const [description, setDescription] = useState("");

  const [asignee, setAsignee] = useState("");

  const [duedate, setDueDate] = useState("");

  const link = [

    { name: "Create", path: "/create" },

    { name: "View", path: "/view" },

    { name: "Logout", path: "/logout" }

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

                  <label htmlFor="exampleFormControlTextarea1">Description:</label>

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