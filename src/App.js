import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import View from './Component/View';
import User from './Component/User';
import Error from './Component/Error';
import Configure from './Component/Configure';
// import Drag from './Drag';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/user' element={<User/>}/>
            <Route path='/view' element={<View/>}/>
            <Route path='/configure' element={<Configure/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Drag/> */}
    </>
  );
}
export default App;
