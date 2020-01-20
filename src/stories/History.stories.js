import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';
// dynamic components

const linkHistory = [
  { name: 'Profile', navigation: '/' },
  { name: 'Accounts', navigation: '/' },
  { name: 'Security', navigation: '/' }
];

const getItems = (arr, themeColor) =>
  arr.map(item => (
    <Link
      to={item.navigation}
      className={'history__link history__link--' + themeColor}
    >
      {item.name}
    </Link>
  ));

export const HistoryDefault = (themeColor, arr) => (
  <div className={'history history--' + themeColor}>
    <Link
      to="\"
      className={'text-center history__link history__link--' + themeColor}
    >
      <i className="fa fa-home" />
    </Link>
    {arr.length > 0 ? getItems(arr, themeColor) : null}
  </div>
);

// stories =========================================================================
storiesOf('Link', module)
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
  .add('default', () => HistoryDefault('bright', linkHistory));
