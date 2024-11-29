import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="menu">
            <li><Link to="/">Басты бет</Link></li>
            <li><Link to="/twostranitsa">Наурыз</Link></li>
            <li><Link to="/threestranitsa">Қазақ киімі</Link></li>
            <li><Link to="/new-posts">Жаңа посттар</Link></li> {/* Добавили ссылку на новые посты */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
