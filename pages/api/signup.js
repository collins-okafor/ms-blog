import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchemaState from "../../Server/model/user";
import connectDB from "../../Server/db/connect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    const resentUser = req.body;

    if (!req.body.email || !req.body.password || !req.body.username) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "please provide email and password" });
    }

    if (await UserSchemaState.findOne({ email: req.body.email })) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "user already exits" });
    }

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(resentUser.password, salt);

    const newDetails = await { ...req.body, password: newPassword };

    // console.log(newDetails, req.headers, "now");

    const user = await UserSchemaState.create(newDetails);

    return res
      .status(StatusCodes.CREATED)
      .send({ data: { message: "success", email: user?.email } });
  }
}
