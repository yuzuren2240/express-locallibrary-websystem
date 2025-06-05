const mongoose = require("mongoose");
const { DateTime } = require("luxon"); // 日付処理用

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// 著者の「フル」ネームの仮想プロパティ
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// この著者インスタンスのURLの仮想プロパティ
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// 著者の生涯期間の仮想プロパティ
AuthorSchema.virtual("lifespan").get(function () {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATE_MED
    );
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATE_MED
    );
  }
  return lifetime_string;
});

// 生年月日を 'YYYY-MM-DD' 形式で返す仮想プロパティ
AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate();
});

// 没年月日を 'YYYY-MM-DD' 形式で返す仮想プロパティ
AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate();
});

// モデルをエクスポート
module.exports = mongoose.model("Author", AuthorSchema);
