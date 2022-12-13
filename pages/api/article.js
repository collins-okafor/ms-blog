import { StatusCodes } from "http-status-codes";
import connectDB from "../../Server/db/connect";
import ArticleSchemaState from "../../Server/model/publishArticleModel";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await connectDB();

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

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
        .send({ message: "all field must be filled" });
    }

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "Authentication invalid" });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.body.createdBy = payload.userId;

    const article = await ArticleSchemaState.create({
      ...req.body,
      username: payload.username,
      email: payload.email,
    });

    res
      .status(StatusCodes.CREATED)
      .send({ data: { article: article, message: "success" } });
  }
}
