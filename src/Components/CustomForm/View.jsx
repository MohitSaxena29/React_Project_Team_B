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

//       // Filter user data based on search query
//       const filteredItems = items.filter(item =>
//         item.titles.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredData(filteredItems);
//     }
//   }, [searchQuery]);

//   const configureRoute = () => {
//     navigate('/configure_new');
//   };

//   const link = [
//     { name: 'Create', path: '/create' },
//     { name: 'View', path: '/view' },
//     { name: 'Logout', path: '/logout' }
//   ];

//   const title = '';

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

//       <div className="text-center" onClick={configureRoute}>
//         <button type="button" className="btn btn-dark">
//           Configuration
//         </button>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import Navbar from '../CustomNavBar/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
export default function View() {
  const [userdata, setUserdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showButton,setShowButton]=new useState(false)
  const navigate = useNavigate();
  const searchFunction = (searchInputValue) => {
    setSearchQuery(searchInputValue);
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('users'));
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
    navigate("/configure_new");
  };
  const link = [
    { name: "Create", path: "/create" },
    { name: "View", path: "/view" },
    { name: "Logout", path: "/logout" },
  ];
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
              </li>
              <li className="list-group-item">Assignee :{value.asignee}</li>
              <li className="list-group-item">Due Date :{value.duedate}</li>
            </ul>
          </div>
        </div>
    ))}

      </div>
      : 
      <>
          <div className="main-container">
              <div className="error">
                <h1>No card Found</h1>
            </div>
          </div>
      </>
      
      
      
      }
     
      <div className="text-center" onClick={configureRoute}>
        <button type="button" className="btn btn-dark">
          Configuration
        </button>
      </div>
    </>
  );
}
