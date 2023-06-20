import React, { useEffect, useState } from "react";

export default function View() {
    const [newUser,setData]=useState([]);
  useEffect(() => {
     setData(JSON.parse(localStorage.getItem("users"))||[]);

  }, []);
  return (
    <div className="container m-3"> 
      {newUser.length === 0 ? (
        <h2>No Data Found</h2>
      ) : (
        <div>
          {newUser.map((ele) => {
            return (
              <div className="card m-2" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">
                    {ele.description}
                  </p>
                  <h5>Assigned By: {ele.asignee}</h5>
                  <h5>Due Date: {ele.dueDate}</h5>
                  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
