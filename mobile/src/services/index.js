import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com';
const port = '3001';

export async function getPosts() {
  return await axios
    .get(`${url}/posts`)
    .then(r => {
      const {data} = r;
      console.log({data});
      return data;
    })
    .catch(e => {
      if (!e.response) {
        // network error
        console.log({e});
      } else {
        // http status code
        const code = e.response.status;
        // response data
        const response = e.response.data;

        console.log({code});
        console.log({response});
      }
    });
}

export async function getPost(postId) {
  return await axios
    .get(`${url}/posts?id=${postId}`)
    .then(r => {
      const {data} = r;
      return data[0];
    })
    .catch(e => {
      console.log({e});
    });
}

export async function getComments(postId, query = '') {
  console.log({query});
  console.log({url: `${url}/comments?postId=${postId}&`.concat(query)});
  return await axios
    .get(`${url}/comments?postId=${postId}&`.concat(query))
    .then(r => {
      const {data} = r;
      return data;
    })
    .catch(e => {
      console.log({e});
    });
}
