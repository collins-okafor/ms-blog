import React, { useEffect, useMemo, useRef, useState } from "react";
import photoOne from "../../assets/Images/about-us.jpg";
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
import moment from "moment";
import NotFound from "../Notfound";
import PostDropdown from "../postDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Post = () => {
  const ref = useRef();
  const [change, setChange] = useState(false);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);
  const [dropdown, setDropdown] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   setPost(dynamicPost);
  // }, [dynamicPost]);

  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  const HandleSinglePost = (item) => {
    router.push(`/dashboard/${item._id}`);
  };

  const HandleSavePost = async (item) => {
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        data["save"] = true;
      }
    });

    dispatch(getDynamicPost(dynamicPost));

    const payload = { ...item };
    console.log(payload, "latest");

    delete payload._id;

    await DashBoardServices.SavePost(item._id, payload)
      .then((data) => {
        console.log(data, "system");
        toast("saved successfully");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    setChange(!change);
  };

  const HandleDeleteFromSave = async (item) => {
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        delete data.save;
        console.log(data);
      }
    });
    // console.log(item, dynamicPost);
    // delete item.save;

    // const postIndex = post.findIndex((data) => data?._id === item._id);

    // console.log(postIndex);

    // post.splice(postIndex, postIndex + 1, item);

    // console.log(item, dynamicPost);

    setPost(dynamicPost);
    dispatch(getDynamicPost(dynamicPost));

    await DashBoardServices.deleteSavedPost(item._id)
      .then((data) => {
        console.log(data, "delete");
        toast("savedpost successfully deleted");
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const HandleDropdown = (item) => {
    if (!showDropdown) {
      setDropdown(item._id);
      setShowDropdown(true);
    } else {
      setDropdown("");
      setShowDropdown(false);
    }
  };

  useOnClickOutside(ref, () => setDropdown(""));

  return (
    <PostDiv>
      {dynamicPost === undefined ||
        dynamicPost === null ||
        (dynamicPost?.length === 0 && <NotFound text={"no post found"} />)}

      {dynamicPost?.length > 0 &&
        dynamicPost?.map((item, key) => (
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
                    <Image
                      src={photoOne}
                      alt=""
                      className="profileImageState"
                    />
                  </div>
                  <div className="userName">
                    <h4>{item.username}</h4>
                  </div>
                </div>
                <div className="mainPostContainerHeaderWrapperContent">
                  <h1>{item.title}</h1>
                  <p className="textContent">
                    {HTMLReactParser(HTMLReactParser(item.article))}
                  </p>
                </div>
              </div>

              <div className="postWrapper">
                <div className="postContainer">
                  <p>{`${moment(item.date).format("MMM DD, YYYY hh:mm")}`}</p>
                  <button>{item?.tag}</button>
                </div>
                <div className="postWrapperContent">
                  {!item?.save ||
                  item?.save === null ||
                  item?.save === undefined ? (
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
                  <div className="postWrapperContentFollowersState">
                    <div
                      className="postWrapperContentFollowers"
                      onClick={() => HandleDropdown(item)}
                    >
                      <FiMoreHorizontal className="postWrapperContentFollowersIcon" />
                    </div>

                    {dropdown === item._id && (
                      <PostDropdown
                        ref={ref}
                        details={item}
                        fullDetails={dynamicPost}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </PostDiv>
  );
};

export default Post;
