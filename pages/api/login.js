import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchemaState from "../../Server/model/user";
import connectDB from "../../Server/db/connect";

export default async function handler(req, res) {
  connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "please provide email and password" });
    }

    const user = await UserSchemaState.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "user not exiting" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "wrong passwrod" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    );

    delete user.password;

    return res.status(StatusCodes.OK).json({ data: { ...user, token: token } });
  }
}
