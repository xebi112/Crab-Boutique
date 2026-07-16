import { Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/Home";
import Menu from "./COMPONENTS/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
