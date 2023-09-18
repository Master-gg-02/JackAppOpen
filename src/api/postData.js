import {FetchPost} from './fetchConfig';
// import { yrToast } from "../component/Toast"
const postData = async (data, api) => {
  return new Promise((resolve, reject) => {
    let url = 'https://mitehome.zendesk.com' + api;
    FetchPost(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        // yrToast(err,'center',1000)
        reject(err);
      });
  });
};
const ticketsPost = async data => {
  let res = await postData(data, '/api/v2/tickets.json');
  return res;
};

export {ticketsPost};
