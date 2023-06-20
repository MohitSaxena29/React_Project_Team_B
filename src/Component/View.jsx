// import React,{useEffect, useState} from 'react';
// import {useLocation} from 'react-router-dom'
// const View=()=>{
//     const location=useLocation();
//     console.log(location.state);
//     const [allEntry, setallEntry] = useState([]);
//     const data=location.state;
//     // console.log(data.count);
//     // let newEntry=[];
//     useEffect(()=>{
//         const users = JSON.parse(localStorage.getItem('users')) || [];
//        console.log(users);
//     },[]);

//     // useEffect(() => {
//     //     const newEntry={id:location.state.id,title:location.state.title , description: location.state.description};
//     //     setallEntry([...allEntry,newEntry]);
//     //     console.log(allEntry);
//     //   }, [allEntry]);
//     //     console.log(allEntry);

//     // console.log(location.state.title);
//         // const  newEntry={title:location.state.title , description: location.state.description};
//         // setallEntry([...allEntry,newEntry]);
//         // console.log(allEntry)
//     // if(location.state!==null){
//     // const  newEntry={title:location.state.title , description: location.state.description};
//     // setallEntry([...allEntry,newEntry]);
//     // console.log(newEntry)
    
//     // const getData=()=>{
//     //     const  newEntry={title:location.state.title , description: location.state.description};
//     //     setallEntry([...allEntry,newEntry]);
//     //     console.log(newEntry);
//     //     console.log('hiiii')
//     // }
//     if(data?.title && data?.description){
//         // if(data.count===0)
//         // {
//         //     const  newEntry={title:location.state.title , description: location.state.description};
//         //     setallEntry([...allEntry,newEntry]);
//         //     console.log(allEntry);
//         // }
//         // data.count=1;
//         // console.log()
//     return(
//         <>

//             <h1>Hii from View</h1>
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">Title: {data.title}</h5>
//                     <h5 className="card-title">Description: {data.description}</h5>
//                     {/* <p className="card-text">Description: {location.state.description}</p> */}
//                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//                 </div>
//             </div>

//         </>
//     )
// }
// else{
//     // return(
//     //     <>

//     //         <h1>Hii from View</h1>
//     //         <div className="card">
//     //             <div className="card-body">
//     //                 <h5 className="card-title">Title: {data.title}</h5>
//     //                 <h5 className="card-title">Description: {data.description}</h5>
//     //                 {/* <p className="card-text">Description: {location.state.description}</p> */}
//     //                 {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//     //             </div>
//     //         </div>

//     //     </>
//     // )


// }
// }

// export default View;


import React, { useState, useEffect } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../App.css';




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

                     {/* <h5 className="card-title"> Title :{value.title}</h5>

                     <h5 className="card-title"> Description :{value.description}</h5>

                     <h5 className="card-title">Asignee:{value.asignee}</h5>

                     <h5 className="card-title">Due Date:{value.duedate}</h5> */}

                   </div>

                 </div>

            ))}

            <div className="text-center" onClick={configureRoute}>

                <button type="button" className="btn btn-dark">Centered button</button>

            </div>

        </>)

}

export default View;