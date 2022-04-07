const axios = require("axios");
const url = require("url");

const commentUrl = "https://jsonplaceholder.typicode.com/comments";

const map = {
  post_id: "postId",
  id: "id",
  comment_name: "name",
  comment_body: "body",
  comment_email: "email",
};

const mapComments = (comments) => {
  return comments.map(({ postId, id, name, email, body }) => ({
    post_id: postId,
    id: id,
    comment_name: name,
    comment_email: email,
    comment_body: body,
  }));
};

const mapQuery = (query) => {
  const mapped = Object.keys(query).map((q) => `${(map[q] = query[q])}`);

  return mapped.join("&");
};

const searchComments = (req, res) => {
  try {
    const { url: reqUrl } = req;
    console.log({ reqUrl });
    const query = url.parse(reqUrl, true).search;

    const mappedQuery = mapQuery(query);

    return axios.get(`${commentUrl}?${mappedQuery}`).then((r) => {
      const { data } = r;
      const dataList = mapComments(data);

      res.json({ dataList });
    });
  } catch (err) {
    console.log({ err });
  }
};

module.exports = { searchComments };
