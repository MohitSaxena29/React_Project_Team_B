import Form from './Components/CustomForm/Form';
import View from './Components/CustomForm/View';
import './App.css';
import { useState } from 'react';
import Login from './Components/CustomLogin/Login';
import Registration from './Components/CustomRegistration/Registration';
import Error from './Components/Error';
import LoginRequired from './Components/LoginRequired'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Logout from './Components/Logout';
import Configure from './Components/DragAndDrop/Configure';
import New from './Components/DragAndDrop/New';
import LandingPage from './Components/LandingPage/LandingPage';
function App() {

  const [isLogin,setIsLogin]=useState(false)

  const handleLogIn=()=>{
     setIsLogin(true)
  }

  const handleLogOut=()=>{
    setIsLogin(false)
  }

  return (

    <div>
      <BrowserRouter>
        <Routes>

         
        <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />

          <Route path="/login" element={<Login onLogin={handleLogIn} />} />

          {isLogin?(<>
            <Route path="/create" element={<Form />} />
            <Route path="/view" element={<View/>} />
            <Route path="/configure" element={<Configure/>}/>
            <Route path="/configure_new" element={<New/>}/>
          </>):(
          <>
          <Route path="/create" element={<LoginRequired />} />
           <Route path="/view" element={<LoginRequired/>} />
          </>)}
          <Route path="/logout" element={<Logout onLogOut={handleLogOut} />}/>
           <Route path="*" element={<Error/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;