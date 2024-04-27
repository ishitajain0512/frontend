import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckBox from "./components/CheckBox";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App wrapper ">
        <div className="content">
          <BrowserRouter>
           <Nav />
            <Routes>
              <Route path="/" element={<CheckBox />}></Route>
            </Routes>
            <Footer/>
          </BrowserRouter> 
        </div>
      </div>
    </div>
  );
}

export default App;
