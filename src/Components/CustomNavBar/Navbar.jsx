import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavScrollExample(props) {
  const handleSearchOnchange=(e)=>{
    props.searchFunction(e.target.value)
   }
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
                 {props.navWithSearch ? (<>
                  <div>
                  <input type="text" name="Search Bar" id="" onChange={handleSearchOnchange}/>
                  </div>
                 </>):("")}
                 </div>  
          </Nav>   
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default NavScrollExample;