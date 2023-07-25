import React, { useRef, useState, useEffect } from "react";
import ActivityList from "../components/ActivityList";
import activity_example_img from "../assets/activity_example_img.svg";

const Activity = () => {
  const activityId = useRef(0);

  const activity_data = [
    {
      year: "12",
      type: "보안뉴스",
      img: activity_example_img,
      title: "보안뉴스 1",
      author: "글쓴이",
      activity_description: "12기 프로젝트 2입니다.",
      link: "https://www.instagram.com/ecops_ewha/",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "12",
      type: "보안뉴스",
      img: activity_example_img,
      title: "보안뉴스 2",
      author: "",
      activity_description: "12기 프로젝트 3입니다.",
      link: "",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "12",
      type: "CTF",
      img: activity_example_img,
      title: "CTF 1",
      author: "",
      activity_description: "12기 CTF 1입니다.",
      link: "",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "11",
      type: "보안뉴스",
      img: activity_example_img,
      title: "보안뉴스 1",
      author: "",
      activity_description: "11기 보안뉴스 1입니다.",
      link: "https://www.instagram.com/ecops_ewha/",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "13",
      type: "보안뉴스",
      img: activity_example_img,
      title: "보안뉴스 1",
      author: "글쓴이",
      activity_description: "13기 보안뉴스 1입니다.",
      link: "https://www.instagram.com/ecops_ewha/",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "13",
      type: "보안뉴스",
      img: activity_example_img,
      title: "보안뉴스 2",
      author: "",
      activity_description: "13기 보안뉴스 2입니다.",
      link: "",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "13",
      type: "CTF",
      img: activity_example_img,
      title: "CTF 1",
      author: "",
      activity_description: "13기 CTF 1입니다.",
      link: "",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "13",
      type: "CTF",
      img: activity_example_img,
      title: "CTF 2",
      author: "",
      activity_description: "13기 CTF 2입니다.",
      link: "",
      git_link: "",
      id: activityId.current++,
    },
  ];

  const [activityData, setActivityData] = useState([]);

  const [classData, setClassData] = useState("12");

  //초기 화면 13기부터 나오도록 설정
  useEffect(() => {
    handleClick("13");
  }, []);

  const handleClick = (value) => {
    setActivityData(activity_data.filter((it) => it.year === value));
    setClassData(value);
  };

  const typeHandleClick = (value) => {
    setActivityData(activity_data.filter((it) => it.type === value));
    setClassData(value);
  };

  const btn = [{ year: "13" }, { year: "12" }, { year: "11" }];
  const type_btn = [{ type: "보안뉴스" }, { type: "CTF" }];

  return (
    <div className="Activity">
      <h1 className="title">Activity</h1>
      <div className="buttonContainer">
        <div className="buttonRowContainer">
          <div className="yearButton">
            {btn.map((item, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    handleClick(item.year);
                  }}
                  className={
                    "button" + `${classData === item.year ? "Select" : ""}`
                  }
                >
                  {item.year}기
                </button>
              );
            })}
          </div>
          <div className="typeButton">
            {type_btn.map((item, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    typeHandleClick(item.type);
                  }}
                  className={
                    "button" + `${classData === item.type ? "Select" : ""}`
                  }
                >
                  {item.type}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ActivityList">
        <div className="Activity_grid">
          {activityData.map((it) => (
            <ActivityList {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
