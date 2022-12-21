import React, { useState } from "react";
import Ads from "../postAdsStructure/ads";
import { ArticleDisplayDiv } from "./styles/articleDisplay.style";
import image1 from "../../assets/Images/Avatar.png";
import Image from "next/image";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import photoSix from "../../assets/Images/about-us.jpg";
import { FaCommentDots } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import { getLoginPageCounter } from "../../store/actions/authAction";

const DashboardArticleDisplay = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);

  let auth =
    typeof window !== "undefined" && window.localStorage.getItem("token");

  const getSingleArticle = useSelector(
    (state) => state.generalReducer.getSingleArticle
  );

  console.log(getSingleArticle, "make");

  const HandleLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  const HandleDisLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  const HandleShowComment = () => {
    if (auth) {
      setShowComment(!showComment);
    } else {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  return (
    <ArticleDisplayDiv>
      <div className={"articleWrapper"}>
        <div className={"articleWrapper__header"}>
          <div className={"articleWrapper__headerProfile"}>
            <div className={"articleWrapper__headerProfilePics"}>
              <Image
                src={image1}
                alt="state"
                className={"articleWrapper__headerProfilePicsItem"}
              />
            </div>
            <div className={"articleWrapper__headerProfileDetails"}>
              <p className={"articleWrapper__headerProfileDetailsHeader"}>
                {getSingleArticle?.username}
              </p>
              <p className={"articleWrapper__headerProfileDetailsParagraph"}>
                {moment(getSingleArticle?.createdAt).format(
                  "YYYY-MM-DD hh:mm:ss"
                )}
              </p>
            </div>
          </div>
          <div className={"articleWrapper__headerProfileSectionState"}>
            <div className={"articleWrapper__headerProfileSectionStateSave"}>
              <MdOutlineBookmarkAdd
                className={"articleWrapper__headerProfileSectionStateSaveItem"}
              />
            </div>
            <div className={"articleWrapper__headerProfileSectionStateFollow"}>
              <FiMoreHorizontal
                className={
                  "articleWrapper__headerProfileSectionStateFollowItem"
                }
              />
            </div>
          </div>
        </div>
        <div className={"articleWrapper__title"}>
          <div className={"articleWrapper__titleDetails"}>
            <p className={"articleWrapper__titleDetailsItem"}>
              {getSingleArticle?.title}
            </p>
          </div>

          <div className={"articleWrapper__titleImageWrapper"}>
            <Image
              src={photoSix}
              alt={""}
              priority
              placeholder={"blur"}
              // blurDataURL
              objectFit={"cover"}
              layout={"responsive"}
              className={"articleWrapper__titleImageWrapperItem"}
            />
          </div>
        </div>

        <div className={"articleWrapper__articleDetails"}>
          <p className={"articleWrapper__articleDetailsItem"}>
            {HTMLReactParser(getSingleArticle?.article)}
          </p>
        </div>

        <div className={"articleWrapper__SocialMedai"}>
          <div className={"articleWrapper__SocialMedaiDetails"}>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleLike}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <BsFillHandThumbsUpFill
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{getSingleArticle?.like?.length}</p>
              </div>
            </div>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleDisLike}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <BsFillHandThumbsDownFill
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{getSingleArticle?.dislike?.length}</p>
              </div>
            </div>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleShowComment}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <FaCommentDots
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{getSingleArticle?.comments?.length}</p>
              </div>
            </div>
          </div>
          <div className={"articleWrapper__SocialMedaiStatus"}>
            <div className={"articleWrapper__SocialMedaiStatusSaveIconBody"}>
              <MdOutlineBookmarkAdd
                className={"articleWrapper__SocialMedaiStatusSaveIcon"}
              />
            </div>
            <div className={"articleWrapper__SocialMedaiStatusFollowIconBody"}>
              <FiMoreHorizontal
                className={"articleWrapper__SocialMedaiStatusFollowIcon"}
              />
            </div>
          </div>
        </div>

        {showComment && (
          <div className="articleWrapper__comment">
            <div className="articleWrapper__commentSection">
              <div className="articleWrapper__commentSectionImageWrapper">
                <Image
                  src={image1}
                  alt="state"
                  width={50}
                  height={50}
                  className="articleWrapper__commentSectionImage"
                />
              </div>
              <div className="articleWrapper__commentSectionStage">
                <div className="articleWrapper__commentSectionStageTitle">
                  <p>joshua ejike</p>
                </div>
                <textarea className="articleWrapper__commentSectionStageTextarea" />
                <div className="articleWrapper__commentSectionStageButton">
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className="articleWrapper__commentTextSectionWrapper">
              {ArrayList?.map((item, key) => (
                <div key={key} className="articleWrapper__commentTextSection">
                  <div className="articleWrapper__commentTextSectionWImageWrapper">
                    <Image
                      src={image1}
                      alt="state"
                      width={30}
                      height={30}
                      className="articleWrapper__commentTextSectionWImage"
                    />
                  </div>
                  <div className="articleWrapper__commentTextSectionText">
                    <div className="articleWrapper__commentTextSectionTextTitle">
                      <p>
                        Sam Doe{" "}
                        <span className="articleWrapper__commentTextSectionTextTitleSpan">
                          on Aug 17, 2021 5:34 am
                        </span>
                      </p>
                    </div>
                    <div className="articleWrapper__commentTextSectionTextBody">
                      <p>
                        That far ground rat pure from newt far panther crane
                        lorikeet overlay alas cobra across much gosh less
                        goldfinch ruthlessly alas examined and that more and the
                        ouch jeez.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={"articleWrapperAds"}>
        <Ads />
      </div>
    </ArticleDisplayDiv>
  );
};

const ArrayList = [
  {
    text: "That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.",
  },
  {
    text: "That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.",
  },
  {
    text: "That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.",
  },
  {
    text: "That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.",
  },
];

export default DashboardArticleDisplay;
