import git_logo from "..//assets/git_logo.png";
import insta_logo from "..//assets/insta_logo.png";

function get_Logo(link) {
  return link ? (
    <div className="sns_link">
      <a href={link}>
        <img className="sns_logo_button" alt="sns_logo" src={insta_logo} />
      </a>
    </div>
  ) : (
    <div></div>
  );
}

const ActivityList = ({
  year,
  img,
  title,
  author,
  activity_description,
  link,
}) => {
  return (
    <div
      className="activity_box"
      onClick={() => {
        window.location.href = `${link}`;
      }}
    >
      <img className="member_img" alt="" src={img} />
      <div className="activity_info">
        <text className="year_text">{year}기</text>
        <text className="activity_title">{title}</text>
        <text className="author">{author}</text>
        <text className="activity_description">{activity_description}</text>
        {get_Logo(`${link}`)}
      </div>
    </div>
  );
};

export default ActivityList;
