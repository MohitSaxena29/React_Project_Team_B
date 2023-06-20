import React from "react";
import { ReactDOM } from "react";
import User from "./Create";
import './App.css';
// import {
//     Switch,
//     Route,
// } from "react-router-dom";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./ViewPage";
import Configure from "./Configure";

function App(){
    return(
            // <Switch>
            //     <Route exact path="/" 
            //         component={User} />

            //     <Route exact path="/view" 
            //         component={View} />
            // </Switch>

            <BrowserRouter>

        <Routes>



            <Route path='/' element={<User/>}/>

            <Route path='/view' element={<View/>}/>

            <Route path='/configure' element={<Configure/>}/>

        </Routes>

      </BrowserRouter>
    ) 
}

export default App;
