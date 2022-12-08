import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { useEffect } from "react";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Write = () => {
  const [position, setPosition] = useState();

  function getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (newPos) => setPosition(newPos),
      console.error
    );
  }
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <DashbaordPageWrapper>
      <div>
        <CKEditor editor={ClassicEditor} onInit={(editor) => {}} />
      </div>
    </DashbaordPageWrapper>
  );
};

export default Write;
