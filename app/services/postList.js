import axios from 'axios';
import {optionsHandler} from '../adapters/apiHandlers';
import {GET_POSTS, GET_POST_COMMENTS} from '../config';

export const readAllPosts = async () => {
  optionsHandler.url = `${GET_POSTS}`;
  optionsHandler.method = 'get';
  optionsHandler.data = null;
  try {
    let res = await axios(optionsHandler);
    return res.data;
  } catch (e) {
    throw e?.message;
  }
};

export const readPostComments = async (postId) => {
  optionsHandler.url = `${GET_POST_COMMENTS}?postId=${postId}`;
  optionsHandler.method = 'get';
  optionsHandler.data = null;
  try {
    let res = await axios(optionsHandler);
    return res.data;
  } catch (e) {
    throw e?.message;
  }
};
