import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MemberList from "./MemberList";
import profile_example from "../assets/profile_example.png";

const Member = () => {

  //const {id}=useParams();
  // const [year,setYear]=useState(11);
  const dataId=useRef(0);
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
  //     };
  //   });
  //   setData(initData);
  // }
 
  // useEffect(()=>{
  //   getData();
  // },[])

  const data =[
    {
      year: "11",
      img: profile_example,
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요12",
      sns_link: "https://www.instagram.com/hav_a_gr8_dae/",
      id:dataId.current++
    },
    {
      year: "11",
      img: "",
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요11",
      sns_link: "https://www.instagram.com/hav_a_gr8_dae/",
      id:dataId.current++
    },
    {
      year: "13",
      img: "",
      name: "장하은",
      email: "eileen0228@naver.com",
      comment: "안녕하세요13",
      sns_link: "",
      id:dataId.current++
    }
  ]

  const [listData,setListData]=useState([]);

  const [isSelect, setIsSelect]=useState("");
  const handleClick=(value)=>{
    setListData(data.filter((it)=>it.year===value));
    setIsSelect(value);
  }

  const btn=[
    {year:'11'},
    {year:'12'},
    {year:'13'}
  ];
  

  return (
    <div className="Member">
      <h1 className="text">E-COPS의 멤버들을 소개합니다</h1>
        <div className="buttonContainer">
        {btn.map((item,idx)=>{
          return(
              <button key={idx} onClick={()=>{handleClick(item.year)}} className={"button"+`${isSelect===item.year?"Select":""}`} >{item.year}기</button>
          );
        })}
        </div>  
      <div>
        {listData.map((it)=>(
          <MemberList {...it}/>
        ))}
      </div>
    </div>
  );
};

// Member.defaultProps={
//   data:{}
// }

export default Member;