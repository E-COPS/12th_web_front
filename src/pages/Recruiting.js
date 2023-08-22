import { useState } from "react";
import recruiting_logo from "..//assets/Recruiting_img/recruiting_logo.svg";
import recruiting_star from "..//assets/Recruiting_img/recruiting_star.svg";
import recruiting_process from "..//assets/Recruiting_img/recruiting_process.png";
import recruiting_up from "..//assets/Recruiting_img/recruituing_up.svg";
import recruiting_check from "../assets/Recruiting_img/recruiting_check.png";
// import recruiting_ecops_img from "../assets/Recruiting_img/recruiting_check.png";
// import recruiting_ecops_img from "../assets/Recruiting_img/recruiting_ecops_img.svg";
import toggle_down from "../assets/Recruiting_img/toggle_down.svg";
import toggle_up from "../assets/Recruiting_img/toggle_up.svg";
import { Link } from "react-router-dom";

const Recruiting = () => {
  const [IsCheck, setCheck] = useState([false, false, false]); //토글 구현
  const [IsColor, setColor] = useState([false, false, false]); //토글 색
  const [IsSelect, setSelect] = useState([false, false, false]); //토글 옆 삼각형

  function handleClick(index) {
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

    setSelect((prevSelect) => {
      const updateSelect = [...prevSelect];
      updateSelect[index] = !updateSelect[index];
      return updateSelect;
    });

    /* return (
    <img className= "recruituing_up" src={recruiting_up} />
  );*/
  };

  const CheckToggle = () => {
    return (
      <div className="answerToggle">
        <div className="toggle_answer_box">
          <div>
            동아리에서 보안을 열정적으로 성실하게 함께 공부하실 수 있는 분이라면
          </div>
          <div className="toggle_content">
            보안 왕초보라도 누구나 환영합니다!
          </div>
          <div>비기너 트랙은 보안 기초 지식 학습을 목표로 하기 때문에</div>
          <div className="toggle_content">
            배경 지식이나 경험의 유무를 선발에 중점적으로 고려하지 않습니다.
          </div>
          <div>중요한 것은 오로지 지원자님의 보안 공부에 대한 열정입니다.</div>
          <div className="toggle_content">
            지원 과정에서 자신의 열정과 성실성을 최대한 어필해 주세요.
          </div>
        </div>
      </div>
    );
  };

  const CheckToggle1 = () => {
    return (
      <div className="answerToggle">
        <div className="toggle_answer_box">
          <div>학기말에 비기너 부원들의 수요조사를 받아서</div>
          <div className="toggle_content">
            가장 수요가 많은 분야들을 다음 기수 챌린저 분야로 선정합니다.
          </div>
          <div>
            13기 분야는 리버싱, 웹해킹, 포렌식, 네트워크 보안, 인공지능 보안으로
            확정되었고,
          </div>
          <div className="toggle_content">
            후보로 시스템 해킹이 선정되어 있습니다.
          </div>
        </div>
      </div>
    );
  };

  const CheckToggle2 = () => {
    return (
      <div className="answerToggle">
        <div className="toggle_answer_box">
          <div className="toggle_content">
            1년 [ (학기+방학) × 2 ] 이상 활동해야 수료증을 발급받을 수 있습니다.
          </div>
          <div>비기너로 들어온 분들은 비기너 1학기+방학을 활동하면</div>
          <div className="toggle_content">
            다음 학기는 자동으로 챌린저로 1학기+방학동안 활동하게 됩니다.
          </div>
          <div className="toggle_content">
            챌린저로 들어온 분들은 챌린저로 1년 이상 활동해야 합니다.
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="recruiting">
      <div className="recruiting_home">
        <img
          alt="recruiting_logo"
          className="recruiting_logo_img"
          src={recruiting_logo}
        ></img>
      </div>
      <div className="recruituing_explain">
        <div className="challenger_box">
          <div className="red_text_div">
            <text className="red_text">CHALLENGER TRACK</text>
          </div>
          <text className="black_text1">
            <div className="black_text_inside">
              챌린저 커리큘럼은 매주 정규 세션과 팀 세션으로 이루어집니다.
            </div>
            <div className="black_text_inside">
              13기 챌린저 분야는 리버싱, 시스템 해킹, 웹 해킹, 포렌식, 네트워크
              보안, 인공지능 보안으로 확정되었습니다.
            </div>
            <div className="black_text_inside">
              챌린저 커리큘럼은 팀 세션 위주로 진행되며, 팀 세션에서는 주제에
              맡게 구성된 팀원들과 심화 스터디를 진행하게 됩니다.
            </div>
            <div>
              정규 세션에서는 각 팀 당 팀 세션에서 풀이한 CTF 문제 발표 및 4주와
              8주차에는 논문 스터디 발표가 진행될 예정입니다.
            </div>
          </text>
        </div>
        <div className="begginer_box">
          <div className="purple_text_div">
            <text className="purple_text">BEGINNER TRACK</text>
          </div>

          <text className="black_text1">
            <div className="black_text_inside">
              비기너 커리큘럼은 매주 정규 세션과 팀 세션으로 이루어집니다.
            </div>
            <div className="black_text_inside">
              정규 세션은 하나의 주제로 강의 세션 1회, 발표 세션 1회 형태로
              진행되며, 8주간 총 4가지의 핵심 주제로 진행됩니다.
            </div>
            <div className="black_text_inside">
              팀세션은 팀원들과 자율적으로 정한 시간에 진행되며, 협업을 통해
              과제 수행과 주제에 대한 심화 학습을 수행하게 됩니다.
            </div>
          </text>
        </div>
        <text className="black_text2">
          E-COPS는 두가지 트랙으로 나누어 세션을 진행합니다.
          <br />
          CHALLENGER TRACK과 BEGIENNER TRACK, 원하는 트랙을 선택하여 E_COPS에서
          자유롭게 자신의 능력을 펼쳐보세요.
          <br />
        </text>
      </div>
      <div className="basicContainer">
        <text className="black_text3">E-COPS 13기 모집</text>
        <img
          alt="recruiting_star"
          className="recruiting_star"
          src={recruiting_star}
        ></img>
        <text className="black_text4">
          E-COPS에서 13기 신입 부원을 모집합니다.
          <br />
          보안에 관심 이 많고 열정이 넘치는이화여대 학부생 누구나 지원 가능!!
          <br />
          <br />
          E-COPS is recruiting 13th recruitment.
          <br />
          Any student of Ewha Womans University who is interested in security
          and passionate can apply!!
          <br />
        </text>
        <div>
          <Link to="https://bit.ly/3sfNMu4">
            <button className="applyButton">13기 지원하기</button>
          </Link>
        </div>
      </div>
      <div className="basicContainer">
        <div className="recruiting_process">
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
              className={IsColor[0] ? "questionToggle2" : "questionToggle"}
              onClick={() => {
                onClick(0);
                handleClick(0);
              }}
            >
              <text className="black_text5">
                Q: 비기너로 지원하고 싶은데, 보안관련 경험이 하나도 없어요.
                지원해도 괜찮을까요?
              </text>
              <div className="toggle_updown">
                {IsSelect[0] ? (
                  <img src={toggle_up} />
                ) : (
                  <img src={toggle_down} />
                )}
              </div>
            </button>
            {IsCheck[0] ? (
              <div>
                <CheckToggle />
              </div>
            ) : null}

            <button
              className={IsColor[1] ? "questionToggle2" : "questionToggle"}
              onClick={() => {
                onClick(1);
                handleClick(1);
              }}
            >
              <text className="black_text5">
                Q: 챌린저 분야는 항상 동일한가요?
              </text>
              <div className="toggle_updown">
                {IsSelect[1] ? (
                  <img src={toggle_up} />
                ) : (
                  <img src={toggle_down} />
                )}
              </div>
            </button>
            {IsCheck[1] ? (
              <div>
                <CheckToggle1 />
              </div>
            ) : null}

            <button
              className={IsColor[2] ? "questionToggle2" : "questionToggle"}
              onClick={() => {
                onClick(2);
                handleClick(2);
              }}
            >
              <text className="black_text5">
                Q: 필수 활동 기간이 어떻게 되나요?
              </text>
              <div className="toggle_updown">
                {IsSelect[2] ? (
                  <img src={toggle_up} />
                ) : (
                  <img src={toggle_down} />
                )}
              </div>
            </button>
            {IsCheck[2] ? <CheckToggle2 /> : null}
          </div>
        </div>
      </div>
      <div className="recruiting_extra">
        <div className="basicContainer2">
          {/* <text className="grayText">
            더 궁금한 내용이나 <br />
            문의사항 있으신가요?
          </text> */}
          <img className="recruiting_check" src={recruiting_check} />
          {/* <button className="askButton">문의하기</button> */}
          {/* <img className="recruiting_ecops_img" src={recruiting_ecops_img} /> */}
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
