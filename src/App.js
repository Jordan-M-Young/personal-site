import Navbar from "./Navbar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import CV from "./pages/CV";
import {Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";



function App() {



  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </>
   
  );
}

export default App;
