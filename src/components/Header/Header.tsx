import React from 'react';
import './Header.scss';
import Logo from '../../static/Logo.svg';

export const Header: React.FC = () => (
  <header className="header container">
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
          <button className="btn" type="button">
            Users
          </button>
        </li>
        <li className="header__btn">
          <button className="btn" type="button">
            Sign up
          </button>
        </li>
      </ul>
    </div>
  </header>
);
