import React, { useRef, useState } from "react";
import ProgramList from "../components/ProgramList";
import activity_example_img from "../assets/activity_example_img.svg";
import { useEffect } from "react";
import "../styles/Program_1.css";

const Beginner = () => {
  const programId = useRef(0);

  const [program_data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "http://django-env.eba-rbr47dt9.ap-northeast-2.elasticbeanstalk.com/beginner/"
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map((it) => {
      return {
        year: it.year,
        project_name: it.program_name,
        project_description: it.program_description,
        id: programId.current++,
        insta_link: it.insta_link,
        img: it.img,
        track: it.track,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  // const program_data = [
  //   {
  //     year: "12",
  //     track: "beginner",
  //     img: activity_example_img,
  //     project_name: "프로젝트 2",
  //     project_description: "12기 프로젝트 2입니다.",
  //     insta_link: "",
  //     git_link: "",
  //     id: programId.current++,
  //   },
  //   {
  //     year: "12",
  //     track: "beginner",
  //     img: activity_example_img,
  //     project_name: "프로젝트 1",
  //     project_description: "12기 프로젝트 1입니다.",
  //     insta_link: "",
  //     git_link: "",
  //     id: programId.current++,
  //   },
  //   {
  //       year: "12",
  //       track: "beginner",
  //       img: activity_example_img,
  //       project_name: "프로젝트 1",
  //       project_description: "12기 프로젝트 1입니다.",
  //       insta_link: "",
  //       git_link: "",
  //       id: programId.current++,
  //     },
  // ];

  const [programData, setProgramData] = useState([]);
  const [classData, setClassData] = useState("12");

  useEffect(() => {
    handleClick("11");
  }, []);
  useEffect(() => {
    setProgramData(programData.filter((it) => it.track == "beginner"));
  }, []);

  const handleClick = (value) => {
    setProgramData(program_data.filter((it) => it.year === value));
    setClassData(value);
  };

  const btn = [{ year: "13" }, { year: "12" }, { year: "11" }];

  return (
    <div className="Activity">
      <h1 className="title">Beginner Track</h1>
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

      <div className="program1_List">
        <div className="program1_grid">
          {programData.map((it) => (
            <ProgramList {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beginner;
