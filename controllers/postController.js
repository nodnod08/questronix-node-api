const Post = require("./../models/Post");

module.exports.addPost = async function (data) {
  const { title, description } = data;

  const post = new Post({
    title,
    description,
  });

  let result = await post.save();

  return result ? true : false;
};

module.exports.getAllPosts = async function () {
  let result = await Post.find();

  return result;
};

module.exports.getPost = async function (id) {
  let result = await Post.findOne({
    _id: id,
  });

  return result;
};

module.exports.findByIdAndUpdate = async function (id) {
  let result = await Post.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return result;
};

module.exports.findByIdAndDelete = async function (id) {
  let result = await Post.findByIdAndDelete(id);

  return result;
};
