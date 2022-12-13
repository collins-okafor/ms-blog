import fs from "fs";
import multer from "multer";
import path from "path";
import { config } from "process";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default function handler(req, res) {
  // connectDB();

  if (req.method === "POST") {
    const { file } = req.body;

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public");
      },

      filename: (req, file, cb) => {
        console.log(file, "reason");
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });

    const upload = multer({ storage: storage });

    upload.single("file");

    const base64CamData = file.replace(/^data:image\/png;base64,/, "");

    const uniqueCamName = Date.now().toString().concat("photo.jpg");
    fs.writeFile(
      `../../assets/uploads`,
      base64CamData,
      "base64",
      function (err) {
        console.log(err);
      }
    );

    console.log(`../../assets/uploads/${uniqueCamName}`);
    res.status(200).json({ name: `../../uploads/${uniqueCamName}` });
  }
}
