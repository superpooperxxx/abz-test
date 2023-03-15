import React from 'react';
import './Button.scss';
import cn from 'classnames';

type Props = {
  children: string;
  big?: boolean;
  clickHandler: () => void;
};

export const Button: React.FC<Props> = ({ big, children, clickHandler }) => (
  <button
    type="button"
    className={cn('btn', {
      'btn btn--show-more': big,
    })}
    onClick={() => clickHandler()}
  >
    {children}
  </button>
);
