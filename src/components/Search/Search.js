// import React from 'react';
import { useDispatch } from 'react-redux';
import { getDataByName } from '../../store/actions/DataActions';
import { InputToolTip } from '../../stories/Input.stories';

const Search = props => {
  //pre-render
  const dispatch = useDispatch();

  //render
  return InputToolTip('text', null, 'dark', e =>
    dispatch(getDataByName(e.target.value), <i className="fa fa-search" />)
  );
};

export default Search;
