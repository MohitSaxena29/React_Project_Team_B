//  const Sdata=[
// {
//     sname: "DARK",
//     imgsrc: "https://flxt.tmsimg.com/assets/p14652182_b_v13_ac.jpg" alt="mypic",
//     title : "Netflix original series",
    
// },
// {
//     sname: "DARK",
//     imgsrc: "https://flxt.tmsimg.com/assets/p14652182_b_v13_ac.jpg",
//     title : "Netflix original series"
// },
// {
//     sname: "DARK",
//     imgsrc: "https://flxt.tmsimg.com/assets/p14652182_b_v13_ac.jpg",
//     title : "Netflix original series" 
// },
// {
//     sname: "DARK",
//     imgsrc: "https://flxt.tmsimg.com/assets/p14652182_b_v13_ac.jpg",
//     title : "Netflix original series"
// },
//  ];
// export default Sdata;
import React,{useRef, useState} from "react";
const Viewform= () =>{
    const fetchname = useRef(null)
    const [show,setshow] =useState(false);
    // const showname =fetchname.current.value;

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(fetchname.current?.value);
        const sname = fetchname.current.value;
        // sname === " " ? alert("Plz") : setshow(true);
        // const sname= fetchname.current.value;
    }

    return(
        <>
        <div>
            <form action="" onSubmit={formSubmit}>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" id="fetchname" ref= { fetchname } />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <p> {`The name is : ${fetchname.current?.value}`}</p>
        </div>
        </>
    )
}
export default Viewform



