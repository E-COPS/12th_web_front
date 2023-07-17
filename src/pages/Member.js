import React, { useEffect, useRef, useState } from "react";
import MemberList from "./MemberList";
import profile_example from "../assets/Member_img/profile_example.svg";

const Member = () => {
  //const {id}=useParams();
  // const [year,setYear]=useState(11);
  const dataId = useRef(0);
  // const [data, setData]=useState([]);

  // const getData=async()=>{
  //   const res = await fetch(/*API link*/).then((res)=>res.json());
  //   const initData = res.slice(0,20).map((it)=>{
  //     return{
  //       year: it.year, //기수
  //       name: it.name, //이름
  //       email: it.email, //이메일
  //       comment: it.comment, //문구
  //       sns_link: it.sns_link //sns link
  //       id:dataId.current++, //ID
  //       tf:it.tf, //운영진 여부
  //     };
  //   });
  //   setData(initData);
  // }

  // useEffect(()=>{
  //   getData();
  // },[])

  const data = [
    {
      year: "11",
      img: profile_example,
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요12",
      insta_link: "https://www.instagram.com/hav_a_gr8_dae/",
      git_link: "",
      linkedin_link: "",
      id: dataId.current++,
      tf: true,
    },
    {
      year: "11",
      img: "",
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요11",
      insta_link: "https://www.instagram.com/hav_a_gr8_dae/",
      git_link: "",
      linkedin_link: "",
      id: dataId.current++,
      tf: true,
    },
    {
      year: "11",
      img: "",
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요13",
      insta_link: "",
      git_link: "",
      linkedin_link: "",
      id: dataId.current++,
      tf: false,
    },
  ];

  const [listData, setListData] = useState([]);

  const [isSelect, setIsSelect] = useState("13");
  const handleClick = (value) => {
    setListData(data.filter((it) => it.year === value));
    setIsSelect(value);
  };

  const btn = [{ year: "13" }, { year: "12" }, { year: "11" }];

  return (
    <div className="Member">
      <h1 className="text">E-COPS의 멤버들을 소개합니다</h1>
      <div className="buttonContainer">
        {btn.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                handleClick(item.year);
              }}
              className={"button" + `${isSelect === item.year ? "Select" : ""}`}
            >
              {item.year}기
            </button>
          );
        })}
      </div>
      <div className="MemberList">
        <div className="Member_grid">
          {listData.map((it) => (
            <MemberList {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

Member.defaultProps = {
  tf: Boolean,
};

export default Member;
