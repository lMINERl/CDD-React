import React from 'react';
import Profile from '../NavigationProfile';
import Search from '../Search';
import { ButtonToolTipNotifcation } from '../../stories/Button.stories';
import logo from '../../assets/logo.svg';
const Navigation = props => {
  return (
    <div className="navigation">
      <div className="navigation navigation__logo navigation--dark">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navigation navigation__menu navigation--standard w-75">
        {/* input */}
        <Search />
        {/* button rounded */}
        <div className="mr-auto ml-auto">
          {ButtonToolTipNotifcation(
            <i className="fa fa-shopping-bag"></i>,
            'button--orange button--rounded',
            'Shopping crat',
            'dark',
            235
          )}
        </div>
        {/* profile */}
        <Profile />
      </div>
    </div>
  );
};

export default Navigation;
