import React, { memo } from "react";
import Image from "next/image";
import { PostStructureDiv } from "./styles/postStructure.style";
import photoSix from "../../assets/Images/about-us.jpg";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import NotFound from "../../universal-Components/Notfound";
import moment from "moment";

const PostStructure = () => {
  const router = useRouter();

  const getAllarticle = useSelector(
    (state) => state?.landingPageReducer?.getAllarticle
  );

  useMemo(() => getAllarticle, [getAllarticle]);

  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  const HandleClick = (item) => {
    router.push({
      pathname: "/[articleDetails]",
      query: { articleDetails: item._id },
    });
  };

  return (
    <PostStructureDiv>
      {(getAllarticle === null ||
        getAllarticle === undefined ||
        getAllarticle?.allArticle?.length === 0) && (
        <NotFound text={"no post found"} />
      )}

      {getAllarticle?.allArticle?.length > 0 &&
        getAllarticle?.allArticle?.map((item, key) => (
          <div key={key} className={"flex"}>
            <div className="userDetails">
              <div className="photoContainer">
                <Image
                  src={
                    item.cover_pic &&
                    (item.cover_pic.startsWith("http") ||
                      item.cover_pic.startsWith("/"))
                      ? `${item.cover_pic}`
                      : photoSix
                  }
                  alt=""
                  width={100}
                  height={100}
                  className="photoContainerImage"
                />
              </div>
            </div>

            <div className="mainPostContainer">
              <div
                className="mainPostContainerHeaderWrapper"
                onClick={() => HandleClick(item)}
              >
                <div className="mainPostContainerHeaderWrapperSystem">
                  <div className="profileImage">
                    <Image
                      src={
                        item.profile_pic &&
                        (item.profile_pic.startsWith("http") ||
                          item.profile_pic.startsWith("/"))
                          ? `${item.profile_pic}`
                          : photoSix
                      }
                      alt=""
                      width={100}
                      height={100}
                      className="profileImageState"
                    />
                  </div>
                  <div className="userName">
                    <h4>{item?.username}</h4>
                  </div>
                </div>
                <div className="mainPostContainerHeaderWrapperContent">
                  <h1>{item.title}</h1>
                  <p className="textContent">
                    {HTMLReactParser(HTMLReactParser(item.article))}
                  </p>
                </div>
              </div>
              <div className="postContainer">
                <p>{`${moment(item.date).format("MMM DD, YYYY hh:mm")}`}</p>
                <button>{item.tag}</button>
              </div>
            </div>
          </div>
        ))}
    </PostStructureDiv>
  );
};

export default memo(PostStructure);
