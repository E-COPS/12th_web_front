import git_logo from "..//assets/git_logo.png";
import insta_logo from "..//assets/insta_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import email_logo from "..//assets/email_logo.png";
import tf_logo from "../assets/Member_img/운영진.png"

const MemberList =({year,img,name,email,comment,sns_link,id})=>{
    return( 
        <div className="MemberList">
            <div className="memberBox">
                {/* <div className="imgCircle"> */}
                <img className="member_img" alt="img" src={img}/>
                {/* </div> */}
                <div className="member_info">
                    <div className="sns_logo">
                        <div className="name">
                            {name} 
                            <img className="tf_logo" src={tf_logo}/>
                        </div>
                        <a href={email}>
                         <img className="sns_logo_button" alt="sns_logo" src={email_logo} />
                        </a>
                        <a href="">
                            <img className="sns_logo_button" alt="sns_logo" src={git_logo} />
                        </a>
                        <a href={sns_link}>
                            <img className="sns_logo_button" alt="sns_logo" src={insta_logo} />
                        </a>
                        <a href="">
                            <img className="sns_logo_button" alt="sns_logo" src={linkedin_logo} />
                        </a>
                    </div>
                    <div className="comment">{comment}</div>
                </div>
                
            </div>
        </div>
    );
}

export default MemberList;