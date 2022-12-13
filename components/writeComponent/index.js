import React, { useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Dropdown from "../../universal-Components/Dropdown";
import { HiPhotograph } from "react-icons/hi";
import { WriteDiv } from "./styles/write.style";
// import MyEditor from "../../universal-Components/myEditor";

const MyEditor = dynamic(() => import("../../universal-Components/myEditor"), {
  ssr: false,
});

const WriteComponent = () => {
  const [data, setData] = useState("");

  const [dropItem, setDropItem] = useState("Select Details");

  const HandleClickDropDown = (item) => {
    setDropItem(item.title);
  };

  const handleEditor = (e) => {};

  return (
    <WriteDiv>
      <div className="wirteWrappperHeader">
        <p>Write And Article</p>
      </div>
      <div className="wirteWrappperBody">
        <div className="wirteWrappperBodyFirstLine">
          <div className="wirteWrappperBodyFirstLineTitle">
            <p>Title</p>
            <textarea></textarea>
          </div>
          <div className="wirteWrappperBodyFirstLineTag">
            <div className="wirteWrappperBodyFirstLineTagText">
              <p>Tag</p>
            </div>
            <div className="wirteWrappperBodyFirstLineDropdown">
              <Dropdown
                list={LinksDetails}
                select={dropItem}
                HandleClickCoin={HandleClickDropDown}
              />
            </div>
          </div>
        </div>
        <div className="wirteWrappperBodySecondLine">
          <p className="wirteWrappperBodySecondLineText">Add a cover Picture</p>
          <div className="wirteWrappperBodySecondLineFile">
            <div className="wirteWrappperBodySecondLineFileView">
              <div className="wirteWrappperBodySecondLineFileViewIcon">
                <div className="wirteWrappperBodySecondLineFileViewIconBody">
                  <HiPhotograph className="wirteWrappperBodySecondLineFileViewIconItem" />
                </div>
              </div>

              <div className="wirteWrappperBodySecondLineFileViewText">
                <p>photo</p>
              </div>
            </div>
            <input
              type={"file"}
              className="wirteWrappperBodySecondLineFileInput"
            />
          </div>
        </div>
      </div>
      <div className="wirteWrappperBodyEditor">
        <p className="wirteWrappperBodyEditorTitle">Article Body</p>
        <MyEditor />
      </div>

      <div className="wirteWrappperBodyButton">
        <button>Publish</button>
      </div>
    </WriteDiv>
  );
};

const LinksDetails = [
  { title: "Directory" },
  { title: "Blog" },
  { title: "Add Your Biz" },
  { title: "Subscribe" },
  { title: "Conversation" },
  { title: "Popular" },
  { title: "Contact Us" },
];

export default WriteComponent;
