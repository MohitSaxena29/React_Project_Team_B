import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import View from './components/View/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <Home />
              </div>
              
            }
          />
          <Route
            exact
            path="/View"
            element={
              <div className="App">
                <View />
              </div>
              
            }
          />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
