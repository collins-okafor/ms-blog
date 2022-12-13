import { StatusCodes } from "http-status-codes";
import connectDB from "../../Server/db/connect";
import ArticleSchemaState from "../../Server/model/publishArticleModel";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const authHeader = req.headers.authorization;

    if (
      !req.body.title ||
      !req.body.article ||
      !req.body.tag ||
      !req.body.cover_pic
    ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "all field must be filled" });
    }

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Authentication invalid" });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    console.log(payload, "resent payload");

    const article = await ArticleSchemaState.create({
      ...req.body,
      username: payload.username,
      email: payload.email,
    });

    res.status(200).json({ data: article });
  }
}
