import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";

import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Member from "./pages/Member";
import Program from "./pages/Program";
import Recruiting from "./pages/Recruiting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/member" element={<Member />} />
          <Route path="/program" element={<Program />} />
          <Route path="/recruiting" element={<Recruiting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
