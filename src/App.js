// import './App.css';
import "./main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";
import Soon from "./pages/Soon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/movie" element={<Soon/>}/>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
