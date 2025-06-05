const mongoose = require("mongoose");
const { DateTime } = require("luxon"); // 日付処理用

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.ObjectId, ref: "Book", required: true }, // 関連する本への参照
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"], // 利用可能、メンテナンス中、貸出中、予約済み
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now }, // 返却期限
});

// このBookInstanceオブジェクトのURL用の仮想プロパティ
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

// 返却期限をフォーマットした仮想プロパティ
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

// 返却期限を 'YYYY-MM-DD' 形式で返す仮想プロパティ
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate();
});

// モデルをエクスポート
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
