import React from 'react';
import {Link} from 'react-router';

const Header = ({ title }) => {
  return (
    <header>
      <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
        <a className="navbar-brand" href="#">EğitimBudur</a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" activeClassName="active" className="nav-link">Ana Sayfa</Link>
          </li>
          <li className="nav-item">
            <Link to="/hakkimizda" activeClassName="active" className="nav-link">Hakkımızda</Link>
          </li>
          <li className="nav-item">
            <Link to="/iletisim" activeClassName="active" className="nav-link">İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
