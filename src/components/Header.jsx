import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <a href="#main" className="header__title">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#main" className="nav__link">Как купить?</a>
          </li>
          <li className="nav__item">
            <a href="#main" className="nav__link">Правила</a>
          </li>
          <li className="nav__item">
            <a href="#main" className="nav__link">Возврат билетов</a>
          </li>
        </ul>
      </nav>
      <div className="header__menu-block menu">
        <a href="#main" className="menu__login">
          <svg className="login__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
          Войти
        </a>
        <a href="#main" className="menu__button">
          <svg className="menu__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
