import './_config';
import React from 'react';
import { storiesOf } from '@storybook/react';
import logo from '../assets/logo.svg';
import { ButtonDefault } from './Button.stories';
// dynamic components

export const CardDefault = (
  titleTxt,
  titlePrice,
  img,
  descriptionTxt,
  htmlActions,
  themeColor
) => (
  <div className={'card card--' + themeColor}>
    <div className={'card__img'}>
      <img src={img} alt="card-img" />
    </div>
    <div className={'card__title card__title--' + themeColor}>
      <div>{titleTxt}</div>
      {titlePrice}
    </div>
    <div className={'card__description card__description--' + themeColor}>
      {descriptionTxt}
    </div>
    {htmlActions}
  </div>
);

export const CardActions = (
  titleTxt,
  titlePrice,
  img,
  descriptionTxt,
  htmlActions,
  themeColor
) => {
  const html = <div className={'card__action'}>{htmlActions}</div>;
  return CardDefault(
    titleTxt,
    titlePrice,
    img,
    descriptionTxt,
    html,
    themeColor
  );
};

// stories =========================================================================
storiesOf('Card', module)
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
    CardDefault(
      'React Card',
      '123.00$',
      logo,
      ' this is sample description',
      null,
      'dark'
    )
  )
  .add('with actions', () => {
    const htmlActions = (
      <React.Fragment>
        {ButtonDefault(
          'Order Now',
          'button--orange button--xsmall button--rectangled button--rectangled--xsmall '
        )}
        {ButtonDefault(
          'Add To Cart',
          'button--orange button--xsmall button--rectangled button--rectangled--xsmall '
        )}
      </React.Fragment>
    );
    return CardActions(
      'React Card',
      null,
      logo,
      'this is sample description',
      htmlActions,
      'bright'
    );
  });
