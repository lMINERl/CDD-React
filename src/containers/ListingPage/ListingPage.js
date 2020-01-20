import React, { useEffect, useMemo, Fragment } from 'react';
import Sidebar from '../../components/Sidebar';
import DataTable from '../../components/DataTable';

import { getAllData } from '../../store/actions/DataActions';
import { useSelector, useDispatch } from 'react-redux';
import DataTableError from '../../components/DataTable/DataTableError';

const ListingPage = props => {
  // pre-render
  const dataList = useSelector(state => state.data.filteredList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData);
  });

  const MemoSideBar = useMemo(() => {
    return <Sidebar />;
  }, []);

  // logic
  let DataTableView = null;
  if (dataList === undefined || dataList.length === 0) {
    DataTableView = <DataTableError />;
  } else {
    DataTableView = <DataTable list={dataList} />;
  }

  // render
  return (
    <div className="listingPage__section1">
      {MemoSideBar}
      {DataTableView}
    </div>
  );
};
export { ListingPage };
