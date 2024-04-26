import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <div className="App wrapper ">
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CheckBox />}></Route>
            </Routes>
          </BrowserRouter> 
        </div>
      </div>
    </div>
  );
}

export default App;
