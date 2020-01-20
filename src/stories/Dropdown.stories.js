import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
// dynamic components

const getItems = (itemsArr, ThemeColor) =>
  itemsArr.map(i => (
    <div
      key={i}
      className={
        'mr-auto dropdown__list__item dropdown__list__item--' + ThemeColor
      }
    >
      {i}
    </div>
  ));

export const DropdownDefault = (titleName, itemsArr, ThemeColor) => (
  <div className={'dropdown dropdown--' + ThemeColor}>
    <div className={'dropdown__title'}>{titleName}</div>
    <i className="dropdown__icon fa fa-angle-down"></i>
    <div className={'dropdown__list'}>{getItems(itemsArr, ThemeColor)}</div>
  </div>
);

// stories =========================================================================
storiesOf('Dropdown', module)
  .addDecorator(story => (
    <div
      key={Date.now()}
      style={{ marginTop: '100px' }}
      className="d-flex justify-content-center"
    >
      {story()}
    </div>
  ))

  .add('default', () =>
    DropdownDefault('categories', ['item1', 'item2', 'item3', 'item4'], 'dark')
  );
