import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
import logo from '../assets/logo.svg';
import { NavLink, BrowserRouter } from 'react-router-dom';

// actions ==============================================================
const actions = {
  onChange: e => console.log(e.target)
};

// dataHelper ==============================================================
const defaultProfileObject = {
  name: 'Mohamed',
  img: logo,
  menu: [
    {
      name: 'Profile',
      navigation: '/',
      fontawesomeIcon: 'fa fa-suitcase'
    },
    {
      name: 'Settings',
      navigation: '/',
      fontawesomeIcon: 'fa fa-cog'
    },
    {
      name: 'Logout',
      navigation: '/',
      fontawesomeIcon: 'fa fa-exclamation-circle'
    }
  ]
};

// dynamic Components ==============================================================

const getMenu = (menu, dropdownModifierClass) =>
  menu.map(m => (
    <div
      key={m.name}
      className={
        'profile__dropdown__row profile__dropdown__row--' +
        dropdownModifierClass
      }
    >
      <i className={'float-left ml-2 mr-2 ' + m.fontawesomeIcon}></i>
      <NavLink to={m.navigation}>{m.name}</NavLink>
    </div>
  ));

export const ProfileDefault = (
  profileObject = defaultProfileObject,
  profileModifierClass
) => (
  <div className={'profile profile--' + profileModifierClass}>
    <div
      className={
        'profile profile__img__container profile__img--' + profileModifierClass
      }
    >
      <img className="profile__img" src={profileObject.img} alt="logo"></img>
    </div>
    <div className="profile__text">{profileObject.name}</div>
    <i className="ml-auto mr-3 fa fa-angle-down"></i>
    <div
      className={'profile__dropdown profile__dropdown--' + profileModifierClass}
    >
      {getMenu(profileObject.menu, profileModifierClass)}
    </div>
  </div>
);

// stories ==============================================================

storiesOf('Profile', module)
  .addDecorator(story => (
    <BrowserRouter key={Date.now()}>
      <div
        style={{ marginTop: '100px' }}
        className="d-flex justify-content-center"
      >
        {story()}
      </div>
    </BrowserRouter>
  ))
  .add('default', () => ProfileDefault(defaultProfileObject, 'dark'))
  .add('bright', () => ProfileDefault(defaultProfileObject, 'bright'));
