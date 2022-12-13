import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchemaState from "../../Server/model/user";
import connectDB from "../../Server/db/connect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  connectDB();

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "please provide email and password" });
    }

    const user = await UserSchemaState.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "user not exiting" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    console.log(user, "resent");

    if (!isMatch) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "wrong passwrod" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET
    );

    delete user.password;

    return res.status(StatusCodes.OK).json({
      data: {
        _id: user._id,
        email: user.email,
        username: user.username,
        token: token,
        message: "success",
      },
    });
  }
}
