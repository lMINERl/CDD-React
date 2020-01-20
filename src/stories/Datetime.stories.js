import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownDefault } from './Dropdown.stories';
// dynamic components

const getItems = () => {};

export const DatetimeDefault = themeColor => (
  <div className={'datetime datetime--' + themeColor}></div>
);

// stories =========================================================================
storiesOf('Datetime', module)
  .addDecorator(story => (
    <div
      key={Date.now()}
      style={{ marginTop: '100px' }}
      className="d-flex justify-content-center"
    >
      {story()}
    </div>
  ))

  .add('default', () => DatetimeDefault('dark'));
