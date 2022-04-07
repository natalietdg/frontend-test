const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts";
const comments = require("./comments");

const mapPosts = async (posts) => {
  const postsList = await Promise.all(
    posts
      .map(async ({ userId, id, title, body }) => {
        const { post_comments, total_number_of_comments } = await comments.getComments({ params: { id } });
        return {
          user_id: userId,
          post_id: id,
          post_title: title,
          post_body: body,
          post_comments,
          total_number_of_comments,
        };
      })
      .sort((a, b) => a.total_number_of_comments > b.total_number_of_comments)
  );

  return postsList;
};

const getSinglePost = async(req, res) => {
  try {
    const { params } = req;
    const { post_id } = params;

    if (post_id) {
      const response = await axios.get(`${url}?id=${post_id}`);

      const { data } = response;
      const dataList = await mapPosts(data);
      
      res.json({dataList});
    }
  } catch (err) {
    console.log({ err });
  }
};

const getPosts = async (req, res) => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    const dataList = await mapPosts(data);

    res.json({
      dataList,
    });
  } catch (err) {
    console.log({ err });
  }
};

module.exports = { getPosts, getSinglePost };
