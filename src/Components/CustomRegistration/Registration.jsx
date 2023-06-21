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

        <div className="container customContainer">

            <br /><br /><br /><br />

            <h2 className="heading">Register</h2>

            {/* <div className="backgroundImg"></div> */}

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

        </div>

    </>

    );




}