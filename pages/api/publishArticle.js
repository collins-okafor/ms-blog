import { StatusCodes } from "http-status-codes";
import connectDB from "../../Server/db/connect";
import ArticleSchemaState from "../../Server/model/publishArticleModel";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Authentication invalid" });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);
  }
}
