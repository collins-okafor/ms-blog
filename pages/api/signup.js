import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserSchemaState from "../../Server/model/user";
import connectDB from "../../Server/db/connect";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const resentUser = req.body;

    if (!req.body.email || !req.body.password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "please provide email and password" });
    }

    console.log(req.body, "make we seee");

    console.log(await UserSchemaState.findOne({ email: req.body.email }));

    if (await UserSchemaState.findOne({ email: req.body.email })) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "user already exits" });
    }

    console.log(req.body, "state");
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(resentUser.password, salt);
    console.log("stated");

    const newDetails = await { ...req.body, password: newPassword };

    console.log(newDetails, req.headers, "now");

    const user = await UserSchemaState.create(newDetails);

    console.log(user, "stated");

    return res.status(StatusCodes.CREATED).json({ msg: user });
  }
}
