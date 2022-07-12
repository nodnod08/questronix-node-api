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
