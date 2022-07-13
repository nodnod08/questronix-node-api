// MODULES
const express = require("express");
const router = express.Router();

const postController = require("./../controllers/postController");

router.post("/create-post", async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return next(new Error("Title and Description need to have a value"));
  }

  let result = await postController.addPost({ title, description });

  if (!result)
    return next(new Error("Something went wrong about creating your post"));

  res.send({
    success: true,
    error: false,
    message: "Post has been created",
  });
});

router.get("/", async (req, res, next) => {
  let documents = await postController.getAllPosts();

  res.send({
    success: true,
    error: false,
    message: "All posts",
    data: documents,
  });
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let document;

  try {
    document = await postController.getPost(id);
  } catch (error) {
    return next(new Error(error.message));
  }

  res.send({
    success: true,
    error: false,
    message: "Specific posts",
    data: document,
  });
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  let document;

  try {
    document = await postController.findByIdAndUpdate(id, data);
  } catch (error) {
    return next(new Error(error.message));
  }

  res.send({
    success: true,
    error: false,
    message: "Post got it and updated",
    data: document,
  });
});

module.exports = router;
