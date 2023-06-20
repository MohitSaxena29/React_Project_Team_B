import React from "react";

import {NavLink} from 'react-router-dom';

const Header=()=>{

    return(

        <>

            <nav>

                <h3><a href="#">Configuration Board</a></h3>

                <ul>

                    <li><NavLink to='/'>Home</NavLink></li>

                    <li><NavLink to='/user'>User</NavLink></li>

                    <li><NavLink to='/view'>View</NavLink></li>

                </ul>

            </nav>

        </>

    )

}




export default Header;