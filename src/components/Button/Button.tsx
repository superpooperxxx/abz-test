import React from 'react';
import './Button.scss';

type Props = {
  children: string;
};

export const Button: React.FC<Props> = ({ children }) => (
  <button className="btn">{children}</button>
);
