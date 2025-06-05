const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// 本のスキーマを定義
const BookSchema = new Schema({
  title: { type: String, required: true }, // タイトル（必須）
  author: { type: Schema.ObjectId, ref: "Author", required: true }, // 著者（必須、Authorモデルへの参照）
  summary: { type: String, required: true }, // 概要（必須）
  isbn: { type: String, required: true }, // ISBN（必須）
  genre: [{ type: Schema.ObjectId, ref: "Genre" }], // ジャンル（Genreモデルへの参照の配列）
});

// この本インスタンスのURL用の仮想プロパティ
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// モデルをエクスポート
module.exports = mongoose.model("Book", BookSchema);
