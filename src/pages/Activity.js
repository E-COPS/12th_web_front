import React, { useRef, useState } from "react";
import ActivityList from "../components/ActivityList";
import activity_example_img from "../assets/activity_example_img.svg";

const Activity = () => {
  const activityId = useRef(0);

  const activity_data = [
    {
      year: "12",
      img: activity_example_img,
      project_name: "프로젝트 2",
      project_description: "12기 프로젝트 2입니다.",
      insta_link: "",
      git_link: "",
      id: activityId.current++,
    },
    {
      year: "11",
      img: activity_example_img,
      project_name: "프로젝트 1",
      project_description: "12기 프로젝트 1입니다.",
      insta_link: "",
      git_link: "",
      id: activityId.current++,
    },
  ];

  const [activityData, setActivityData] = useState([]);

  const [classData, setClassData] = useState("12");

  const handleClick = (value) => {
    setActivityData(activity_data.filter((it) => it.year === value));
    setClassData(value);
  };

  const btn = [{ year: "13" }, { year: "12" }, { year: "11" }];

  return (
    <div className="Activity">
      <h1 className="title">Activity</h1>
      <div className="buttonContainer">
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
