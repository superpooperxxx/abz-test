import React from 'react';
import './Header.scss';
import Logo from '../../static/Logo.svg';

export const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header__container">
        <a href="/">
          <img
            src={Logo}
            alt="The logo of TESTTASK, containing cat"
            className="header__logo"
          />
        </a>
        <ul className="header__btns">
          <li className="header__btn">
            <a className="btn" type="button" href="#people">
              Users
            </a>
          </li>
          <li className="header__btn">
            <a className="btn" type="button" href="#sign-up">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
