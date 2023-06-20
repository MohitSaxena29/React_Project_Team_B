import React, {useState} from "react";
const Formview=() =>{

    const[name,setName] = useState("")
    const [title,settitle] = useState([]);
    const[description,setdescription] = useState("")
    const [describe,setdescribe] = useState([]);
    const[asignee,setAsignee] = useState("")
    const [assignment,setAsignment] = useState([]);
    

    const inputEvent=(event)=>{
        setName(event.target.value);
        
    };
     const inputEvent2=(event)=>{
        setdescription(event.target.value);
     };
     const inputEvent3=(event)=>{
        setAsignee(event.target.value);
     };


    const onSubmit=()=>{
        settitle([...title,name]);
        setdescribe([...describe,description]);
        setAsignment([...assignment,asignee])
        setName("")
        setdescription("")
        setAsignee("")
        

    };

    return(
    <>
        {/* Task1 */}
    <div className="title">
    <input type="text"
     placeholder="Enter Name" 
    onChange={inputEvent}
    value={name}/>
    </div>
{/* Task2 */}
    <div className="descriptio">
    <input type="text"
     placeholder="Enter Description" 
    onChange={inputEvent2}
    value={description}/>
    </div>
{/* Task 3   */}
    <div className="asignee">
   
    <input type="text"
     placeholder="EnterAssignee" 
    onChange={inputEvent3}
    value={asignee}/>
    </div>
    <button onClick={onSubmit} >Submit</button>
    <br/>
    {/* <h1>{title}</h1>
    <h1> {describe}</h1>
    <h1> {assignment}</h1> */}
    <div className="card" >
  <div className="card-body">
    {console.log(title)}
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{describe}</h6>
    <p className="card-text">{assignment}</p>
    <a href="#" className="card-link">Card link</a>
  </div>
</div>
    </>
   
    )
   
}
export default Formview;