import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDataById } from '../../store/actions/DataActions';
const DataTable = props => {
  // pre-render
  const dispatch = useDispatch();

  const dataListRows = props.list.map(v => {
    return (
      <tr key={v._id} className="data-table__row data-table__row--standard">
        <td className="data-table__row__td">{v._id}</td>
        <td className="data-table__row__td">{v.name}</td>
        <td className="data-table__row__td">
          <div
            className={
              v.state === 'working'
                ? 'lable lable--success'
                : 'lable lable--danger'
            }
          >
            {v.state}
          </div>
        </td>
        <td className="data-table__row__td text-center">
          {v.productivity.value}
          <i
            className={
              v.productivity.isIncreased ? 'fa fa-level-up' : 'fa fa-level-down'
            }
          />
        </td>
        <td className="data-table__row__td d-flex">
          <div className="button button--orange button--squared mr-auto">
            <i className="fa fa-eye" />
          </div>
          <div
            className="button button--dark button--squared ml-auto"
            onClick={() => {
              console.log('clicked');
              dispatch(deleteDataById(v._id));
            }}
          >
            <i className="fa fa-trash" />
          </div>
        </td>
      </tr>
    );
  });
  // render
  return (
    <div className="data-table__container data-table__container--standard p-5 w-75">
      <table className="data-table">
        <thead className="data-table__head data-table__head--standard">
          <tr>
            <th className="data-table__head__th">NO.</th>
            <th className="data-table__head__th">Name</th>
            <th className="data-table__head__th">Status</th>
            <th className="data-table__head__th">Productivity</th>
            <th className="data-table__head__th">Operation</th>
          </tr>
        </thead>

        <tbody>{dataListRows}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
