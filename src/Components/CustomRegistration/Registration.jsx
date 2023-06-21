import React,{useState} from 'react'

import Navbar from '../CustomNavBar/Navbar'

export default function Registration() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [name, setName] = useState("");



    const handleUsernameChange = (e) => {

        setUsername(e.target.value);

    };




    const handlePasswordChange = (e) => {

        setPassword(e.target.value);

    };




    const handleNameChange = (e) => {

        setName(e.target.value);

    };




    // const handleEmailChange = (e) => {

    //   setEmail(e.target.value);

    // };




    // const handleMobileChange = (e) => {

    //   setMobile(e.target.value);

    // };




    const handleRegister = (e) => {

        e.preventDefault();




        // Check if user already exists

        const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

        const existingUser = usersData.find((user) => user.username === username);




        if (existingUser) {

            alert("User already exists. Please login.");

            return;

        }




        // Register new user




        const newUser = {

            username,

            password,

            name,

        };

       

        usersData.push(newUser);

        localStorage.setItem("usersData", JSON.stringify(usersData));

       




        alert("Registration successful. Please login.");

        setUsername("");

        setPassword("");

        setName("");

    };

   

   

    const link = [

        { name: "Login", path: "/login" },

        { name: "Register", path: "/" },

    ]

    const title = "Login/Logout"

    return (<>

        <Navbar link={link} title={title} />

        {/* <div className="container customContainer">


            <h2 className="heading">Register</h2>


            <div className="row">

                <div className="">

                    <form className="formContainer" onSubmit={handleRegister}>

                        <div className="form-group">

                            <label className="form-label">Name:</label>

                            <input

                                type="text"

                                className="form-control"

                                value={name}

                                onChange={handleNameChange}

                                placeholder=""

                            />

                        </div>




                        <div className="form-group">

                            <label className="form-label">Username:</label>

                            <input

                                type="text"

                                className="form-control"

                                value={username}

                                onChange={handleUsernameChange}

                            />

                        </div>

                        <div className="form-group">

                            <label className="form-label">Password:</label>

                            <input

                                type="password"

                                className="form-control"

                                value={password}

                                onChange={handlePasswordChange}

                                placeholder=""

                            />

                        </div>




                        <button type="submit" className="btn btn-primary customButton">

                            Register

                        </button>

                        <br />

                        <br />

                        <p className="notedText">

                            <span className="alreadyUserText">Already a user? </span> <a className="nottedLink" href="/login">Login</a>

                        </p>

                    </form>

                </div>

            </div>

        </div> */}

<section class="gradient-custom" >
  <div class="container py-2">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body text-center">

            <div>

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
              <p class="text-white-50 mb-5">Please enter your details!</p>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeNameX" value={name} onChange={handleNameChange}>Name</label>
                <input type="name" id="typeNameX" class="form-control form-control-lg "/>  
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeEmailX" value={username} onChange={handleUsernameChange} >UserName</label>
                <input type="name" id="typeEmailX" class="form-control form-control-lg"/>
              </div>
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX" value={password} onChange={handlePasswordChange}>Password</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg"/>   
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleRegister}>Register</button>

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