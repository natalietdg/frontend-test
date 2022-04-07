const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/comments";

const mapComments = (comments) => {
  const list = comments.map(({ postId, id, name, email, body }) => ({
    post_id: postId,
    id: id,
    comment_name: name,
    comment_email: email,
    comment_body: body,
  }));

  return list;
};

const getComments = async (req, res) => {
  try {
    const { params } = req || {};
    const { id } = params || {};
    let tempUrl = id ? `${url}?postId=${id}` : url;

    const response = await axios({
      url: tempUrl,
      responseType: "json",
      method: "get",
    });

    const { data } = response;
    const dataList = mapComments(data);
    return {
      post_comments: dataList,
      total_number_of_comments: dataList.length,
    };

  } catch (err) {
    console.log({ err });
  }
};

module.exports = { getComments };
