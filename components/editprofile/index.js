import React, { useState } from "react";
import { StyledModal } from "./styles/modal.styles";
import userDefaultImage from "../../assets/Images/Avatar.png";
const EditProfile = () => {
  const [displayImage, setDisplayImage] = useState(userDefaultImage.src);
  const handleChange = (e) => {
    let image = e.target.files[0];
    console.log(image);
    setDisplayImage(URL.createObjectURL(image));
  };
  console.log(displayImage, "display");
  return (
    <StyledModal>
      <div className="formDiv">
        <div className="header">
          <h2>Profile information</h2>
          <button>X</button>
        </div>
        <div className="profilePhoto">
          <div className="image">
            <p>photo</p>
            <label for="imageUpload">
              <img src={displayImage} alt="image" />
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
            <p>
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
          </div>
        </div>
        <div className="formInput">
          <div className="inputContainer">
            <label>Name*</label>
            <input type="text" />
            <div className="inputText">
              <p>
                Appears on your Profile page, as your byline, and in your
                responses.
              </p>
              <p>15/50</p>
            </div>
          </div>
          <div className="inputContainer">
            <label>Bio</label>
            <input type="text" />
            <div className="inputText">
              <p>Appears on your Profile and next to your stories.</p>
              <p>28/160</p>
            </div>
          </div>
        </div>

        <div className="bottomBtn">
          <button className="cancelBtn">cancel</button>
          <button className="saveBtn">save</button>
        </div>
      </div>
    </StyledModal>
  );
};

export default EditProfile;
