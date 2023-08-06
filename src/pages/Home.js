import home_logo from "..//assets/home_logo.svg";
import ecops_logo from "..//assets/ecops_logo.png";
import ewha_logo from "..//assets/ewha_womans_univ_logo.svg";
import hspace_logo from "..//assets/hspace_logo.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="home_logo">
        <img alt="home_logo" className="home_logo_img" src={home_logo}></img>
      </div>
      <div className="home_description">
        <img src={ecops_logo} alt="ecops_log" className="home_ecops_logo"></img>
        <text>
          <text className="bold">E-COPS</text>는 보안을 공부하고 싶은 학생이라면
          누구나 참여할 수 있는
        </text>
        <text className="home_description_text_kr">
          이화여자대학교 교내 동아리입니다.
        </text>
        <text>
          <text className="bold">E-COPS</text> is a cyber security club at EWHA
          Woman's University,
        </text>
        <text>and anyone who has a passion for security can apply</text>
      </div>
      <div className="home_description_2">
        <img src={ewha_logo} alt="ewha_logo" className="home_ewha_logo"></img>
        <div className="home_description_2_text">
          <h2 className="home_description_2_intro">E-COPS는 이런 동아리야!</h2>
          <text>E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는</text>
          <text>
            이화여대 학생이라면 누구나 참여할 수 있는 이화여자대학교 대표 사이버
            보안 동아리로,
          </text>
          <text>
            함께 정보 보안을 공부하며 보안 전문가로 성장해 나가는 것을 목표로
            합니다.
          </text>
          <text className="home_description_padding">
            경력 개발 센터 우수 동아리에 이름을 올렸으며,
          </text>
          <text>
            현재 인재 개발원 커리어클럽, 보안 엽합 IncogNITO, SUA, hspace에
            소속되어
          </text>
          <text>내/외부적으로 활발하게 활동을 이어 나가고 있습니다.</text>
        </div>

        <div className="home_description_2_text_alt">
          <h2 className="home_description_2_intro">E-COPS는 이런 동아리야!</h2>
          <text>E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는</text>
          <text>
            이화여대 학생이라면 누구나 참여할 수 있는 이화여자대학교 대표 사이버
            보안 동아리로,
          </text>
          <text>
            함께 정보 보안을 공부하며 보안 전문가로 성장해 나가는 것을 목표로
            합니다.
          </text>
          <text className="home_description_padding">
            경력 개발 센터 우수 동아리에 이름을 올렸으며,
          </text>
          <text>
            현재 인재 개발원 커리어클럽, 보안 엽합 IncogNITO, SUA, hspace에
            소속되어
          </text>
          <text>내/외부적으로 활발하게 활동을 이어 나가고 있습니다.</text>
        </div>
        <div className="home_description_partner">
          <div className="home_description_partner_intro">
            <text>E-COPS와 함께하는 파트너</text>
          </div>
          <img src={hspace_logo} alt="hspace_logo"></img>
        </div>
        <div className="ecops_yellow_line">
          <text className="yellow_line_1">
            EWHA - CONTROL OF PROGRAM SECURITY
          </text>
          <text className="yellow_line_2">
            EWHA - CONTROL OF PROGRAM SECURITY
          </text>
          <text className="yellow_line_3">
            EWHA - CONTROL OF PROGRAM SECURITY
          </text>
          <text className="yellow_line_4">
            EWHA - CONTROL OF PROGRAM SECURITY
          </text>
        </div>
        <div className="blue_line"></div>
      </div>
    </div>
  );
};

export default Home;
