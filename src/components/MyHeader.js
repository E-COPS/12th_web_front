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
    navigate("/program", { replace: true });
  };

  return (
    <header>
      <div className="nav_logo">
        <img alt="logo" className="logo" src={logo} onClick={clickLogo}></img>
      </div>
      <div className="nav">
        <text onClick={clickProgram}>PROGRAM</text>
        <text onClick={clickMember}>MEMBER</text>
        <text onClick={clickActivity}>ACTIVITY</text>
        <text onClick={clickRecruitment}>RECRUITMENT</text>
      </div>
    </header>
  );
};

export default MyHeader;
