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

module.exports = router;
