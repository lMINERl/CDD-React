import { combineReducers } from 'redux';
import DataReducer from './reducers/DataReducer';

// compining reducers into 1 global state
export default combineReducers({
  data: DataReducer
});
