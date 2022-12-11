import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchemaState from "../../Server/model/user";
import connectDB from "../../Server/db/connect";

export default async function handler(req, res) {
  connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log(req.body, "resent");
    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "please provide email and password" });
    }

    const user = await UserSchemaState.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "user not exiting" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    console.log(user, "resent");

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

    return res.status(StatusCodes.OK).json({
      data: {
        _id: user._id,
        email: user.email,
        token: token,
        message: "success",
      },
    });
  }
}
