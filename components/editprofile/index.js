import React, { useState } from "react";
import { StyledModal } from "./styles/modal.styles";
import userDefaultImage from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import {
  getMyUserDetails,
  getRefreshUserDetails,
} from "../../store/actions/dashboardAction";
import DashBoardServices from "../../services/dashboardServices";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import Image from "next/image";

const EditProfile = () => {
  const [displayImage, setDisplayImage] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [changeImage, setChangeImage] = useState(false);

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.myUserDetails
  );

  const RefreshUserDetails = useSelector(
    (state) => state.DashboardReducers.RefreshUserDetails
  );

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

  const handleChange = async (e) => {
    let image = e.target.files[0];

    // setDisplayImage(URL.createObjectURL(image));
    // console.log({ image: image }, "new state");
    if (image) {
      let promise = getbase64(image);

      promise.then((data) => {
        DashBoardServices.uploadImage({ file: data })
          .then((data) => {
            setDisplayImage(data?.data?.url);

            // myUserDetails

            dispatch(
              getMyUserDetails({
                ...myUserDetails,
                profile_pic: data?.data?.url,
              })
            );

            dispatch(
              getRefreshUserDetails({
                ...RefreshUserDetails,
                profile_pic: data?.data?.url,
              })
            );
          })
          .catch((err) => {
            throw err;
          });
        // return data;
      });
    }
  };

  const handleCancel = () => {
    dispatch(getRefreshUserDetails(myUserDetails));
    dispatch(getLoginPageCounter({}));
  };

  const CancelDetails = () => {
    dispatch(getRefreshUserDetails(myUserDetails));
    dispatch(getLoginPageCounter({}));
  };

  const HandleInput = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      dispatch(getRefreshUserDetails({ ...RefreshUserDetails, [name]: value }));
    }

    if (name === "bio") {
      dispatch(getRefreshUserDetails({ ...RefreshUserDetails, [name]: value }));
    }
  };

  const HandleEditDetails = async (e) => {
    e.preventDefault();
    setLoading(true);

    await DashBoardServices.editUserDetails(RefreshUserDetails)
      .then((data) => {
        dispatch(getMyUserDetails({ ...myUserDetails, ...data }));
        dispatch(getRefreshUserDetails({ ...RefreshUserDetails, ...data }));
        setLoading(false);
      })
      .catch((err) => {});
  };

  return (
    <StyledModal>
      <div className="formDiv">
        <div className="header">
          <h2>Profile information</h2>
          <button onClick={handleCancel}>X</button>
        </div>
        <div className="profilePhoto">
          <div className="image">
            <p>photo</p>
            <label for="imageUpload">
              <Image
                src={
                  RefreshUserDetails.profile_pic &&
                  (RefreshUserDetails.profile_pic.startsWith("http") ||
                    RefreshUserDetails.profile_pic.startsWith("/"))
                    ? `${RefreshUserDetails.profile_pic}`
                    : userDefaultImage
                }
                width={100}
                height={100}
                alt="this"
              />
            </label>
            <input
              type="file"
              id="imageUpload"
              //   accept=".png, .jpg, .jpeg"
              accept="image/*"
              hidden="true"
              onChange={handleChange}
            />
          </div>
          <div className="update">
            <button className="updateBtn">update</button>
            <button className="removeBtn">remove</button>
            <p>Recommended: Square JPG, PNG, or GIF.</p>
          </div>
        </div>
        <div className="formInput">
          <div className="inputContainer">
            <label>Name*</label>
            <input
              type="text"
              onChange={HandleInput}
              name="username"
              value={
                (RefreshUserDetails?.username &&
                  RefreshUserDetails?.username) ||
                ""
              }
            />
            <div className="inputText">
              {/* <p>
                Appears on your Profile page, as your byline, and in your
                responses.
              </p>
              </p> */}
              {/* <p>15/50</p> */}
            </div>
          </div>
          <div className="inputContainer">
            <label>Bio</label>
            <input
              type="text"
              onChange={HandleInput}
              name="bio"
              value={(RefreshUserDetails?.bio && RefreshUserDetails?.bio) || ""}
            />
            <div className="inputText">
              <p>Appears on your Profile and next to your stories.</p>
              {/* <p>Appears on your Profile and next to your stories.</p> */}
              {/* <p>28/160</p> */}
            </div>
          </div>
        </div>

        <div className="bottomBtn">
          <button className="cancelBtn" onClick={CancelDetails}>
            cancel
          </button>
          <button className="saveBtn" onClick={HandleEditDetails}>
            {loading ? <LoaderBob /> : <>save</>}
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default EditProfile;
