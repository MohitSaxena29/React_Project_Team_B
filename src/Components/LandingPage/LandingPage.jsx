import React from 'react'
import  Navbar  from '../CustomNavBar/Navbar';
function LandingPage() {
 
    const link = [
        { name: "Login", path: "/login" },
    
        { name: "Register", path: "/register" },
      ];
    
      const title = " ";
    
      return (
        <>
          <Navbar link={link} title={title} />
    
        <h1>Landing Page navbar lana h aur login logout k button jo pages h login register k unki routing change krni hogi login k jgha </h1>
    </>
  )
}

export default LandingPage