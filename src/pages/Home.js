import home_logo from "..//assets/home_logo.svg";
import ecops_logo from "..//assets/ecops_logo.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="home_logo">
        <img alt="home_logo" className="home_logo_img" src={home_logo}></img>
      </div>
      <div className="home_description">
        <img src={ecops_logo} alt="ecops_log" className="home_ecops_logo"></img>
      </div>
    </div>
  );
};

export default Home;
