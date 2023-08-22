import git_logo from "..//assets/git_logo.png";
import insta_logo from "..//assets/insta_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import email_logo from "..//assets/email_logo.png";
import tf_logo from "../assets/Member_img/운영진.svg";
import "../styles/Member.css";

const MemberList = ({
  year,
  img,
  name,
  email,
  comment,
  insta_link,
  linkedin_link,
  git_link,
  tf,
  id,
}) => {
  return (
    // <div className="MemberList">
    <div className="memberBox">
      <img className="member_img" alt="" src={img} />
      <div className="member_info">
        <div className="sns_logo">
          <div className="name">
            {name}
            {tf && <img className="tf_logo" src={tf_logo} />}
          </div>
          <a className="email_logo" href={email}>
            {email && (
              <img
                className="sns_logo_button"
                alt="sns_logo"
                src={email_logo}
              />
            )}
            {/* <img className="sns_logo_button" alt="sns_logo" src={email_logo} /> */}
          </a>
          <a href={git_link}>
            {git_link && (
              <img className="sns_logo_button" alt="sns_logo" src={git_logo} />
            )}
            {/* <img className="sns_logo_button" alt="sns_logo" src={git_logo} /> */}
          </a>
          <a href={insta_link}>
            {insta_link && (
              <img
                className="sns_logo_button"
                alt="sns_logo"
                src={insta_logo}
              />
            )}
            {/* <img className="sns_logo_button" alt="sns_logo" src={insta_logo} /> */}
          </a>
          <a href={linkedin_link}>
            {linkedin_link && (
              <img
                className="sns_logo_button"
                alt="sns_logo"
                src={linkedin_logo}
              />
            )}
            {/* <img className="sns_logo_button" alt="sns_logo" src={linkedin_logo} /> */}
          </a>
        </div>
        <div className="commentBox">
          <div className="quote">"</div>
          <div className="comment">{comment}</div>
          <div className="quote">"</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MemberList;
