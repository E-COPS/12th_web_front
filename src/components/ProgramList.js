import git_logo from "..//assets/git_logo.png";
import insta_logo from "..//assets/insta_logo.png";

const ProgramList = ({
  year,
  track,
  img,
  project_name,
  project_description,
  insta_link,
  git_link,
}) => {
  return (
    <div className="activity_box">
      <img className="member_img" alt="" src={img} />
      <div className="activity_info">
        <text>{project_name}</text>
        <a href={git_link}>
          <img className="sns_logo_button" alt="sns_logo" src={git_logo} />
        </a>
        <a href={insta_link}>
          <img className="sns_logo_button" alt="sns_logo" src={insta_logo} />
        </a>
        <text>{project_description}</text>
      </div>
    </div>
  );
};

export default ProgramList;