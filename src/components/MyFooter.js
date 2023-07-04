import { useNavigate } from "react-router-dom";
import blue_logo from "..//assets/ecops_blue_logo.png";
import email_logo from "..//assets/email_logo.png";
import git_logo from "..//assets/git_logo.png";
import insta_logo from "..//assets/insta_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";

const MyFooter = () => {
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
  return (
    <footer>
      <div className="footer_first_line">
        <div className="footer_logo">
          <img
            alt="logo"
            className="blue_logo"
            src={blue_logo}
            onClick={clickLogo}
          ></img>
        </div>
        <div className="foot">
          <text onClick={clickProgram}>PROGRAM</text>
          <text onClick={clickMember}>MEMBER</text>
          <text onClick={clickActivity}>ACTIVITY</text>
          <text onClick={clickRecruitment}>RECRUITMENT</text>
        </div>
      </div>
      <div className="sns_logo">
        <a href="mailto: ayg0418@naver.com">
          <img className="sns_logo_button" alt="sns_logo" src={email_logo} />
        </a>
        <a href="https://github.com/E-COPS">
          <img className="sns_logo_button" alt="sns_logo" src={git_logo} />
        </a>
        <a href="https://www.instagram.com/ecops_ewha/">
          <img className="sns_logo_button" alt="sns_logo" src={insta_logo} />
        </a>
        <img className="sns_logo_button" alt="sns_logo" src={linkedin_logo} />
      </div>
    </footer>
  );
};

export default MyFooter;
