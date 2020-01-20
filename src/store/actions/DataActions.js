// actions const
export const GET_ALL_DATA = 'GET_ALL_DATA';
export const GET_DATA_BY_NAME = 'GET_DATA_BY_NAME';
export const DELETE_DATA_BY_ID = 'DELETE_DATA_BY_ID';
export const ADD_DATA = 'ADD_DATA';
export const ERROR = 'ERROR';
//

// Actions
export const getAllData = response => {
  return {
    type: GET_ALL_DATA,
    payload: response
  };
};
export const getDataByName = name => {
  return {
    type: GET_DATA_BY_NAME,
    payload: name
  };
};
export const deleteDataById = id => {
  return {
    type: DELETE_DATA_BY_ID,
    payload: id
  };
};
export const addDataToList = data => {
  return {
    type: ADD_DATA,
    payload: data
  };
};
