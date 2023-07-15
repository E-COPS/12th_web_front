import {useState} from "react";
import recruiting_logo from "..//assets/Recruiting_img/recruiting_logo.svg";
import recruiting_star from "..//assets/Recruiting_img/recruiting_star.svg";
import recruiting_process from "..//assets/Recruiting_img/recruiting_process.svg";
import recruiting_up from "..//assets/Recruiting_img/recruituing_up.svg";
import recruiting_check from "../assets/Recruiting_img/recruiting_check.svg";
import recruiting_ecops_img from "../assets/Recruiting_img/recruiting_ecops_img.svg";

const Recruiting = () => {

const [IsCheck,setCheck] = useState([false,false,false]);//토글 구현 
const [IsColor,setColor] = useState([false,false,false]);//토글 색 

function handleClick(index){
  setColor((prevColor) => {
    const updateColor = [...prevColor];
    updateColor[index] = !updateColor[index];
    return updateColor;
  });
}

const onClick = (index) => {
  setCheck((prevCheck) => {
    const updateCheck = [...prevCheck];
    updateCheck[index] = !updateCheck[index];
    return updateCheck;
  });

 /* return (
    <img className= "recruituing_up" src={recruiting_up} />
  );*/

};


const CheckToggle= () => {
  return (
    <div className="answerToggle">
      안녕
    </div>
  )
}

const CheckToggle1= () => {
  return (
    <div className="answerToggle">
    </div>
  )
}

const CheckToggle2= () => {
  return (
    <div className="answerToggle">
    </div>
  )
}



  return (
    <div className="recruiting">
      <div className = "recruiting_home">
        <img
          alt="recruiting_logo"
          className="recruiting_logo_img"
          src={recruiting_logo}
        ></img>
        </div>
        <div className="recruituing_explain">
          <div className="challenger_box">
            <text className="red_text">CHALLENGER TRACK</text>
            <text className="black_text1">설명</text>
          </div>
          <div className="begginer_box">
            <text className = "purple_text">BEGINNER TRACK</text>
            <text className="black_text1">설명</text>
          </div>
          <text className="black_text2">
            E-COPS는 두가지 트럭으로 나누어 세션을 진행합니다.<br />
            CHALLENGER TRACK과 BEGIENNER TRACK, 원하는 트랙을 선택하여 E_COPS에서 자유롭게 자신의 능력을 펼쳐보세요.<br/>
          </text>
        </div>
          <div className="basicContainer">
            <text className="black_text3">E-COPS 12.5기 모집</text>
            <img 
            alt = "recruiting_star" 
            className="recruiting_star" 
            src={recruiting_star}></img>
            <text className="black_text4">
              E-COPS에서 12.5기 신입 부원을 모집합니다.<br />
              보안에 관심 이 많고 열정이 넘치는이화여대 학부생 누구나 지원 가능!!<br />
              <br />
              E-COPS is recruiting 12.5th recruitment.<br />
              Any student of Ewha Womans University who is interested in security and passionate can apply!!<br />
            </text>
            <button className="applyButton">12.5기 지원하기</button>
          </div>
        <div className="basicContainer">
          <div className="recruiting_process">
            <text className="black_bold_text">RECRUITING PROCESS</text>
            <img
              alt="recruiting_preocess"
              className="recruiting_process"
              src={recruiting_process}
            ></img>
          </div>
        </div>
        <div className="recruiting_question">
          <div className="basicContainer">
            <text className="black_bold_text2">자주 묻는 질문</text>
            <div className="toggleBox">
              <button 
              className={IsColor[0]? "questionToggle2":"questionToggle"}
              onClick = {() => {onClick(0); handleClick(0);}}>
              <text className="black_text5">Q: ECOPS는 어떤 동아리인가요?</text>  
              </button>
              {IsCheck[0]?<div><CheckToggle /></div>:null}

              <button 
              className={IsColor[1]? "questionToggle2":"questionToggle"}
              onClick = {() => {onClick(1); handleClick(1);}}>
              <text className="black_text5">Q: ECOPS는 어떤 동아리인가요?</text>  
              </button>
              {IsCheck[1]? <div><CheckToggle1/></div>:null}

              <button 
              className={IsColor[2]? "questionToggle2":"questionToggle"}
              onClick = {() => {onClick(2); handleClick(2);}}>
              <text className="black_text5">Q: ECOPS는 어떤 동아리인가요?</text>  
              </button>
              {IsCheck[2]? <CheckToggle2/>:null}
            </div>
          </div>
        </div>
        <div className="recruiting_extra">
          <div className="basicContainer2">
            <text className="grayText">더 궁금한 내용이나 <br/> 
            문의사항 있으신가요?</text>
            <img className="recruiting_check" src={recruiting_check}/>
            <button className="applyButton" style={{marginRight:'73vw'}}>문의하기</button>
            <img className="recruiting_ecops_img" src={recruiting_ecops_img} />
          </div>
        </div>
    </div>
  );
};

export default Recruiting;
