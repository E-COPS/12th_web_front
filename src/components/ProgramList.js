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
    <div className="program1_box">
      <img className="member_img" alt="" src={img} />
      <div className="program1_info">
        <text className="program1_title">{project_name}</text>
        <text className="program1_description">{project_description}</text>
        <a className="sns_link" href={git_link}>
          <img className="sns_logo_button" alt="sns_logo" src={git_logo} />
        </a>
        <a className="sns_link" href={insta_link}>
          <img className="sns_logo_button" alt="sns_logo" src={insta_logo} />
        </a>
      </div>
    </div>
  );
};

export default ProgramList;