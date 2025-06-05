const express = require("express");
const router = express.Router();

// コントローラーを読み込む
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// 本（BOOK）ルート ///

// カタログのホームページを取得
router.get("/", book_controller.index);

// 本の作成画面を取得（idを使うルートより前に記述すること）
router.get("/book/create", book_controller.book_create_get);

// 本の作成リクエスト（POST）
router.post("/book/create", book_controller.book_create_post);

// 本の削除画面を取得
router.get("/book/:id/delete", book_controller.book_delete_get);

// 本の削除リクエスト（POST）
router.post("/book/:id/delete", book_controller.book_delete_post);

// 本の更新画面を取得
router.get("/book/:id/update", book_controller.book_update_get);

// 本の更新リクエスト（POST）
router.post("/book/:id/update", book_controller.book_update_post);

// 1冊の本の詳細を取得
router.get("/book/:id", book_controller.book_detail);

// すべての本のリストを取得
router.get("/books", book_controller.book_list);

/// 著者（AUTHOR）ルート ///

// 著者の作成画面を取得（idを使うルートより前に記述すること）
router.get("/author/create", author_controller.author_create_get);

// 著者の作成リクエスト（POST）
router.post("/author/create", author_controller.author_create_post);

// 著者の削除画面を取得
router.get("/author/:id/delete", author_controller.author_delete_get);

// 著者の削除リクエスト（POST）
router.post("/author/:id/delete", author_controller.author_delete_post);

// 著者の更新画面を取得
router.get("/author/:id/update", author_controller.author_update_get);

// 著者の更新リクエスト（POST）
router.post("/author/:id/update", author_controller.author_update_post);

// 1人の著者の詳細を取得
router.get("/author/:id", author_controller.author_detail);

// すべての著者のリストを取得
router.get("/authors", author_controller.author_list);

/// ジャンル（GENRE）ルート ///

// ジャンルの作成画面を取得（idを使うルートより前に記述すること）
router.get("/genre/create", genre_controller.genre_create_get);

// ジャンルの作成リクエスト（POST）
router.post("/genre/create", genre_controller.genre_create_post);

// ジャンルの削除画面を取得
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// ジャンルの削除リクエスト（POST）
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// ジャンルの更新画面を取得
router.get("/genre/:id/update", genre_controller.genre_update_get);

// ジャンルの更新リクエスト（POST）
router.post("/genre/:id/update", genre_controller.genre_update_post);

// 1つのジャンルの詳細を取得
router.get("/genre/:id", genre_controller.genre_detail);

// すべてのジャンルのリストを取得
router.get("/genres", genre_controller.genre_list);

/// 本のインスタンス（BOOKINSTANCE）ルート ///

// 本のインスタンス作成画面を取得（idを使うルートより前に記述すること）
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

// 本のインスタンス作成リクエスト（POST）
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

// 本のインスタンス削除画面を取得
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

// 本のインスタンス削除リクエスト（POST）
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

// 本のインスタンス更新画面を取得
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

// 本のインスタンス更新リクエスト（POST）
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

// 1つの本のインスタンスの詳細を取得
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// すべての本のインスタンスのリストを取得
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
