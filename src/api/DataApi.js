import axios from 'axios';
import baseURL from '../db/database';

// make axios calls
export const DataAPI = {
  getAll() {
    throw new Error(`the API doesnot support getAllItems`);
  },
  getItemById(id) {
    throw new Error(`the API doesnot support getItemById`);
    // return axios.get(`${baseURL}/bin/hw8lz/`);
  }
};
