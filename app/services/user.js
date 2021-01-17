import axios from 'axios';
import {optionsHandler} from '../adapters/apiHandlers';
import {GET_USERS} from '../config';

export const readUsers = async () => {
  optionsHandler.url = `${GET_USERS}`;
  optionsHandler.method = 'get';
  optionsHandler.data = null;
  try {
    let res = await axios(optionsHandler);
    return res.data;
  } catch (e) {
    throw e?.message;
  }
};
