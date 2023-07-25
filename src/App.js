import "./App.css";
import "./styles/Activity.css";
import "./styles/Home.css";
import "./styles/Member.css";
import "./styles/Program.css";
import "./styles/Recruiting.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Member from "./pages/Member";
import Program from "./pages/Program";
import Recruiting from "./pages/Recruiting";
import Beginner from "./pages/Program_Beginner";
import Challenger from "./pages/Program_Challenger";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/member" element={<Member />} />
            <Route path="/program" element={<Program />} />
            <Route path="/recruiting" element={<Recruiting />} />
            <Route path="/program/beginner" element={<Beginner />} />
            <Route path="/program/challenger" element={<Challenger />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
