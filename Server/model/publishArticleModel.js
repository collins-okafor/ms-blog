import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "please provide title"],
    },

    article: {
      type: String,
      require: [true, "please provide article"],
    },

    tag: {
      type: String,
      require: [true, "please provide tag"],
    },

    cover_pic: {
      type: String,
      require: [true, "please provide tag"],
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

const ArticleSchemaState =
  mongoose.models.Articles || mongoose.model("Articles", ArticleSchema);

export default ArticleSchemaState;
