import React from "react";
import photoOne from "../../assets/Images/about-us.jpg";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import photoThree from "../../assets/Images/programmer-working-on-laptop-computer-technology.jpg";
import photoFour from "../../assets/Images/indesignFive.jpg";
import photoFive from "../../assets/Images/paris.jpg";
import photoSix from "../../assets/Images/about-us.jpg";
import Image from "next/image";
import { PostDiv } from "./styles/post.styles";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import DashBoardServices from "../../services/dashboardServices";
import { toast } from "react-toastify";
import { getDynamicPost } from "../../store/actions/generalAction";

const Post = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);

  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  const HandleSinglePost = (item) => {
    router.push({
      pathname: "/dashboard/[articleDetails]",
      query: { articleDetails: item._id },
    });
  };

  const HandleSavePost = (item) => {
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        data["save"] = true;
      }
    });

    dispatch(getDynamicPost(dynamicPost));

    const payload = { ...item };
    console.log(payload, "latest");

    delete payload._id;

    DashBoardServices.SavePost(item._id, payload)
      .then((data) => {
        console.log(data, "system");
        toast("saved successfully");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const HandleDeleteFromSave = (item) => {
    console.log("joshua");
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        delete data.save;
        console.log(item);
      }
    });

    dispatch(getDynamicPost(dynamicPost));

    DashBoardServices.deleteSavedPost(item._id)
      .then((data) => {
        console.log(data, "delete");
        toast("savedpost successfully deleted");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <PostDiv>
      {dynamicPost?.map((item, key) => (
        <div key={key} className={"flex"}>
          <div className="userDetails">
            <div className="photoContainer">
              <Image src={photoOne} alt="" className="photoContainerImage" />
            </div>
          </div>

          <div className="mainPostContainer">
            <div
              className="mainPostContainerHeaderWrapper"
              onClick={() => HandleSinglePost(item)}
            >
              <div className="mainPostContainerHeaderWrapperSystem">
                <div className="profileImage">
                  <Image src={photoOne} alt="" className="profileImageState" />
                </div>
                <div className="userName">
                  <h4>{item.author}</h4>
                </div>
              </div>
              <div className="mainPostContainerHeaderWrapperContent">
                <h1>{item.title}</h1>
                <p className="textContent">{HTMLReactParser(item.article)}</p>
              </div>
            </div>
            <div className="postWrapper">
              <div className="postContainer">
                <p>{`${item.date}11 min read`}</p>
                <button>{item?.tag}</button>
              </div>
              <div className="postWrapperContent">
                {!item?.save ? (
                  <div
                    className="postWrapperContentSaveIconBody"
                    onClick={() => HandleSavePost(item)}
                  >
                    <MdOutlineBookmarkAdd className="postWrapperContentSaveIcon" />
                  </div>
                ) : (
                  <div
                    className="postWrapperContentSaveIconBody"
                    onClick={() => HandleDeleteFromSave(item)}
                  >
                    <MdOutlineBookmarkRemove className="postWrapperContentSaveIcon" />
                  </div>
                )}
                <div className="postWrapperContentFollowers">
                  <FiMoreHorizontal className="postWrapperContentFollowersIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </PostDiv>
  );
};

const posts = [
  {
    profilePics: photoOne,
    photo: photoOne,
    title:
      "How to build a blog Sungkyunkwan University (SKKU) is a world-class institution ",
    author: "Emeka",
    date: "Jan 20",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoTwo,
    title: "My First Electricity Connection",
    author: "Joshua Ejike",
    date: "August 19",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoThree,
    title: "How to become a better Programmer",
    author: "Emeka",
    date: "1 day ago",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoFour,
    title: "Step by step guide in Making good interior design",
    author: "Emeka",
    date: "May 24",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoFive,
    title: "A visit to paris",
    author: "Emeka",
    date: "June 23",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
];

export default Post;
