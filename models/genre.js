const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// ジャンルのスキーマを定義
const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// このジャンルインスタンスのURL用の仮想プロパティ
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// モデルをエクスポート
module.exports = mongoose.model("Genre", GenreSchema);
