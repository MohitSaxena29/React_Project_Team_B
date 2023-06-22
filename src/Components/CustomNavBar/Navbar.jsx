// import React from 'react'

// import { Link } from 'react-router-dom';

// export default function Navbar(props) {

//     return (

//         <div>

//           <nav className="nav">

//             <div className="container">

//               <div className="logo">

//                 <h2 className="navbarTitle">{props.title}</h2>

//               </div>

//               <div id="mainListDiv" className="main_list">

//                 <div className="navlinks">

//                   {props.link && props.link.map((link, index) => (

//                     <div key={index}>

//                         <Link to={link.path}>{link.name}</Link>

//                     </div>

//                   ))}

//                 </div>        

//               </div>

//             </div>

//           </nav>

//         </div>

//       );

// }

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

// import "./App.css"

function NavScrollExample(props) {

  return (

    <Navbar expand="lg" className="bg-body-tertiary ">

      <Container fluid>

        <Navbar.Brand href="#">Configuration Board</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className='navbarScroll'/>

        <Navbar.Collapse id="navbarScroll">

          <Nav

            className="me-auto my-2 my-lg-0"

            style={{ maxHeight: '100px' }}

            navbarScroll

          >

            <Nav.Link >{props.title}</Nav.Link>

            <div className="navlinks ">

               {props.link && props.link.map((link, index) => (

                    <div key={index} className='navlabels'>
                        <span><Link to={link.path + "   "}>{link.name}</Link></span>
                        

                     </div>

                   ))}

                 </div>  

          </Nav>

         

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

}




export default NavScrollExample;