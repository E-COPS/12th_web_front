import program_team_logo from "../assets/Program_img/program_team_logo.svg";
import program_beginner_img from "../assets/Program_img/program_beginner_img.svg";
import program_challenger_img from "../assets/Program_img/program_challenger_img.svg";
import { useNavigate } from "react-router-dom";
import '../styles/Program.css'

const Program = () => {

  const navigate = useNavigate();

  return (
  <div className="Program">
    <div className="Session">
      <div className = "basicContainer">
        <b className="boldText">Sessions</b>
        <text className="smallText">E-COPS의 정규 세션은 Beginner Track과 Challenger Track으로 나누어서 이루어집니다.<br/>
            자유롭게 선택해 보세요. 
        </text>
        <div className="whiteBox">
          <img className="program_beginner_img" src={program_beginner_img}/>
          <button className="button1" onClick={()=>{navigate("./beginner")}}>자세히 보기 &rarr;</button>
        </div>
        <div className="grayBox">
          <img className="program_challenger_img" src={program_challenger_img}/>
          <button className="button2" onClick={()=>{navigate("./challenger")}}>자세히 보기 &rarr;</button>
        </div>
      </div>
    </div>
    <div className="Teams">
      <div className="basicContainer">
        <text className="boldText">Teams</text>
        <text className="smallText">방학 세션은 Team을 이루어 진행됩니다.<br/>
        심화학습을 원하는 Team에 들어가 자신의 능력을 뽐내보세요!
        </text>
        <div className="img_grid">
          <img className="program_team_logo" src={program_team_logo}/>
          <img className="program_team_logo" src={program_team_logo}/>
          <img className="program_team_logo" src={program_team_logo}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Program;
