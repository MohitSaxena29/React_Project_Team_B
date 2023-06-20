import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

const Drag=()=>{
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [allEntry, setallEntry] = useState([]);
    // const navigate=useNavigate();
    const addData=(e)=>{
        e.preventDefault();
        const newEntry={title:title , description: description};
        // console.log(newEntry);
        {{(title.trim() !== '' && description.trim() !== '')?setallEntry([...allEntry,newEntry]):alert('Please Enter Data')}}
        // console.log(allEntry);
        // console.log('1')
        // {{(title.trim() !== '' && description.trim() !== '')?navigate('/view',{state:{title:title,description:description}}):navigate('/view',{state:{title:'please enter data in form',description:'please enter data in form'}});}}
        // navigate('/view',{state:{allEntry:allEntry}});
    }

    
    return(
        <>
            <form id="loginForm" class="mb-1 mx-auto col-10 col-md-8 col-lg-6" onSubmit={addData}>
                <div class="col-md-4">
                    <div class="mb-2">
                        <label>Title</label>
                        <input type="text" name="title" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title *"/>
                    </div>
                    <div class="mb-2">
                        <label>Description</label>
                        <textarea class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} rows="3"></textarea>
                    </div>
                </div>
                <button class="previewbutton">Preview</button>
            </form>
            {
                allEntry.map((ele,index)=>{
                            return(
                                <div className="card" key={index}>
                                    <div className="card-body">
                                        <h5 className="card-title">Title: {ele.title}</h5>
                                        <h5 className="card-title">Description: {ele.description}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <h5 className="card-title">Title: {data.title}</h5>
                    <h5 className="card-title">Description: {data.description}</h5> */}
                    {/* <p className="card-text">Description: {location.state.description}</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                
            {/* </div> */}

        </>
    )
}

export default Drag;