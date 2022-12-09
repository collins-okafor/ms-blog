import React from "react";
import { FollowersDiv } from "./styles/follower.style";

const Followers = () => {
  return (
    <FollowersDiv>
      <div className="followersHeader">
        <p>Followers</p>
      </div>
      <div className="followersBody">
        <div className="followersBodyOne">
          <p className="followersBodynum">numbers of followers</p>
          <p className="followersBodycount">10</p>
        </div>
        <div className="followersBodyTwo">
          <p className="followersBodyTwoList">link to view followers</p>
          <p className="followersBodyTwoView">view followers</p>
        </div>
      </div>
    </FollowersDiv>
  );
};

export default Followers;
