import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
const actions = {
  onClick: e => console.log(e.target)
};
// dynamic components

export const ButtonDefault = (
  text,
  btnClasses,
  onClickAction,
  htmlNotifcation = null,
  htmlToolTip = null
) => (
  <div onClick={onClickAction} className={'button ' + btnClasses}>
    <div className="button__text">{text}</div>
    {htmlNotifcation}
    {htmlToolTip}
  </div>
);

export const ButtonNotify = (
  text,
  btnClasses,
  notificationText,
  onClickAction
) => {
  const notify = <div className="button__notify">{notificationText}</div>;
  return ButtonDefault(text, btnClasses, onClickAction, notify, null);
};

export const ButtonToolTip = (
  text,
  tooltipText,
  btnClasses,
  tooltipClsClor,
  onClickAction
) => {
  const tooltip = (
    <div
      className={
        'tooltip-informed__text tooltip-informed__text--' + tooltipClsClor
      }
    >
      {tooltipText}
    </div>
  );
  return ButtonDefault(text, btnClasses, onClickAction, null, tooltip);
};

export const ButtonToolTipNotifcation = (
  text,
  btnClasses,
  tooltipText,
  tooltipClsClor,
  notificationText,
  onClickAction
) => {
  const notify = <div className="button__notify">{notificationText}</div>;
  const tooltip = (
    <div
      className={
        'tooltip-informed__text tooltip-informed__text--' + tooltipClsClor
      }
    >
      {tooltipText}
    </div>
  );
  return ButtonDefault(text, btnClasses, onClickAction, notify, tooltip);
};

// stories =========================================================================
storiesOf('Button', module)
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
    ButtonDefault(
      'Submit',
      'button--orange button--rectangled',
      actions.onClick,
      null,
      null
    )
  )

  .add('with notify', () =>
    ButtonNotify(
      <i className="fa fa-shopping-bag"></i>,
      'button--dark button--squared',
      100,
      actions.onClick
    )
  )

  .add('with tooltip', () =>
    ButtonToolTip(
      <i className="fa fa-shopping-cart"></i>,
      'Shopping cart',
      'button--orange button--rounded tooltip-informed ',
      'dark',
      actions.onClick
    )
  )

  .add('with tooltip and notification', () =>
    ButtonToolTipNotifcation(
      'Submit',
      'button--dark button--rectangled tooltip-informed',
      'agree',
      'dark',
      2,
      actions.onClick
    )
  );
