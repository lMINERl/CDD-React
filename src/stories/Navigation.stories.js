import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
import logo from '../assets/logo.svg';
import { InputDefault } from './Input.stories';
import { ProfileDefault } from './ProfileMenu.stories';
import { BrowserRouter } from 'react-router-dom';

const actions = {
  onChange: e => console.log(e.target)
};

const Navigation = (
  htmlComponentButton = null,
  htmlComponentSearch = null,
  htmlComponentProfile = null
) => (
  <div className="navigation">
    <div className="navigation navigation__logo navigation--dark">
      <img src={logo} alt="logo"></img>
    </div>
    <div className="navigation navigation__menu navigation--standard w-75">
      {htmlComponentSearch}
      {htmlComponentButton}
      {htmlComponentProfile}
    </div>
  </div>
);

storiesOf('Navigation', module)
  .addDecorator(story => <div key={Date.now()}>{story()}</div>)
  .add('default', () => Navigation())
  .add('with search', () => (
    <BrowserRouter key={Date.now()}>
      {Navigation(
        null,
        InputDefault(
          'text',
          null,
          'dark',
          actions.onChange,
          null,
          <i className="fa fa-search" />
        ),
        ProfileDefault(
          {
            name: 'Ahmed',
            img: logo,
            menu: [
              {
                name: 'profile',
                navigation: '/',
                fontawesomeIcon: 'fa fa-user-circle'
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
          },
          'dark'
        )
      )}
    </BrowserRouter>
  ));
