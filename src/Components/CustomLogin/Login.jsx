import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom'

import Navbar from '../CustomNavBar/Navbar';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

 

    const handleUsernameChange = (e) => {

      setUsername(e.target.value);

    };

 

    const handlePasswordChange = (e) => {

      setPassword(e.target.value);

    };

 

    const handleLogin = (e) => {

      e.preventDefault();

 

      // Check if user exists

      const usersData = JSON.parse(localStorage.getItem('usersData')) || [];

      const user = usersData.find((user) => user.username === username);

 

      if (!user) {

        alert('User not found. Please register.');

        return;

      } else if (user.password !== password) {

        alert('Invalid password. Please try again.');

        return;

      } else {

        props.onLogin()

        setTimeout(() => {

          navigate('/create');

        }, 2000);

        //   alert("Login successful!");

      }

      setUsername('');

      setPassword('');

    };

    const link = [

      { name: "Login", path: "/login" },

      { name: "Register", path: "/" },

    ]

    const title="Login/Logout"

 

    return (<>

        <Navbar link={link} title={title} />

      {/* <div className="container customContainer col-md-4">


        <h2 className="heading">Login</h2>

 

         <div className="backgroundImg"></div>

        <form className="formContainer" onSubmit={handleLogin}>

          <div className="form-group">

            <label className="form-label">Username:</label>

            <input

              type="text"

              className="form-control"

              value={username}

              onChange={handleUsernameChange}

              autoComplete="off"

            />

          </div>

          <div className="form-group">

            <label className="form-label">Password:</label>

            <input

              type="password"

              className="form-control"

              value={password}

              onChange={handlePasswordChange}

              autoComplete="off"

            />

          </div>

          <button className="btn btn-primary customButton" type="submit">

            Login

          </button>

          <br />

          <br />

        <p className='notedText'>

          <span className='notUserText'>Not a user?</span> <a className='nottedLink' href="/">Register</a>

        </p>

        </form>

      </div> */}


<section class="vh-100 gradient-custom" >
  <div class="container py-2">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body text-center">

            <div class="mb-2">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="name" id="typeNameX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX" value={username} onChange={handleUsernameChange} autoComplete="off">Name</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX" value={password} onChange={handlePasswordChange} autoComplete="off">Password</label>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleLogin}>Login</button>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a class="text-white-50 fw-bold" className='nottedLink' href="/">Sign Up</a>
              </p>
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