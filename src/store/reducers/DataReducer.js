import * as actionTypes from '../actions/DataActions';

const data = [
  {
    _id: 1,
    name: 'Mohamed',
    state: 'working',
    productivity: { value: 80, isIncreased: true }
  },
  {
    _id: 2,
    name: 'Ahmed',
    state: 'ide',
    productivity: { value: 15, isIncreased: false }
  },
  {
    _id: 3,
    name: 'Omar',
    state: 'working',
    productivity: { value: 1, isIncreased: true }
  },
  {
    _id: 4,
    name: 'Sara',
    state: 'holiday',
    productivity: { value: 26, isIncreased: true }
  }
];

const initialState = {
  dataList: data,
  filteredList: []
};

export default function DataReducer(state = initialState, action = {}) {
  let newDataList = [...state.dataList];
  let newFilteredList = [...newDataList];

  switch (action.type) {
    case actionTypes.GET_ALL_DATA:
      {
        const items = action.payload;
        newDataList = [...items];
        newFilteredList = [...items];
      }
      break;
    case actionTypes.GET_DATA_BY_NAME:
      {
        // accept only alphanumeric variables and ignoring special characters
        const name = action.payload.toLowerCase().replace(/[^a-z0-9]/gi, '');
        newFilteredList = newDataList.filter(
          c => c.name.toLowerCase().search(name) !== -1
        );
      }
      break;
    case actionTypes.DELETE_DATA_BY_ID:
      {
        const _id = action.payload;
        if (_id !== null && _id !== undefined) {
          const index = newDataList.findIndex(t => t._id === _id);
          if (index !== -1) {
            newDataList = [].concat(
              newDataList.slice(0, index),
              newDataList.slice(index + 1, newDataList.length)
            );
            newFilteredList = [...newDataList];
          }
        }
      }
      break;
    case actionTypes.ADD_DATA:
      {
        const dataId = Date.now();
        const newData = { ...action.payload, _id: dataId };

        newDataList.push(newData);
        newFilteredList = [...newDataList];
      }

      break;
    default:
      break;
  }
  return {
    ...state,
    dataList: newDataList,
    filteredList: newFilteredList
  };
}
