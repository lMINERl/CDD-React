import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
const actions = {
  onChange: e => console.log(e.target)
};

export const InputDefault = (
  InputType,
  inputText,
  themeColor,
  onChangeAction,
  htmlToolTip = null,
  htmlInputIcon = null
) => (
  <div
    className={
      'input input__container tooltip-informed input--' +
      themeColor +
      ' ml-auto mr-auto'
    }
  >
    {htmlInputIcon}
    {inputText}
    <input
      className={'ml-2 input input__text input--' + themeColor}
      type={InputType}
      onChange={onChangeAction}
    />
    {htmlToolTip}
  </div>
);

export const InputToolTip = (
  inputType,
  inputText,
  themeColor,
  tooltipText,
  onChangeAction,
  htmlInputIcon
) =>
  InputDefault(
    inputType,
    inputText,
    themeColor,
    onChangeAction,
    <div
      className={
        'tooltip-informed__text  tooltip-informed__text--' + themeColor
      }
    >
      {tooltipText}
    </div>,
    htmlInputIcon
  );

storiesOf('Input', module)
  .addDecorator(story => (
    <div
      key={Date.now()}
      style={{ margin: '1px auto', display: 'flex', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('default', () =>
    InputDefault('text', null, 'dark', actions.onChange, null, null)
  )
  .add('tooltip', () =>
    InputToolTip(
      'text',
      null,
      'bright',
      'Search',
      actions.onChange,
      <i className="input input__icon fa fa-search" />
    )
  )
  .add('text', () =>
    InputDefault('text', 'Frist Name: ', 'bright', actions.onChange, null, null)
  )
  .add('number', () =>
    InputDefault('number', 'age: ', 'bright', actions.onChange, null, null)
  );
