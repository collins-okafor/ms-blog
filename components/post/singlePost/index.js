import React from "react";
// import photo from "../../../assets/about-us.jpg";
import Image from "next/image";
import { StyledPost } from "./style";
const SinglePost = ({ photo, title, author, date, content, profilePhoto }) => {
  return (
    <StyledPost>
      {/* heading section */}
      <div className="userDetails flex">
        <div className="profileImage">
          <img src={profilePhoto.src} />
        </div>
        <div className="userName flex">
          <h5>{author}</h5>
          <p className="date">{date}</p>
        </div>
      </div>
      {/* photo and post container */}
      <div className="mainPostContainer">
        <div className="photoContainer">
          <img src={photo.src} />
        </div>
        <div className="postContainer">
          {/* title, author date content */}
          <h1>{title}</h1>
          <p className="textContent">{content}</p>
          <div>
            <button>Java programming</button>
            <p>11 min read</p>
          </div>
        </div>
      </div>
    </StyledPost>
  );
};

export default SinglePost;
