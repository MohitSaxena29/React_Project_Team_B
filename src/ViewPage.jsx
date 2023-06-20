import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import { useNavigate } from 'react-router-dom';
const View = () => {
    const [userdata, setUserdata] = useState([]);
    const navigate = useNavigate();
    useEffect(
        () => {
            // userdata = JSON.parse(localStorage.getItem("users"))
            const items = JSON.parse(localStorage.getItem("users"));
            if (items)
                setUserdata(items);
        }, []

    )

    const configureRoute = () => {
        navigate('/configure');
    }
    return (
        <>
            {userdata.map((value) => (
                   <div className="card attire" style={{width: "18rem"}}>
                   <div className="card-body cards">
                   <ul class="list-group list-group-flush" style={{backgroundColor:"#EDEADE "}}>
                            <li class="list-group-item"><h6>Title        :</h6>{value.title}</li>
                             <li class="list-group-item"><h6>Description :</h6>{value.description}</li>
                             <li class="list-group-item"><h6>Asignee     :</h6>{value.asignee}</li>
                             <li class="list-group-item"><h6>DueData     :</h6>{value.duedate}</li>
                     </ul>
                   </div>
                 </div>
            ))}
            <div className="text-center" onClick={configureRoute}>
                <button type="button" className="btn btn-dark">Centered button</button>
            </div>
        </>)
}
export default View;