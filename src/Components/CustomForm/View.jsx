// import React, { useState, useEffect } from 'react';
// import Navbar from '../CustomNavBar/Navbar';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
// import { useNavigate } from 'react-router-dom';

// export default function View() {
//   const [userdata, setUserdata] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   const navigate = useNavigate();
//   const searchFunction = (searchInputValue) => {
//     setSearchQuery(searchInputValue);
//   }
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('users'));

//     if (items) {
//       setUserdata(items);

<<<<<<< HEAD
//       // Filter user data based on search query
//       const filteredItems = items.filter(item =>
//         item.titles.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredData(filteredItems);
//     }
//   }, [searchQuery]);
=======
//       () => {

//           // userdata = JSON.parse(localStorage.getItem("users"))

//           const items = JSON.parse(localStorage.getItem("users"));

//           if (items)

//               setUserdata(items);

//       }, []

//   )
>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22

//   const configureRoute = () => {
//     navigate('/configure_new');
//   };

<<<<<<< HEAD
//   const link = [
//     { name: 'Create', path: '/create' },
//     { name: 'View', path: '/view' },
//     { name: 'Logout', path: '/logout' }
//   ];

//   const title = '';
=======
//     navigate('/configure');

// }

// const link = [

//   { name: "Create", path: "/create" },

//   { name: "View", path: "/view" },

//   { name: "Logout", path: "/logout" }

// ];

//   const title = "Create/View"
>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22

//   return (
//     <>
//       <Navbar link={link} title={title} />
//       <div>
//       <input
//         type="text" className='searchfunction'
//         value={searchQuery}
//         onChange={event => setSearchQuery(event.target.value)}
//         placeholder="Search by title"
        
//       />

//       </div>

<<<<<<< HEAD


//       {filteredData.map(value => (
//         <div className="card attire" style={{ width: '18rem' }} key={value.id}>
//           <div className="card-body cards">
//             <ul className="list-group list-group-flush" style={{ backgroundColor: '#EDEADE ' }}>
//               <li className="list-group-item">
//                 Title :
//                  {value.titles}
//               </li>
//               <li className="list-group-item">
//                 Description :
//                  {value.description}
//               </li>
//               <li className="list-group-item">
//                 Assignee :
//                  {value.asignee}
//               </li>
//               <li className="list-group-item">
//                 Due Date :
//                  {value.duedate}
//               </li>
//             </ul>
//           </div>
//         </div>
//       ))}
=======
// <>
// <Navbar link={link} title={title} ></Navbar>
// {userdata.map((value) => (

//        <div className="card attire" style={{width: "18rem"}}>

//        <div className="card-body cards">

//        <ul class="list-group list-group-flush" style={{backgroundColor:"#EDEADE "}}>

//                 <li class="list-group-item"><h6>Title        :</h6>{value.titles}</li>

//                  <li class="list-group-item"><h6>Description :</h6>{value.description}</li>

//                  <li class="list-group-item"><h6>Asignee     :</h6>{value.asignee}</li>

//                  <li class="list-group-item"><h6>DueDate     :</h6>{value.duedate}</li>

//          </ul>

//        </div>

//      </div>

// ))}

// <div className="text-center" onClick={configureRoute}>

//     <button type="button" className="btn btn-dark">Configuration</button>

// </div>

// </>

//   )
>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22

//       <div className="text-center" onClick={configureRoute}>
//         <button type="button" className="btn btn-dark">
//           Configuration
//         </button>
//       </div>
//     </>
//   );
// }
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Navbar from '../CustomNavBar/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
=======

import React, { useState, useEffect } from "react";
import Navbar from "../CustomNavBar/Navbar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";

>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22
export default function View() {
  const [userdata, setUserdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const searchFunction = (searchInputValue) => {
    setSearchQuery(searchInputValue);
  }
  useEffect(() => {
<<<<<<< HEAD
    const items = JSON.parse(localStorage.getItem('users'));
=======
    const items = JSON.parse(localStorage.getItem("users"));

>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22
    if (items) {
      setUserdata(items);
      // Filter user data based on search query
      const filteredItems = items.filter((item) =>
        item.titles.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredItems);
    }
  }, [searchQuery]);
  const configureRoute = () => {
<<<<<<< HEAD
    navigate('/configure');
=======
    navigate("/configure_new");
>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22
  };
  const link = [
    { name: "Create", path: "/create" },
    { name: "View", path: "/view" },
    { name: "Logout", path: "/logout" },
  ];
<<<<<<< HEAD
  const navWithSearch = true;
  const title = ' ';
  return (
    <>
      {/* <Navbar link={link} title={title} searchData={searchQuery} /> */}
      <Navbar link={link} title={title} navWithSearch={navWithSearch} searchFunction={searchFunction}/>
      {/* <div className='searchfunction'>
      <input
        type="text" 
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        placeholder="Search by title"
      />
      </div> */}


  
     {filteredData.length !==0 ?
      <div className='view-container'>
      {filteredData.map(value => (
        <div className="card viewcard " style={{ width: '18rem' }} key={value.id}>
          <div className="card-body cards ">
            <ul className="list-group list-group-flush" style={{ backgroundColor: '#EDEADE ' }}>
              <li className="list-group-item">
                <h6>Title:</h6>
                {value.titles}
              </li>
              <li className="list-group-item">
                <h6>Description:</h6>
                {value.description}
              </li>
              <li className="list-group-item">
                <h6>Assignee:</h6>
                {value.asignee}
              </li>
              <li className="list-group-item">
                <h6>Due Date:</h6>
                {value.duedate}
=======

  const title = "";

  return (
    <>
      <Navbar link={link} title={title} />
      <div>
        <input
          type="text"
          className="searchfunction"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by title"
        />
      </div>

      {filteredData.map((value) => (
        <div className="card attire" style={{ width: "18rem" }} key={value.id}>
          <div className="card-body cards">
            <ul
              className="list-group list-group-flush"
              style={{ backgroundColor: "#EDEADE " }}
            >
              <li className="list-group-item">Title :{value.titles}</li>
              <li className="list-group-item">
                Description :{value.description}
>>>>>>> e30e8c08daf5049b76afef6bdc290cc2885e2a22
              </li>
              <li className="list-group-item">Assignee :{value.asignee}</li>
              <li className="list-group-item">Due Date :{value.duedate}</li>
            </ul>
          </div>
        </div>
    ))}

      </div>
      : <p className='nocard'>No Card Found</p>}
     
      <div className="text-center" onClick={configureRoute}>
        <button type="button" className="btn btn-dark">
          Configuration
        </button>
      </div>
    </>
  );
}
