import Axios from 'axios';
import {baseURl} from '../api';

interface IPost {
  url: string;
  data: any;
}

function Post<T>({url, data}: IPost) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseURl,
        url,
        data,
        method: 'post',
        headers: {
          contentType: 'application/json',
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}

interface IGet {
  url: string;
}

function Get<T>({url}: IPost) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseURl,
        url,
        method: 'get',
        headers: {
          contentType: 'application/json',
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}

export default {
  Post,
  Get,
};
