import React,{useEffect, useState} from 'react';

import { useNavigate } from 'react-router-dom';
import '../App.css';

const View=()=>{

    const [items, setItems] = useState([]);

    const navigate=useNavigate();

    useEffect(() => {

        const items = JSON.parse(localStorage.getItem('users'));

        if (items) {

            setItems(items);

        }

    }, []);

    // console.log(items)




    const configureRoute=()=>{

       

        navigate('/configure');

    }

    return(

        <>




            {/* <h1>Hii from View</h1> */}

            {

                items.map((item)=>{

                    return(

                        <div className="card">

                        <div className="card-body">

                            <h5 className="card-title">Title: {item.title} </h5>

                            <h5 className="card-title">Description: {item.description}</h5>

                        </div>

                    </div>

                    )

                })

            }

            <button onClick={configureRoute}>Configure</button>

        </>

    )

}




export default View;