import React from 'react';
import './Header.scss';
import Logo from '../../static/Logo.svg';
import { Button } from '../Button';

export const Header: React.FC = () => (
  <header className="header container">
    <div className="header__container">
      <img
        src={Logo}
        alt="The logo of TESTTASK, containing cat"
        className="header__logo"
      />
      <ul className="header__btns">
        <li className="header__btn">
          <Button clickHandler={() => null}>Users</Button>
        </li>
        <li className="header__btn">
          <Button clickHandler={() => null}>Sign up</Button>
        </li>
      </ul>
    </div>
  </header>
);
