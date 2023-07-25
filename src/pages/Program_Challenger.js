import React, { useEffect, useRef, useState } from "react";
import ProgramList from "../components/ProgramList";
import activity_example_img from "../assets/activity_example_img.svg";

const Challenger = () => {
  const programId = useRef(0);

  const program_data = [
    {
      year: "12",
      track: "beginner",
      img: activity_example_img,
      project_name: "프로젝트 2",
      project_description: "12기 프로젝트 2입니다.",
      insta_link: "",
      git_link: "",
      id: programId.current++,
    },
    {
      year: "12",
      track: "beginner",
      img: activity_example_img,
      project_name: "프로젝트 1",
      project_description: "12기 프로젝트 1입니다.",
      insta_link: "",
      git_link: "",
      id: programId.current++,
    },
  ];

  const [programData, setProgramData] = useState([]);
  const [classData, setClassData] = useState("12");

  useEffect(()=>{
    setProgramData(programData.filter((it)=>it.track=="challenger"));
  })

  const handleClick = (value) => {
    setProgramData(program_data.filter((it) => it.year === value));
    setClassData(value);
  };

  const btn = [{ year: "13" }, { year: "12" }, { year: "11" }];

  return (
    <div className="Activity">
      <h1 className="title">Challenger Track</h1>
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
          {programData.map((it) => (
            <ProgramList {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenger;
