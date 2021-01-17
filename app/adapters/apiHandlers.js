import {API_URL} from '../config';

export const optionsHandler = {
  url: '',
  method: '',
  baseUrl: API_URL,
  header: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
  data: {},
};
