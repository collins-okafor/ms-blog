import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Dropdown from "../../universal-Components/Dropdown";
import { HiPhotograph } from "react-icons/hi";
import { WriteDiv } from "./styles/write.style";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import { AUTHLOADER } from "../../store/type";
import WriteService from "../../services/writeService";
// import MyEditor from "../../universal-Components/myEditor";

const MyEditor = dynamic(() => import("../../universal-Components/myEditor"), {
  ssr: false,
});

const WriteComponent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [form, setForm] = useState({});
  const [imageFile, setImageFile] = useState();

  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const [dropItem, setDropItem] = useState("Select Details");

  const HandleClickDropDown = (item) => {
    setDropItem(item.title);
  };

  function getbase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  const handleTextChange = (e) => {
    const { name } = e.target;

    if (name === "cover_pic") {
      const file = e.target.files[0];
      setImageFile(e.target.files[0]);

      let promise = getbase64(file);

      promise.then((data) => {
        setForm({ ...form, [name]: data });
        return data;
      });
    }

    if (name === "title") {
      setForm({ ...form, [name]: e.target.value });
    }
  };

  const handleEditor = (data) => {
    setData(data);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: AUTHLOADER, payload: true });

    if (data && form.title && form.cover_pic && dropItem) {
      const payload = {
        tag: dropItem,
        title: form?.title,
        cover_pic: form.cover_pic,
        article: data,
      };

      console.log(payload, "user payload");

      WriteService.postArticle(payload).then((data) => {
        dispatch({ type: AUTHLOADER, payload: false });
        console.log(data);
      });
    } else {
      toast.error("all filed my be filled !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: AUTHLOADER, payload: false });
    }
  };

  return (
    <WriteDiv>
      <div className="wirteWrappperHeader">
        <p>Write And Article</p>
      </div>
      <div className="wirteWrappperBody">
        <div className="wirteWrappperBodyFirstLine">
          <div className="wirteWrappperBodyFirstLineTitle">
            <p>Title</p>
            <textarea onChange={handleTextChange} name="title"></textarea>
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
                <p>{imageFile?.name ? imageFile?.name : "photo"}</p>
              </div>
            </div>
            <input
              type={"file"}
              name="cover_pic"
              className="wirteWrappperBodySecondLineFileInput"
              onChange={handleTextChange}
            />
          </div>
        </div>
      </div>
      <div className="wirteWrappperBodyEditor">
        <p className="wirteWrappperBodyEditorTitle">Article Body</p>
        <MyEditor handleEditor={handleEditor} data={data} />
      </div>

      <div className="wirteWrappperBodyButton">
        <button
          disabled={
            AuthLoader || !data || !form.title || !form.cover_pic || !dropItem
              ? true
              : false
          }
          onClick={HandleSubmit}
        >
          {AuthLoader ? <LoaderBob /> : <>Publish</>}
        </button>
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
