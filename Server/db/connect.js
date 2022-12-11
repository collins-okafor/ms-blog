const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

const connectDB = () => {
  return mongoose
    .connect(
      `${process.env.MONGO_URI}`,
      {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      }
      // ,
      // (err) => {
      //   if (err) console.log(err);
      //   else console.log("mongdb is connected");
      // }
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
