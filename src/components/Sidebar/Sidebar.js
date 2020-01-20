import React from 'react';
const Sidebar = props => {
  return (
    <ul className="sidebar navigation__logo">
      <li className="sidebar__row sidebar__row--dark">
        <i className="fa fa-dashboard"></i>
        <span className="sidebar__text">Dashboard</span>
        <i className="sidebar__row--extend fa fa-angle-right"></i>
      </li>
      <li className="sidebar__row sidebar__row--dark">
        <i className="fa fa-music"></i>
        <span className="sidebar__text">Mail</span>
        <i className="sidebar__row--extend fa fa-angle-right"></i>
      </li>
      <li className="sidebar__row sidebar__row--dark">
        <i className="fa fa-server"></i>
        <span className="sidebar__text">Database</span>
        <i className="sidebar__row--extend fa fa-angle-right"></i>
      </li>
      <li className="sidebar__row sidebar__row--dark">
        <i className="fa fa-bar-chart"></i>
        <span className="sidebar__text">Analysis</span>
        <i className="sidebar__row--extend fa fa-angle-right"></i>
      </li>
    </ul>
  );
};

export default Sidebar;
