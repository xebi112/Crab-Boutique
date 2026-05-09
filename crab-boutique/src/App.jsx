import { Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 
         When you build your Menu or About pages, 
         you just add them as new Routes here! 
      */}
    </Routes>
  );
}

export default App;
