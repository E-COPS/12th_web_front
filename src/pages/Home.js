import home_logo from "..//assets/home_logo.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="home_logo">
        <img alt="home_logo" className="home_logo_img" src={home_logo}></img>
      </div>
      <div className="home_description">안녕하세요</div>
    </div>
  );
};

export default Home;
