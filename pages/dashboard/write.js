import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
// import Context from "@ckeditor/ckeditor5-core/src/context";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzkzNWUxOTZmYjgxMGIxODcxYjMwNWMiLCJlbWFpbCI6ImdvZGZpcnN0ZWppa2U0MjIxQGdtYWlsLmNvbSIsImlhdCI6MTY3MDcwMTM3NH0.fImaLxJjsGOF7Xoc6W2iyEPyKAw1P9lQ2d97-z_ilUU

const Write = () => {
  const [data, setData] = useState("");
  console.log(data);

  return (
    <DashbaordPageWrapper>
      <div>
        <CKEditor
          style={{ height: "100%" }}
          editor={ClassicEditor}
          // config={{
          //   plugins: [Paragraph, Bold, Italic, Essentials],
          //   toolbar: ["bold", "italic"],
          // }}
          data={data}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
            // console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </DashbaordPageWrapper>
  );
};

export default Write;
