import { useNavigate } from "react-router-dom";
import logo from "..//assets/ecops_logo.png";

const MyHeader = () => {
  const navigate = useNavigate();

  const clickLogo = () => {
    navigate("/", { replace: true });
  };
  const clickProgram = () => {
    navigate("/program", { replace: true });
  };
  const clickMember = () => {
    navigate("/member", { replace: true });
  };
  const clickActivity = () => {
    navigate("/activity", { replace: true });
  };
  const clickRecruitment = () => {
    navigate("/recruiting", { replace: true });
  };

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <header>
      <div className="header">
        <div className="nav_logo">
          <img alt="logo" className="logo" src={logo} onClick={clickLogo}></img>
        </div>
        <div className="nav">
          <text onClick={clickProgram}>PROGRAM</text>
          <text onClick={clickMember}>MEMBER</text>
          <text onClick={clickActivity}>ACTIVITY</text>
          <text onClick={clickRecruitment}>RECRUITMENT</text>
          <button className="nav_hamburger" onClick={myFunction}>
            &#9776;
          </button>
        </div>
      </div>
      <div id="myLinks">
        <text onClick={clickProgram}>PROGRAM</text>
        <text onClick={clickMember}>MEMBER</text>
        <text onClick={clickActivity}>ACTIVITY</text>
        <text onClick={clickRecruitment}>RECRUITMENT</text>
      </div>
    </header>
  );
};

export default MyHeader;
