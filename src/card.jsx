// import React from "react";
// // import { ReactDOM } from "react-dom";
// function Card() {
//     return (
//         <>
//             <div className="card">
//                 <div className="container">
//                     <img src="" alt="mypic" className="card_img" />
//                     <div className="card_info" >
//                     <span className="card_category"> A Netflix Original </span>
//                     <h3 className="card_title">DARK</h3>
//                     <button>Watch Now</button>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default Card
class UncontrolledForm extends React.Component {
    constructor() {
      this.nameInput = React.createRef();
    }
  
    submitFormHandler = (event) => {
      event.preventDefault();
      console.log(this.nameInput.current.value);
    };
  
    render() {
      return (
        <form onSubmit={this.submitFormHandler}>
          <div>
            <input type="text" name="name" ref={this.nameInput} />
          </div>
        </form>
      );
    }
  }
  