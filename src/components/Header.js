import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link">
          Logout
        </button>
      </div>
    </div>
  </header>
);

export default Header;