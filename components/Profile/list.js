import React from "react";
import { ListDiv } from "./styles/list.style";

const List = () => {
  return (
    <ListDiv>
      <div className="listHeader">
        <p>Saved List</p>
      </div>
      <div className="listBody">
        <div className="listBodyOne">
          <p className="listBodyOneNum">Number of Saved article</p>
          <p className="listBodyOneCount">10</p>
        </div>
        <div className="listBodyTwo">
          <p className="listBodyTwoList">link to view Saved view</p>
          <p className="listBodyTwoView">view saved list</p>
        </div>
      </div>
    </ListDiv>
  );
};

export default List;
