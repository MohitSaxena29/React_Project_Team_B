import React from 'react';

import Header from './NavBar/Header';

import { Outlet } from 'react-router-dom';




const Home=()=>{

    return(

        <>

        <Header/>

        <Outlet/>

        </>

    )

}




export default Home;